const BST = require('../7. Binary Search Tree/tree')
const bfs = require('./breadth-first-search')
const { preOrder, inOrder, postOrder } = require('./depth-first-search')

const tree = new BST()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(13)
tree.insert(18)

console.log('BFS::\t\t\t', bfs.call(tree).join(', '))
console.log('DFS-Preorder::\t\t', preOrder(tree.root).join(', '))
console.log('DFS-Ireorder::\t\t', inOrder(tree.root).join(', '))
console.log('DFS-Postorder::\t\t', postOrder(tree.root).join(', '))
