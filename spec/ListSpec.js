let list;
list = new List();
list.createNote('test')
list.createNote('testnewest')

expectEqualMatcher(list.showNotes()[0], 'test')
expectEqualMatcher(list.showNotes().length, 2)

expectEqualMatcher(list.newestNote(), 'testnewest')
