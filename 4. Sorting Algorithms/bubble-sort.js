// Complexity
// Best O(n)
// Average O(n^2)
// Worst O(n^2)

function swap(arr, idx1, idx2) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function bubbleSort(arr) {
  const length = arr.length
  let noSwaps = true
  for (let i = length - 1; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort([5, 1, 3, 2, 4]))
