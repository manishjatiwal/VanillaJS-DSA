const Node = require('./node')

function push(value) {
  const newNode = new Node(value)
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
  }
  this.length += 1
  return this
}

module.exports = push
