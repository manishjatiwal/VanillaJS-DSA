// Complexity
// Best O(n^2)
// Average O(n^2)
// Worst O(n^2)

function swap(arr, idx1, idx2) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function selectionSort(arr) {
  const length = arr.length
  let minIndex
  for (let i = 0; i < length; i++) {
    minIndex = i
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex)
    }
  }
  return arr
}

console.log(selectionSort([5, 1, 3, 2, 4]))
