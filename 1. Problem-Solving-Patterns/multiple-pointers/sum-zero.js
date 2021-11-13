/**
 * Write a function called sumZero, which accepts a sorted array of intgers. The
 * function shuould find the first pair where the sum is 0. Return an array that
 * includes both the values that sum to zero or undefined if a pair doesnot
 * exist.
 */

function sumZero(array) {
  let i = 0,
    j = array.length
  while (i < j) {
    const sum = array[i] + array[j]
    if (sum < 0) {
      i++
    } else if (sum === 0) {
      return [array[i], array[j]]
    } else {
      j--
    }
  }
  return undefined
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
