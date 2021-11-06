/**
 * Implement a function called countUniqueValues which accepts a sorted array,
 * and counts the unique values in the array.
 */

function countUniqueValuesOld(array) {
  const length = array.length
  if (length < 2) {
    return length
  }
  let count = 1,
    i = 0,
    j = 1
  while (j < length) {
    if (array[i] !== array[j]) {
      count += 1
      i = j
    }
    j += 1
  }
  return count
}

function countUniqueValues(array) {
  const length = array.length
  if (length < 2) {
    return length
  }
  let i = 0,
    j = 1
  while (j < length) {
    if (array[i] !== array[j]) {
      i += 1
      array[i] = array[j]
    }
    j += 1
  }
  return i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 4]))
console.log(countUniqueValues([1, 1, 1, 2, 4]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
