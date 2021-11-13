/**
 * Given two strings, write a function that determines if the second string is
 * anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the  letter of another, such as cineme, formed form iceman.
 */

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false
  }
  const frequencyCounter = {}
  for (const char of string1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
  }
  for (const char of string2) {
    if (!frequencyCounter[char]) {
      return false
    }
    frequencyCounter[char] = frequencyCounter[char] - 1
  }
  for (const key in frequencyCounter) {
    if (frequencyCounter[key] !== 0) {
      return false
    }
  }
  return true
}

console.log(validAnagram('nna', 'ann'))
