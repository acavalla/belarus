let list;
list = new List();
list.createNote('test')
list.createNote('testnewest')

describe('should show the first note once created', function() {expectEqualMatcher(list.showNotes()[0], 'test')})
describe('should print all notes', function() {expectEqualMatcher(list.showNotes().length, 2)})

describe('should print the newest note', function() {expectEqualMatcher(list.newestNote(), 'testnewest')})

