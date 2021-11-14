/**
 * Write a recursive function called capitalizeWords, Given an array of words,
 * return a new array containing each word capitalized
 */
function capitalizeWords(array) {
  if (array.length === 0) {
    return array
  }
  return [array[0].toUpperCase(), ...capitalizeWords(array.slice(1))]
}

console.log(capitalizeWords(['Mansdfsdf', 'afsdfsadf']))
