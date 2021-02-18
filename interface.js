let allNotes = document.querySelector('#list-all');
let list = new List();
let textarea = document.querySelector('#stupidnote')
let submitButton = document.getElementById('submit-button')


showNotes = () => {
  let i = list.showNotes().length;
  allNotes.innerHTML += `<a href=#${i}>` + list.newestNote().abbreviate() + "</a><br>";
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

let localList = localStorage.getItem('list')
let notes = JSON.parse(localList)
notes.forEach(note => list.createNote(note._text))
