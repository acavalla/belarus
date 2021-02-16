let list;
list = new List();
let notey = list.createNote('test')
list.createNote('testnewest')

describe('showNotes', function() {
  it('returns the first note', function() {
    expectEqualMatcher(list.showNotes()[0].text(), 'test')
  })

  it('stores in an array', function() {
    expectEqualMatcher(list.showNotes().length, 2)
  })

  it('stores in an array', function() {
    console.log(list.showNotes())
    console.log(notey.text())
    include(list.showNotes(), notey)
  })
})

describe('newestNote', function() {
  it('should print the newest note', function() {
    expectEqualMatcher(list.newestNote().text(), 'testnewest')
  })
})
