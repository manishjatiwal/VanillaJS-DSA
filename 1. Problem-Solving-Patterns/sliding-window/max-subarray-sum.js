/**
 * Write a function called maxSubarraySum, which accepts an array of integers
 * and a number called n. The function should calculate the maximum sub of n
 * consecutive elements in array.
 */

function maxSubarraySum(array, n) {
  if (array.length === 0 || n === 0) {
    return 0
  }
  let maxSum = -Infinity
  let tempSum = 0
  let i = 0
  while (i < n) {
    tempSum += array[i]
    maxSum = tempSum
    i++
  }
  while (i < array.length) {
    tempSum = tempSum + array[i] - array[i - n]
    if (tempSum > maxSum) {
      maxSum = tempSum
    }
    i++
  }
  return maxSum
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
