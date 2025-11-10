import { batch1Stories } from "./batch-1"
import { batch2Stories } from "./batch-2"
import { batch3Stories } from "./batch-3"
import { batch4Stories } from "./batch-4"
import { batch5Stories } from "./batch-5"
import { batch6Stories } from "./batch-6"
import { batch7Stories } from "./batch-7"
import { batch8Stories } from "./batch-8"
import { batch9Stories } from "./batch-9"
import { getStartingBatch, createBatchSequence } from "../state-batch-mapping"

export type TrainingStory = {
  id: number
  title: string
  content: string
}

// Combine all batches into a single array (280 stories total)
const PLACEHOLDER_PREFIX = "[Content unavailable due to document truncation"

const isValidStory = (story: TrainingStory | undefined): story is TrainingStory =>
  Boolean(story && story.content && !story.content.startsWith(PLACEHOLDER_PREFIX))

export const allStories: TrainingStory[] = [
  ...batch1Stories.filter(isValidStory), // IDs 1-31
  ...batch2Stories.filter(isValidStory), // IDs 32-62
  ...batch3Stories.filter(isValidStory), // IDs 63-93
  ...batch4Stories.filter(isValidStory), // IDs 94-124
  ...batch5Stories.filter(isValidStory), // IDs 125-155
  ...batch6Stories.filter(isValidStory), // IDs 156-186
  ...batch7Stories.filter(isValidStory), // IDs 187-217
  ...batch8Stories.filter(isValidStory), // IDs 218-248
  ...batch9Stories.filter(isValidStory), // IDs 249-280
]

// Map batch numbers to their story arrays
const batchMap: Record<number, TrainingStory[]> = {
  1: batch1Stories.filter(isValidStory),
  2: batch2Stories.filter(isValidStory),
  3: batch3Stories.filter(isValidStory),
  4: batch4Stories.filter(isValidStory),
  5: batch5Stories.filter(isValidStory),
  6: batch6Stories.filter(isValidStory),
  7: batch7Stories.filter(isValidStory),
  8: batch8Stories.filter(isValidStory),
  9: batch9Stories.filter(isValidStory),
}

// Get story by ID
export function getStoryById(id: number): TrainingStory | undefined {
  return allStories.find((story) => story.id === id && isValidStory(story))
}

// Get stories for a specific batch
export function getStoriesInBatch(batchNumber: number): TrainingStory[] {
  return (batchMap[batchNumber] || []).filter(isValidStory)
}

// Get the next story in sequence for a user (legacy - no region)
// Returns the first story they haven't completed yet
export function getNextStory(completedStoryIds: number[]): TrainingStory | null {
  // Find the first story that hasn't been completed
  const nextStory = allStories.find((story) => !completedStoryIds.includes(story.id) && isValidStory(story))
  return nextStory || null
}

/**
 * Get the next story for a user based on their region
 * Users from different regions start at different batches for even distribution
 * 
 * @param region - User's selected region (state)
 * @param completedStoryIds - Array of story IDs the user has already completed
 * @returns The next story to complete, or null if all stories are done
 */
export function getNextStoryForRegion(
  region: string | null | undefined,
  completedStoryIds: number[]
): TrainingStory | null {
  // Get the starting batch for this region
  const startingBatch = getStartingBatch(region)
  
  // Create the batch sequence for this region
  // Example: Penang (batch 9) → [9, 1, 2, 3, 4, 5, 6, 7, 8]
  const batchSequence = createBatchSequence(startingBatch)
  
  // Loop through batches in the region's sequence
  for (const batchNumber of batchSequence) {
    const batchStories = getStoriesInBatch(batchNumber)
    
    // Find the first uncompleted story in this batch
    const nextStory = batchStories.find(
      (story) => !completedStoryIds.includes(story.id) && isValidStory(story)
    )
    
    if (nextStory) {
      // Found the next story for this user!
      return nextStory
    }
    
    // This batch is complete, continue to next batch in sequence
  }
  
  // All 280 stories completed!
  return null
}

// Get total number of stories
export function getTotalStoryCount(): number {
  return allStories.length
}

