/**
 * Write a function called flatten which accepts an array of arrays and
 * returns a new array with all values flattened.
 */

function flatten(array) {
  let newArray = []
  for (const item of array) {
    if (Array.isArray(item)) {
      newArray = newArray.concat(flatten(item))
    } else {
      newArray.push(item)
    }
  }
  return newArray
}

console.log(flatten([1, 2, 3, [4, 5]]))
