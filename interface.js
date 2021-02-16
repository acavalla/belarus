let allNotes = document.querySelector('#list-all');
// let newestNote = document.querySelector('#list-new');
let list = new List();
let clickCount = 0

// showNotes = () => {
//   list.showNotes().forEach( note => {
//     allNotes.innerHTML += note + "<br>";
//   });
// }

showNotes = () => {
  allNotes.innerHTML += list.newestNote() + "<br>";
}

// let submitNote;

document.getElementById('submit-button').addEventListener("click", () => {
  list.createNote(document.getElementById('stupidnote').value)
 
  showNotes()
})
