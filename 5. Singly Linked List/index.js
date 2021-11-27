const SinglyLinkedList = require('./list')

const list = new SinglyLinkedList()

console.log(list)

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)

console.log(list.reverse())
