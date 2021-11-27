const BinarySearchTree = require('./tree')

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(7)
tree.insert(17)
tree.insert(12)
tree.insert(1)
tree.insert(34)

console.log(tree.search(1))
console.log(tree.search(45))
console.log(tree.search(99))
console.log(tree.search(7))
