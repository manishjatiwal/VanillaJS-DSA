function set(index, value) {
  const node = this.get(index)
  if (node) {
    node.val = value
    return true
  }
  return false
}

module.exports = set
