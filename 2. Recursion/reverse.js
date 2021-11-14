/**
 * Write a recursive functionn called reverse which accepts a string and
 * returns a reversed string.
 */

function reverse(string) {
  if (string.length === 0) {
    return ''
  }
  return string.slice(-1) + reverse(string.slice(0, -1))
}

console.log(reverse('manish'))
