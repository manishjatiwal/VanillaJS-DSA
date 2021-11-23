/**
 * Write a function called naiveStringSearch which acepts two strings. If the
 * second string is substring of first then return true else false
 */

function naiveStringSearch(str1, str2) {
  const len1 = str1.length
  const len2 = str2.length

  for (let i = 0; i < len1; i++) {
    inner: for (let j = 0; j < len2; j++) {
      if (str1[i + j] === str2[j]) {
        if (j + 1 === len2) {
          return true
        }
      } else {
        break inner
      }
    }
  }
  return false
}

console.log(naiveStringSearch('abcdefghij', 'cde'))
console.log(naiveStringSearch('abcdcefghij', 'dce'))
