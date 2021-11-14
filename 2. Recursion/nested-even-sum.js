/**
 * Write a function called nestedEvenSum. Return sum of all event numbers in an
 * object which may contain nested objects.
 */
function nestedEvenSum(obj) {
  let sum = 0
  const values = Object.values(obj)
  for (const value of values) {
    if (typeof value === 'object') {
      sum += nestedEvenSum(value)
    } else if (typeof value === 'number' && value % 2 === 0) {
      sum += value
    }
  }
  return sum
}
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
}
const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
}
console.log(nestedEvenSum(obj1))
console.log(nestedEvenSum(obj2))
