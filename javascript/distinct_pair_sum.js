const distinctPairSum = (arr, k) => {
  return arr.reduce((p, c, i, arr) => {
    if (i > 0) {
      const tempSum = c + arr[i - 1]
      const pair = tempSum === k ? [arr[i - 1], c] : undefined
      if (pair !== undefined) {
        if (p.length === 0) {
          p.push(pair)
          return p
        } else {
          let doAdd = false
          let dupeFound = false
          p.forEach((val) => {
            val.sort((a, b) => b - a)
            doAdd = !(val.every((e, i) => e === pair[i]))
            if (!dupeFound && !doAdd) {
              dupeFound = true
            }
          })
          if (doAdd && !dupeFound) p.push(pair)
        }
      }
    }
    return p
  }, [])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
