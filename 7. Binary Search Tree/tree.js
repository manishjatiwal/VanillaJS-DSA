const insert = require('./insert')
const search = require('./search')

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    return insert.call(this, value)
  }
  search(value) {
    return search.call(this, value)
  }
}

module.exports = BinarySearchTree
