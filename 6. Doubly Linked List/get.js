function get(index) {
  if (index < 0 || index >= this.length) return null
  let node
  if (this.length / 2 > index) {
    node = this.head
    while (index--) {
      node = node.next
    }
  } else {
    index = this.length - index - 1
    node = this.tail
    while (index--) {
      node = node.previous
    }
  }
  return node
}
module.exports = get
