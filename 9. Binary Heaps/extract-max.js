/**
 * 1. Swap first element with last
 * 2. Preform sink down, i.e, replace the root with larger child and keep on
 * doing that until correct place is found
 */
function extractMax() {
  let index = 0
  let length = this.values.length
  this.values[index] = this.values[length - 1]
  this.values.pop()
  length = this.values.length
  while (index < length) {
    const parent = this.values[index]
    let swap = null
    let leftChildIndex = 2 * index + 1
    let rightChildIndex = 2 * index + 2
    let leftChild, rightChild

    if (leftChildIndex < length) {
      leftChild = this.values[leftChild]
      if (leftChild > parent) {
        swap = leftChildIndex
      }
    }

    if (rightChildIndex < length) {
      rightChild = this.values[rightChildIndex]
      if (
        (swap === null && rightChild > parent) ||
        (swap !== null && rightChild > leftChild)
      ) {
        swap = rightChildIndex
      }
    }

    if (swap === null) break

    this.values[index] = this.values[swap]
    this.values[swap] = parent
    index = swap
  }
}

module.exports = extractMax
