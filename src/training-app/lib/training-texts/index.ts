import { batch1Stories } from "./batch-1"
import { batch2Stories } from "./batch-2"
import { batch3Stories } from "./batch-3"
import { batch4Stories } from "./batch-4"
import { batch5Stories } from "./batch-5"
import { batch6Stories } from "./batch-6"
import { batch7Stories } from "./batch-7"
import { batch8Stories } from "./batch-8"
import { batch9Stories } from "./batch-9"
import { batch10Stories } from "./batch-10"
import { batch11Stories } from "./batch-11"
import { batch12Stories } from "./batch-12"
import { batch13Stories } from "./batch-13"
import { batch14Stories } from "./batch-14"
import { batch15Stories } from "./batch-15"
import { batch16Stories } from "./batch-16"
import { getStartingBatch, createBatchSequence } from "../state-batch-mapping"

export type TrainingStory = {
  id: number
  title: string
  content: string
}

const PLACEHOLDER_PREFIX = "[Content unavailable due to document truncation"

const isValidStory = (story: TrainingStory | undefined): story is TrainingStory =>
  Boolean(story && story.content && !story.content.startsWith(PLACEHOLDER_PREFIX))

const rawBatchEntries: Array<[number, TrainingStory[]]> = [
  [1, batch1Stories],
  [2, batch2Stories],
  [3, batch3Stories],
  [4, batch4Stories],
  [5, batch5Stories],
  [6, batch6Stories],
  [7, batch7Stories],
  [8, batch8Stories],
  [9, batch9Stories],
  [10, batch10Stories],
  [11, batch11Stories],
  [12, batch12Stories],
  [13, batch13Stories],
  [14, batch14Stories],
  [15, batch15Stories],
  [16, batch16Stories],
]

const batchEntries = rawBatchEntries.map(([batchNumber, stories]) => [
  batchNumber,
  stories.filter(isValidStory),
] as const)

export const allStories: TrainingStory[] = batchEntries.flatMap(([, stories]) => stories)

const batchMap: Record<number, TrainingStory[]> = Object.fromEntries(batchEntries) as Record<
  number,
  TrainingStory[]
>

export function getStoryById(id: number): TrainingStory | undefined {
  return allStories.find((story) => story.id === id && isValidStory(story))
}

export function getStoriesInBatch(batchNumber: number): TrainingStory[] {
  return batchMap[batchNumber] ?? []
}

export function getNextStory(completedStoryIds: number[]): TrainingStory | null {
  const nextStory = allStories.find((story) => !completedStoryIds.includes(story.id) && isValidStory(story))
  return nextStory ?? null
}

export function getNextStoryForRegion(
  region: string | null | undefined,
  completedStoryIds: number[]
): TrainingStory | null {
  const startingBatch = getStartingBatch(region)
  const batchSequence = createBatchSequence(startingBatch)

  for (const batchNumber of batchSequence) {
    const batchStories = getStoriesInBatch(batchNumber)
    const nextStory = batchStories.find((story) => !completedStoryIds.includes(story.id) && isValidStory(story))

    if (nextStory) {
      return nextStory
    }
  }

  return null
}

export function getTotalStoryCount(): number {
  return allStories.length
}



