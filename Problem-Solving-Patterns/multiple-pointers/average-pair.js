/**
 * Write a function called averagePair. Given a sorted array of
 * integers and a target average, determine if there is a pair of values in
 * the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 */

function averagePair(array, avg) {
  const length = array.length
  let i = 0,
    j = length - 1
  while (i < j) {
    const average = (array[i] + array[j]) / 2
    if (average === avg) {
      return [array[i], array[j]]
    }
    if (average < avg) {
      i += 1
    } else {
      j += 1
    }
  }
  return [null, null]
}
