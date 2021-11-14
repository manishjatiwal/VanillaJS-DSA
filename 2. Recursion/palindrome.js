/**
 * Write a recursive function called isPalindrome which returns true is the
 * given strig is palindrome.
 */

function isPalindrome(string) {
  const length = string.length
  if (length === 0) {
    return true
  }
  if (string[0] === string[length - 1]) {
    return isPalindrome(string.slice(1, length - 1))
  }
  return false
}
