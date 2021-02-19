let allNotes = document.querySelector('#list-all');
let textarea = document.querySelector('#stupidnote')
let submitButton = document.getElementById('submit-button')
let list;

showNotes = () => {
  allNotes.innerHTML = ''
  let i = list.showNotes().length;
  list.showNotes().forEach((x, index) =>
  allNotes.innerHTML += `<a href=#${index + 1}>` + x.abbreviate() + "</a><br>");
}


submitButton.addEventListener("click", () => {
  getEmojiData(textarea.value).then(response => {
    response.json().then(emojiData => {
      let emojiText = emojiData.emojified_text;
      list.createNote(emojiText)
      localStorage.setItem('list', JSON.stringify(list.showNotes()));
      showNotes()
      textarea.value = '';
    })
  });
})

if(localStorage.length > 0) {
  list = new List();
  let localList = localStorage.getItem('list')
  let notes = JSON.parse(localList)
  notes.forEach(note => list.createNote(note._text))
} else { list = new List(); }

showNotes()
