const insert = require('./insert')
const extractMax = require('./extract-max')
/**************************************\
 *  Rules to Remember                  *
 *  Child is smaller than parent       *
 *  Chileren are at 2n + 1 and 2n + 2  *
 *  Parent is at (n - 1) / 2 Floored   *
\**************************************/

class BinaryHeaps {
  constructor() {
    this.values = [10, 5, 7, 6]
  }
  insert(value) {
    insert.call(this, value)
  }
  extractMax() {
    extractMax.call(this)
  }
}

const heap = new BinaryHeaps()

console.log(heap.values)
heap.extractMax()
console.log(heap.values)
