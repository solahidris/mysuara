import { supabase, type TrainingSubmission, type User } from "./supabase"
import { uploadAudioToStorage, deleteAudioFromStorage } from "./supabase-storage"
import { getNextStoryForRegion, getTotalStoryCount, allStories } from "./training-texts"

type Nullable<T> = T | null | undefined

export async function getOrCreateUser({
  email,
  privyId,
  region,
}: {
  email: string
  privyId?: string
  region?: Nullable<string>
}): Promise<User> {
  const filters = [`email.eq.${email}`]
  if (privyId) {
    filters.push(`privy_id.eq.${privyId}`)
  }

  const { data: existingUser, error } = await supabase
    .from("users")
    .select("*")
    .or(filters.join(","))
    .maybeSingle()

  if (error && error.code !== "PGRST116") {
    throw error
  }

  if (existingUser) {
    const updates: Partial<Pick<User, "privy_id" | "region">> = {}
    if (privyId && !existingUser.privy_id) {
      updates.privy_id = privyId
    }
    if (region && region !== existingUser.region) {
      updates.region = region
    }

    if (Object.keys(updates).length > 0) {
      const { data, error: updateError } = await supabase
        .from("users")
        .update(updates)
        .eq("id", existingUser.id)
        .select()
        .single()

      if (updateError) {
        throw updateError
      }

      return data
    }

    return existingUser
  }

  const { data: newUser, error: createError } = await supabase
    .from("users")
    .insert({
      email,
      privy_id: privyId ?? null,
      region: region ?? null,
      total_earnings: 0,
    })
    .select()
    .single()

  if (createError) {
    throw createError
  }

  return newUser
}

export async function fetchUserSubmissions(userId: string): Promise<{
  submissions: TrainingSubmission[]
  totalEarnings: number
}> {
  const [{ data: submissions, error }, { data: user }] = await Promise.all([
    supabase
      .from("training_submissions")
      .select("*")
      .eq("user_id", userId)
      .order("submitted_at", { ascending: false }),
    supabase.from("users").select("total_earnings").eq("id", userId).maybeSingle(),
  ])

  if (error) {
    throw error
  }

  return {
    submissions: submissions ?? [],
    totalEarnings: (user?.total_earnings as number | undefined) ?? 0,
  }
}

export async function deleteSubmission(submissionId: string): Promise<void> {
  const { data: submission, error: fetchError } = await supabase
    .from("training_submissions")
    .select("*")
    .eq("id", submissionId)
    .maybeSingle()

  if (fetchError) {
    throw fetchError
  }
  if (!submission) {
    throw new Error("Submission not found")
  }

  if (submission.audio_url) {
    try {
      await deleteAudioFromStorage(submission.audio_url)
    } catch (error) {
      console.error("Error deleting audio file:", error)
    }
  }

  const { error: deleteError } = await supabase
    .from("training_submissions")
    .delete()
    .eq("id", submissionId)

  if (deleteError) {
    throw deleteError
  }

  await supabase.rpc("increment_user_earnings", {
    user_id_input: submission.user_id,
    amount: -Number(submission.earnings),
  })
}

export async function getNextStory({
  userId,
  region,
}: {
  userId?: Nullable<string>
  region?: Nullable<string>
}): Promise<
  | {
      completed: true
      message?: string
      totalStories: number
      text: null
      storyId: null
      title: null
    }
  | {
      completed?: false
      text: string
      storyId: number
      title: string
      totalStories: number
      currentStory: number
    }
> {
  if (!userId) {
    const completedStoryIds: number[] = []
    const firstStory = getNextStoryForRegion(region, completedStoryIds)

    if (!firstStory) {
      return {
        completed: true,
        message: "No stories available",
        totalStories: getTotalStoryCount(),
        text: null,
        storyId: null,
        title: null,
      }
    }

    return {
      text: firstStory.content,
      storyId: firstStory.id,
      title: firstStory.title,
      totalStories: getTotalStoryCount(),
      currentStory: 1,
    }
  }

  let userRegion = region ?? null

  if (!userRegion) {
    const { data: user } = await supabase.from("users").select("region").eq("id", userId).maybeSingle()
    userRegion = user?.region ?? null
  }

  const { data: submissions, error } = await supabase
    .from("training_submissions")
    .select("story_id")
    .eq("user_id", userId)
    .not("story_id", "is", null)

  if (error) {
    const fallbackStory = allStories[0]
    return {
      text: fallbackStory.content,
      storyId: fallbackStory.id,
      title: fallbackStory.title,
      totalStories: getTotalStoryCount(),
      currentStory: 1,
    }
  }

  const completedStoryIds =
    submissions?.map((submission) => submission.story_id).filter((id): id is number => id !== null) ?? []

  const nextStory = getNextStoryForRegion(userRegion, completedStoryIds)

  if (!nextStory) {
    return {
      completed: true,
      message: "You have completed all available stories! 🎉",
      totalStories: getTotalStoryCount(),
      text: null,
      storyId: null,
      title: null,
    }
  }

  return {
    text: nextStory.content,
    storyId: nextStory.id,
    title: nextStory.title,
    totalStories: getTotalStoryCount(),
    currentStory: completedStoryIds.length + 1,
  }
}

export async function createSubmission({
  userId,
  storyId,
  originalText,
  correctedText,
  region,
  audioBlob,
}: {
  userId: string
  storyId: number | null
  originalText: string
  correctedText: string
  region?: Nullable<string>
  audioBlob?: Nullable<Blob>
}) {
  let audioUrl: string | undefined

  if (audioBlob && audioBlob.size > 0) {
    const submissionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}_${Math.random().toString(36).slice(2)}`
    audioUrl = await uploadAudioToStorage(audioBlob, userId, submissionId)
  }

  const earnings = 0.1

  const { data: submission, error } = await supabase
    .from("training_submissions")
    .insert({
      user_id: userId,
      story_id: storyId,
      original_text: originalText,
      corrected_text: correctedText,
      audio_url: audioUrl,
      region: region ?? null,
      earnings,
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  await supabase.rpc("increment_user_earnings", {
    user_id_input: userId,
    amount: earnings,
  })

  return submission
}

