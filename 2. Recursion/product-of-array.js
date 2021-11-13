/**
 * Write a function called productOfArray which takes an array of integers and
 * returns the product of them all.
 */

function productOfArray(array) {
  const length = array.length
  if (length === 0) {
    return 1
  }
  const last = array.pop()
  return last * productOfArray(array)
}

console.log(productOfArray([1, 2, 3]))
console.log(productOfArray([1, 2, 3, 10]))
