/**
 * Given two strings, write a function that determines if the second string is
 * anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the  letter of another, such as cineme, formed form iceman.
 */

function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false
  }
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}
  for (const char of string1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }
  for (const char of string2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }
  for (const key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('nna', 'ann'))
