const Node = require('./node')

function unshift(value) {
  const newNode = new Node(value)
  if (this.length === 0) {
    this.head = newNode
    this.tail = newNode
  } else {
    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode
  }
  this.length += 1
  return this
}

module.exports = unshift
