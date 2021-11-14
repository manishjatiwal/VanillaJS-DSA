/**
 * Write a function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the returns true when passed
 * to the callback. Otherwise returns false.
 */

function someRecursive(string, callback) {
  if (string.length === 0) {
    return false
  }
  return callback(string[0]) || someRecursive(string.slice(1), callback)
}
