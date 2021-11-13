// Binary Search
function binarySearch(array, n) {
  let min = 0
  let max = array.length - 1
  let index = -1
  while (min <= max) {
    index = Math.floor((min + max) / 2)
    if (n === array[index]) {
      return index
    }
    if (n < array[index]) {
      max = index - 1
    } else {
      min = index + 1
    }
  }
  return index
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
