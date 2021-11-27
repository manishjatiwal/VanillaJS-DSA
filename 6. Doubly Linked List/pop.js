function pop() {
  if (this.length === 0) return undefined
  const removedNode = this.tail
  this.tail = this.tail.previous
  this.length -= 1
  if (this.length === 0) {
    this.head = null
    this.tail = null
  } else {
    this.tail.next = null
  }
  removedNode.previous = null
  return removedNode
}

module.exports = pop
