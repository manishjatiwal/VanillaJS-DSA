const Node = require('./node')
function insert(index, value) {
  if (index === 0) return !!this.unshift(value)
  if (index === this.length) return !!this.push(value)
  const prevNode = this.get(index - 1)
  if (prevNode) {
    const newNode = new Node(value)
    newNode.next = prevNode.next
    prevNode.next = newNode
    this.length += 1
    return true
  }
  return false
}

module.exports = insert
