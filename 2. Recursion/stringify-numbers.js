/**
 * Write a function called stringifyNumbers which takes in an object and
 * converts all the numbers into string.
 */
function stringifyNumbers(obj) {
  const newObj = {}
  for (const key of Object.keys(obj)) {
    console.log(obj[key], typeof obj[key])
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else if (typeof obj[key] === 'number') {
      newObj[key] = `${obj[key]}`
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

let x = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
}

stringifyNumbers(x)
