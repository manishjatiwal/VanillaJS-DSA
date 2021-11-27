function shift() {
  if (!this.head) return undefined
  const currentHead = this.head
  this.head = this.head.next
  this.length -= 1
  if (this.length === 0) this.tail = null
  return currentHead
}

module.exports = shift
