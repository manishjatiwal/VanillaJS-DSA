const Node = require('./node')
function insert(index, value) {
  if (index < 0 || index > this.length) return false
  if (index === 0) {
    return this.unshift(value)
  }
  if (index === this.length) {
    return !!this.push(value)
  }
  const newNode = new Node(value)
  const prevNode = this.get(index - 1)
  newNode.next = prevNode.next
  newNode.previous = prevNode
  prevNode.next.previous = newNode
  prevNode.next = newNode
  this.length += 1
  return true
}

module.exports = insert
