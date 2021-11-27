const Node = require('./node')

function unshift(val) {
  const newNode = new Node(val)
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    newNode.next = this.head
    this.head = newNode
  }
  this.length += 1
  return this
}

module.exports = unshift
