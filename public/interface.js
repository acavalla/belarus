let allNotes = document.querySelector('#list-all');
let textarea = document.querySelector('#stupidnote')
let submitButton = document.getElementById('submit-button')
let list;

displayNotes = () => {
  allNotes.innerHTML = ''
  let i = list.showNotes().length;
  list.showNotes().forEach((x, index) =>
  allNotes.innerHTML += `<a href=#${index + 1}>` + x.abbreviate() + ` <button id=${index + 1} onClick=list.deleteNote(${index})>X</button>` + "</a><br>");
}


submitButton.addEventListener("click", () => {
  if (textarea.value.length === 0) { return }
  getEmojiData(textarea.value).then(response => {
    response.json().then(emojiData => {
      let emojiText = emojiData.emojified_text;
      list.createNote(emojiText)
      localStorage.setItem('list', JSON.stringify(list.showNotes()));
      displayNotes()
      textarea.value = '';
    })
  });
})

document.addEventListener("click", () => {
  localStorage.setItem('list', JSON.stringify(list.showNotes()));
  displayNotes()
})

if(localStorage.length > 0) {
  list = new List();
  let localList = localStorage.getItem('list')
  let notes = JSON.parse(localList)
  notes.forEach(note => list.createNote(note._text))
} else { list = new List(); }

displayNotes()
