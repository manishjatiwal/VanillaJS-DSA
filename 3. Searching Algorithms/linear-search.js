function linearSearch(array, number) {
  let index = -1

  for (const item in array) {
    console.log(item, typeof item)
    if (array[item] === number) {
      index = item
      break
    }
  }

  return index
}

linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)
