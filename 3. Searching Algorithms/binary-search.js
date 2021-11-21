function binarySearch(array, number) {
  let start = 0
  let end = array.length - 1
  let middle = Math.floor((start + end) / 2)

  while (array[middle] !== number && start <= end) {
    if (number < array[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }

  return array[middle] === number ? middle : -1
}
