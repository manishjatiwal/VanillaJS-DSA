function bfs() {
  const queue = []
  queue.push(this.root)
  let currentNode = this.root
  const data = []
  while (queue.length) {
    currentNode = queue.shift()
    data.push(currentNode.value)
    if (currentNode.left) queue.push(currentNode.left)
    if (currentNode.right) queue.push(currentNode.right)
  }
  return data
}

module.exports = bfs
