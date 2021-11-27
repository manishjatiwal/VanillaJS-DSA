function pop() {
  if (!this.head) return undefined
  let current = this.head
  let newTail = current
  while (current.next) {
    newTail = current
    current = current.next
  }
  this.tail = newTail
  this.tail.next = null
  this.length -= 1
  if (this.length === 0) {
    this.head = null
    this.tail = null
  }
  return current
}

module.exports = pop
