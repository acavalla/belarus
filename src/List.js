class List {
  constructor() {
    this._allNotes = [];
  }

  createNote = text => {
    let note = new Note(text);
    this._allNotes.push(note.text())
  }

  showNotes = () => this._allNotes
}
