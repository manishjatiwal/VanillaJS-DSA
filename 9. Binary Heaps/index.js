const insert = require('./insert')

/**************************************\
 *  Rules to Remember                  *
 *  Child is smaller than parent       *
 *  Chileren are at 2n + 1 and 2n + 2  *
 *  Parent is at (n - 1) / 2 Floored   *
\**************************************/

class BinaryHeaps {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }
  insert(value) {
    insert.call(this, value)
  }
}

const heap = new BinaryHeaps()

console.log(heap.values)
heap.insert(55)
console.log(heap.values)
