const DoublyLinkedList = require('./list')

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)

console.log(list.remove(1))

console.log(list)
