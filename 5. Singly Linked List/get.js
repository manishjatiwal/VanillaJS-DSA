function get(index) {
  if (index < 0 || index >= this.length) return null
  let current = this.head
  let counter = 0
  while (counter !== index) {
    current = current.next
    counter += 1
  }
  return current
}

module.exports = get
