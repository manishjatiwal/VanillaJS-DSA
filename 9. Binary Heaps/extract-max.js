/**
 * 1. Swap first element with last
 * 2. Preform sink down, i.e, replace the root with larger child and keep on
 * doing that until correct place is found
 */
function extractMax() {
  const length = this.values.length
  this.values[0] = this.values[length - 1]
  this.values.pop()
  let i = 0
  while (i < length) {
    let index = 2 * i + 1
    if (this.values[i] > this.values[index]) break
    let temp = this.values[i]
    if (this.values[index] < this.values[index + 1]) {
      index += 1
    }
    this.values[i] = this.values[index]
    this.values[index] = temp
    i = index
  }
}

module.exports = extractMax
