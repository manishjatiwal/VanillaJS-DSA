// Complexity
// Best O(n log(n))
// Average O(n log(n))
// Worst O(n log(n))

function merge(ar1, ar2) {
  let i = 0
  j = 0
  let len1 = ar1.length,
    len2 = ar2.length
  let merged = []
  while (i < len1 || j < len2) {
    if (ar1[i] < ar2[j]) {
      merged.push(ar1[i])
      i += 1
    } else {
      merged.push(ar2[j])
      j += 1
    }

    if (i == len1) {
      merged = merged.concat(ar2.slice(j))
      break
    }

    if (j === len2) {
      merged = merged.concat(ar1.slice(i))
      break
    }
  }

  return merged
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([2, 3, 10, 44, 12, 0]))
