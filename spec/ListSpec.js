let list;
list = new List();
list.createNote('test')

expectEqualMatcher(list.showNotes()[0], 'test')
expectEqualMatcher(list.showNotes().length, 1)
