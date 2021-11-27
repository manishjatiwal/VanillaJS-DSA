function remove(index) {
  if (index === 0) return this.shift()
  if (index === this.length - 1) return this.pop()
  const prevNode = this.get(index - 1)
  if (prevNode) {
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length -= 1
    return removedNode
  }
  return null
}

module.exports = remove
