const Node = require('./node')

function insertRecursive(value) {
  const newNode = new Node(value)
  if (!this.root) {
    this.root = newNode
    return this
  }
  function calculateTargetNode(node) {
    if (node.value === value) {
      node.count += 1
      return
    }
    if (node.value > value) {
      if (node.left) {
        return calculateTargetNode(node.left)
      } else {
        node.left = newNode
        return
      }
    }
    if (node.right) {
      return calculateTargetNode(node.right)
    }
    node.right = newNode
    return
  }
  calculateTargetNode(this.root)
  return this
}

function insert(value) {
  const newNode = new Node(value)
  if (!this.root) {
    this.root = newNode
  } else {
    let currentNode = this.root
    while (true) {
      if (currentNode.value === value) {
        currentNode.count += 1
        return
      }
      if (currentNode.value > value) {
        if (currentNode.left) {
          currentNode = currentNode.left
          continue
        } else {
          currentNode.left = newNode
          break
        }
      }
      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right
          continue
        } else {
          currentNode.right = newNode
          break
        }
      }
    }
  }
  return this
}

module.exports = insertRecursive
