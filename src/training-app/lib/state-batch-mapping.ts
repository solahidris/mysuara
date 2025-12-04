/**
 * State-to-Batch Starting Point Mapping
 * 
 * Each of Malaysia's 16 states/territories starts at a different batch
 * to ensure even distribution of data collection across all stories.
 * 
 * After completing their starting batch, users continue through the remaining
 * batches in sequence until all 928 stories are completed.
 * 
 * Example: Penang starts at Batch 9
 * → Stories 385-432 (Batch 9)
 * → Stories 433-480 (Batch 10)
 * → Stories 481-528 (Batch 11)
 * → ... continues until all batches complete
 */

export const STATE_BATCH_MAPPING: Record<string, number> = {
  // Batch 1 starters (Stories 1-58)
  "Johor": 1,

  // Batch 2 starters (Stories 59-116)
  "Kedah": 2,

  // Batch 3 starters (Stories 117-174)
  "Kelantan": 3,

  // Batch 4 starters (Stories 175-232)
  "Kuala Lumpur": 4,

  // Batch 5 starters (Stories 233-290)
  "Labuan": 5,

  // Batch 6 starters (Stories 291-348)
  "Melaka": 6,

  // Batch 7 starters (Stories 349-406)
  "Negeri Sembilan": 7,

  // Batch 8 starters (Stories 407-464)
  "Pahang": 8,

  // Batch 9 starters (Stories 465-522)
  "Penang": 9,

  // Batch 10 starters (Stories 523-580)
  "Perak": 10,

  // Batch 11 starters (Stories 581-638)
  "Perlis": 11,

  // Batch 12 starters (Stories 639-696)
  "Putrajaya": 12,

  // Batch 13 starters (Stories 697-754)
  "Sabah": 13,

  // Batch 14 starters (Stories 755-812)
  "Sarawak": 14,

  // Batch 15 starters (Stories 813-870)
  "Selangor": 15,

  // Batch 16 starters (Stories 871-928)
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
  1: { start: 1, end: 58, count: 58 },
  2: { start: 59, end: 116, count: 58 },
  3: { start: 117, end: 174, count: 58 },
  4: { start: 175, end: 232, count: 58 },
  5: { start: 233, end: 290, count: 58 },
  6: { start: 291, end: 348, count: 58 },
  7: { start: 349, end: 406, count: 58 },
  8: { start: 407, end: 464, count: 58 },
  9: { start: 465, end: 522, count: 58 },
  10: { start: 523, end: 580, count: 58 },
  11: { start: 581, end: 638, count: 58 },
  12: { start: 639, end: 696, count: 58 },
  13: { start: 697, end: 754, count: 58 },
  14: { start: 755, end: 812, count: 58 },
  15: { start: 813, end: 870, count: 58 },
  16: { start: 871, end: 928, count: 58 },
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

