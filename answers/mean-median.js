/**
 * Input
 * Array of integers which will contain many parts.
 * Each part is sorted by ascending order.
 *
 * Task
 * Calculate mean and median for each part
 *
 * Input Example
 * [3,4,6,17,25,21,23]
 *
 * Expected Output
 * [
 *  { mean: 11, median: 6 },
 *  { mean: 22, median: 22 }
 * ]
 *
 * Explanation
 * [3,4,6,17,25,21,23]
 * The input can be separated into 2 parts which are (3, 4, 6, 17, 25) and (21, 23)
 * because each part should be sorted by ascending order, and 21 is less than 25.
 * Mean of (3, 4, 6, 17, 25) is 11 and the median is 6.
 * Mean of (21, 23) is 22 and the median is 22.
 *
 */

function meanAndMedian(nums = []) {
  // Read Element (looping)
  // if element M > N, split
  // Mean : sum each part element
  // Median : Find the middle number

  const results = []
  let highNumIdx = 0
  let mean = 0
  let median = 0
  for (let i = 0; i < nums.length; i++) {
    const M = nums[i]
    const N = nums[i + 1]

    mean += M
    if (M > N || !N) {
      const newNums = nums.slice(highNumIdx, i + 1)
      const partLength = newNums.length
      // Calculate Mean
      mean = Math.floor(mean / partLength)

      // Calculate Median
      const medIdx = Math.floor((partLength - 1) / 2)
      median = partLength % 2 ? newNums[medIdx] : (newNums[medIdx] + newNums[medIdx + 1]) / 2

      results.push({ mean, median })

      // Reset mean value & set the last highest number index
      mean = 0
      highNumIdx = i + 1
    }
  }

  return results
}

module.exports = { meanAndMedian }


