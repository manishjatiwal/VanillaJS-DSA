function reverse() {
  if (this.head === null) return this.list
  let currentNode = this.head
  this.head = this.tail
  this.tail = currentNode
  let nextNode
  let previousNode = null
  while (currentNode) {
    nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  return this
}

module.exports = reverse
