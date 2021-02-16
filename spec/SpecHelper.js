expectEqualMatcher = function(a, b) {
  if (a === b) {
    console.log("Pass")
  } else {
    console.log("Fail")
    console.log(`Expected ${b} but got ${a}`)
  }
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}
