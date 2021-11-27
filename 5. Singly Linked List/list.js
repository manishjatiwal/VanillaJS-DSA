const push = require('./push')
const pop = require('./pop')
const shift = require('./shift')
const unshift = require('./unshift')
const get = require('./get')
const set = require('./set')
const insert = require('./insert')
const remove = require('./remove')
const reverse = require('./reverse')

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    return push.call(this, val)
  }
  pop() {
    return pop.call(this)
  }
  shift() {
    return shift.call(this)
  }
  unshift(val) {
    return unshift.call(this, val)
  }
  get(index) {
    return get.call(this, index)
  }
  set(index, value) {
    return set.call(this, index, value)
  }
  insert(index, value) {
    return insert.call(this, index, value)
  }
  remove(index) {
    return remove.call(this, index)
  }
  reverse() {
    return reverse.call(this)
  }
}

module.exports = SinglyLinkedList
