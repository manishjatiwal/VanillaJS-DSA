function remove(index) {
  if (index < 0 || index >= this.length) return false
  if (index === 0) return !!this.shift()
  if (index === this.length - 1) return !!this.pop()
  const removedNode = this.get(index)
  removedNode.next.previous = removedNode.previous
  removedNode.previous.next = removedNode.next
  this.length -= 1
  return true
}

module.exports = remove
