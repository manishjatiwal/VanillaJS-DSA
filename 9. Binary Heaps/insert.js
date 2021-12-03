/**
 * Insert the element to last of array. then bubble it up to its correct
 * place.
 */
function bubbleUp() {
  let index = this.values.length - 1
  let parentIndex = Math.floor((index - 1) / 2)
  let parent = this.values[parentIndex]
  while (parent < this.values[index]) {
    this.values[parentIndex] = this.values[index]
    this.values[index] = parent
    index = parentIndex
    parentIndex = Math.floor((index - 1) / 2)
    parent = this.values[parentIndex]
  }
}

function insert(value) {
  this.values.push(value)
  bubbleUp.call(this)
}

module.exports = insert
