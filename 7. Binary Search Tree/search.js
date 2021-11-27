function search(value) {
  if (!this.root) return false

  function searchValue(node) {
    if (node === null) return false
    if (node.value === value) return true
    if (node.value > value) return searchValue(node.left)
    if (node.value < value) return searchValue(node.right)
  }
  return searchValue(this.root)
}

module.exports = search
