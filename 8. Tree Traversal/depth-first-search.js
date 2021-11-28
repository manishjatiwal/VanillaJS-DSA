function preOrder(node, arr = []) {
  if (node === null) return arr
  arr.push(node.value)
  preOrder(node.left, arr)
  preOrder(node.right, arr)
  return arr
}

function inOrder(node, arr = []) {
  if (node === null) return arr
  preOrder(node.left, arr)
  arr.push(node.value)
  preOrder(node.right, arr)
  return arr
}

function postOrder(node, arr = []) {
  if (node === null) return arr
  preOrder(node.left, arr)
  preOrder(node.right, arr)
  arr.push(node.value)
  return arr
}

module.exports = {
  preOrder,
  inOrder,
  postOrder,
}
