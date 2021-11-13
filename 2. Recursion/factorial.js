/**
 * WAP that uses recursion to calculate the factorial of a given number
 */

function factorial(number) {
  if (number === 0) {
    return 1
  }
  return number * factorial(number - 1)
}

console.log(factorial(4))
