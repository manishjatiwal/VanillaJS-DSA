const Node = require('./node')

function push(val) {
  const newNode = new Node(val)
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    this.tail = newNode
  }
  this.length += 1
  return this
}

module.exports = push
