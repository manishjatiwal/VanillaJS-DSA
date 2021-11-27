const push = require('./push')
const pop = require('./pop')
const shift = require('./shift')
const unshift = require('./unshift')
const get = require('./get')
const set = require('./set')
const insert = require('./insert')
const remove = require('./remove')

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(value) {
    return push.call(this, value)
  }
  pop() {
    return pop.call(this)
  }
  shift() {
    return shift.call(this)
  }
  unshift(value) {
    return unshift.call(this, value)
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
}

module.exports = DoublyLinkedList
