/**
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 */

function sameFrequency(num1, num2) {
  const frequencyCounter = {}
  while (num1 > 0) {
    const quotient = num1 % 10
    frequencyCounter[quotient] = (frequencyCounter[quotient] || 0) + 1
    num1 = Math.floor(num1 / 10)
  }
  while (num2 > 0) {
    const quotient = num2 % 10
    frequencyCounter[quotient] = (frequencyCounter[quotient] || 0) - 1
    if (frequencyCounter[quotient]) {
      return false
    }
    num2 = Math.floor(num2 / 10)
  }
  return true
}

console.log(sameFrequency(11, 12))
console.log(sameFrequency(21, 12))
