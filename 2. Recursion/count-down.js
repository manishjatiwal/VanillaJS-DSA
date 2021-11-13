/**
 * WAP that uses recursion to count down from a given number
 */

function countDown(num) {
  console.log(num)
  if (num === 1) {
    console.log('All Done')
    return
  }
  countDown(--num)
  return
}

countDown(5)
