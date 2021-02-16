// test
let note = new Note('testing');
// expectEqualMatcher(sum(1,2), 3)
let note2 = new Note('yes');

describe('creating a new note', function() {
  it('creates a new note', function() {
    expectEqualMatcher(note.text(), 'testing')
  })

})

describe('abbreviate', function() {
  it('abbreviates the notes', function() {
    expectEqualMatcher(note.abbreviate(), 'testi')
  })

  it('abbreviate with less than 5 chars', function() {
    expectEqualMatcher(note2.abbreviate(), 'yes')
  })
})
