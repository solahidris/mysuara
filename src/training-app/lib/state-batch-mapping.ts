/**
 * State-to-Batch Starting Point Mapping
 * 
 * Each of Malaysia's 16 states/territories starts at a different batch
 * to ensure even distribution of data collection across all stories.
 * 
 * After completing their starting batch, users continue through the remaining
 * batches in sequence until all 773 stories are completed.
 * 
 * Example: Penang starts at Batch 9
 * → Stories 385-432 (Batch 9)
 * → Stories 433-480 (Batch 10)
 * → Stories 481-528 (Batch 11)
 * → ... continues until all batches complete
 */

export const STATE_BATCH_MAPPING: Record<string, number> = {
  // Batch 1 starters (Stories 1-48)
  "Johor": 1,

  // Batch 2 starters (Stories 49-96)
  "Kedah": 2,

  // Batch 3 starters (Stories 97-144)
  "Kelantan": 3,

  // Batch 4 starters (Stories 145-192)
  "Kuala Lumpur": 4,

  // Batch 5 starters (Stories 193-240)
  "Labuan": 5,

  // Batch 6 starters (Stories 241-288)
  "Melaka": 6,

  // Batch 7 starters (Stories 289-336)
  "Negeri Sembilan": 7,

  // Batch 8 starters (Stories 337-384)
  "Pahang": 8,

  // Batch 9 starters (Stories 385-432)
  "Penang": 9,

  // Batch 10 starters (Stories 433-480)
  "Perak": 10,

  // Batch 11 starters (Stories 481-528)
  "Perlis": 11,

  // Batch 12 starters (Stories 529-576)
  "Putrajaya": 12,

  // Batch 13 starters (Stories 577-624)
  "Sabah": 13,

  // Batch 14 starters (Stories 625-672)
  "Sarawak": 14,

  // Batch 15 starters (Stories 673-720)
  "Selangor": 15,

  // Batch 16 starters (Stories 721-773)
  "Terengganu": 16,
}

/**
 * Get the starting batch number for a given state/region
 * Returns 1 if region is not found (default to Batch 1)
 */
export function getStartingBatch(region: string | null | undefined): number {
  if (!region) return 1
  
  // Normalize region name (handle case variations)
  const normalizedRegion = Object.keys(STATE_BATCH_MAPPING).find(
    key => key.toLowerCase() === region.toLowerCase()
  )
  
  return normalizedRegion ? STATE_BATCH_MAPPING[normalizedRegion] : 1
}

/**
 * Get the story ID ranges for each batch
 */
export const BATCH_RANGES: Record<number, { start: number; end: number; count: number }> = {
  1: { start: 1, end: 48, count: 48 },
  2: { start: 49, end: 96, count: 48 },
  3: { start: 97, end: 144, count: 48 },
  4: { start: 145, end: 192, count: 48 },
  5: { start: 193, end: 240, count: 48 },
  6: { start: 241, end: 288, count: 48 },
  7: { start: 289, end: 336, count: 48 },
  8: { start: 337, end: 384, count: 48 },
  9: { start: 385, end: 432, count: 48 },
  10: { start: 433, end: 480, count: 48 },
  11: { start: 481, end: 528, count: 48 },
  12: { start: 529, end: 576, count: 48 },
  13: { start: 577, end: 624, count: 48 },
  14: { start: 625, end: 672, count: 48 },
  15: { start: 673, end: 720, count: 48 },
  16: { start: 721, end: 773, count: 53 },
}

const TOTAL_BATCHES = Object.keys(BATCH_RANGES).length

/**
 * Create a batch sequence starting from the given batch number
 * Example: startingBatch = 9 → [9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8]
 */
export function createBatchSequence(startingBatch: number): number[] {
  const sequence: number[] = []
  const normalizedStartingBatch = ((startingBatch - 1 + TOTAL_BATCHES) % TOTAL_BATCHES) + 1

  for (let i = normalizedStartingBatch; i <= TOTAL_BATCHES; i++) {
    sequence.push(i)
  }

  for (let i = 1; i < normalizedStartingBatch; i++) {
    sequence.push(i)
  }

  return sequence
}

/**
 * Check if a story ID belongs to a specific batch
 */
export function isStoryInBatch(storyId: number, batchNumber: number): boolean {
  const range = BATCH_RANGES[batchNumber]
  if (!range) return false
  return storyId >= range.start && storyId <= range.end
}

/**
 * Get batch number for a given story ID
 */
export function getBatchForStory(storyId: number): number | null {
  for (const [batchNum, range] of Object.entries(BATCH_RANGES)) {
    if (storyId >= range.start && storyId <= range.end) {
      return parseInt(batchNum)
    }
  }
  return null
}

