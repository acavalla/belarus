expectEqualMatcher = function(a, b) {
  if (a === b) {     
    console.log("Pass")
  } else {
    console.log("Fail")
    console.log(`Expected ${a} but got ${b}`)
  }
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}