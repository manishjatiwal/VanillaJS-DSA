/**
 * Write a recursive function called capitalizeFirst, given an array of strings,
 * capitalize the first letter of each string in the array.
 */
function capitalizeFirst(array) {
  if (array.length === 0) {
    return []
  }
  let first = array.shift()
  first = first[0].toUpperCase() + first.slice(1)
  return [first, ...capitalizeFirst(array)]
}

console.log(capitalizeFirst(['aa', 'bb', 'vv']))
