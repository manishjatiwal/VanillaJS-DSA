/**
 * Write a function called same which accepts two arrays.
 * The function should return true if every value in the first array has it's
 * corrosponding value squared in the second array. The frequency of the values
 * must be same.
 */
function sameNaive(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    array2.splice(correctIndex, 1)
  }
  return true
}

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  const frequencyCounter1 = {}
  const frequencyCounter2 = {}
  for (const item of array1) {
    frequencyCounter1[item] = (frequencyCounter1[item] || 0) + 1
  }
  for (const item of array2) {
    frequencyCounter2[item] = (frequencyCounter2[item] || 0) + 1
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1, frequencyCounter2)
  return true
}
