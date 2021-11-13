/**
 * WAP that uses recursion to calculate the factorial of a given number
 */

function factorial(number) {
  if (number === 1) {
    return number
  }
  return number-- * factorial(number)
}

console.log(factorial(4))
