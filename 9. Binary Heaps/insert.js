/**
 * Insert the element to last of array. then bubble it up to its correct
 * place.
 */
function bubbleUpRecv(index) {
  if (index === 0) return
  let parentIndex = Math.floor((index - 1) / 2)
  let parent = this.values[parentIndex]
  if (parent < this.values[index]) {
    this.values[parentIndex] = this.values[index]
    this.values[index] = parent
    bubbleUpRecv.call(this, parentIndex)
  }
  return
}
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
  // bubbleUp.call(this)
  bubbleUpRecv.call(this, this.values.length - 1)
}

module.exports = insert
