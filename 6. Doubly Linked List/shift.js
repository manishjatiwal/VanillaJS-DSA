function shift() {
  if (this.length === 0) return undefined
  const shiftednode = this.head
  if (this.length === 1) {
    this.head = null
    this.tail = null
  } else {
    this.head = shiftednode.next
    this.head.previous = null
    shiftednode.next = null
  }
  this.length -= 1
  return shiftednode
}

module.exports = shift
