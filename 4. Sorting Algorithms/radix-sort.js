function getDigit(num, place) {
  const place10 = Math.pow(10, place)
  if (num < place10) return 0
  const number = Math.floor(num / place10)
  const reminder = number % 10
  return reminder
}

function getDigitCount(num) {
  let digits = 0
  while (num > 0) {
    digits += 1
    num = Math.floor(num / 10)
  }
  return digits
}

function mostDigits(arr) {
  let maxDigits = 0
  for (const num of arr) {
    maxDigits = Math.max(maxDigits, getDigitCount(num))
  }
  return maxDigits
}

function radixSort(arr) {
  const maxDigits = mostDigits(arr)

  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => [])
    for (const number of arr) {
      buckets[getDigit(number, i)].push(number)
    }
    let newArr = []
    for (const bucket of buckets) {
      newArr = newArr.concat(bucket)
    }
    arr = newArr
  }

  return arr
}

radixSort([1, 232, 5432, 5456, 123, 85, 23, 8])
