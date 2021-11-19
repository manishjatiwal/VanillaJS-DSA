/**
 * Write a function called collectStrings which accepts an object and returns
 * an array of all the values in the object that has typeof string
 */
'use strict'

function collectStrings(obj) {
  let array = []
  const values = Object.values(obj)
  for (const value of values) {
    if (typeof value == 'object') {
      array = array.concat(collectStrings(value))
    } else if (typeof value == 'string') {
      array.push(value)
    }
  }
  return array
}
