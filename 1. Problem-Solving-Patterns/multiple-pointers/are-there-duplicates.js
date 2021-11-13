/**
 * Implenment a function called, areThereDuplicates which accepts variable number
 * of argumanets, and checks whether there  are any duplicates among the
 * arguments passed in.
 */

function areThereDuplicates(...args) {
  const length = args.length
  if (length <= 1) {
    return false
  }
  let i = 0,
    j = 1
  while (j < length) {
    if (args[i] === args[j]) {
      return true
    }
    i += 1
    j += 1
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3, 4, 5, 9))
