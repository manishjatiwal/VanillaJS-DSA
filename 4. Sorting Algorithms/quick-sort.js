function pivot(arr, start = 0, end = arr.length) {
  const pivot = arr[start]
  let swapIdx = start

  function swap(arr, idx1, idx2) {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIdx += 1
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, swapIdx, start)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
