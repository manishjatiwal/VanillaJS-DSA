/**
 * Write a function called recursiveRange which accepts a number and adds up
 * all the numbers from 0 to that number
 */

function recursiveRange(number) {
  if (number <= 0) {
    return 0
  }
  return number + recursiveRange(number - 1)
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))
