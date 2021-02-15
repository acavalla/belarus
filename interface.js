let allNotes = document.querySelector('#list-all');
let list = new List();

showNotes = () => {
  list.showNotes().forEach( note => {
    allNotes.innerHTML += note + "<br>";
  });
}

let submitNote;

document.getElementById('submit-button').addEventListener("click", () => {
  list.createNote(document.getElementById('stupidnote').value)
  
  showNotes()
})
