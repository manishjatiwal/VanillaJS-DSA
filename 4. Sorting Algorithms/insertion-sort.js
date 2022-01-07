// Complexity
// Best O(n)
// Average O(n^2)
// Worst O(n^2)

function swap(arr, idx1, idx2) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function insertionSort(arr) {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    for (let j = i - 1; j >= 0 && arr[j + 1] < arr[j]; j--) {
      swap(arr, j, j + 1)
    }
  }
  return arr
}

console.log(insertionSort([5, 1, 3, 2, 4]))
