makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  a = location.hash.split("#")[1];
  return list.showNotes()[a - 1];
};

function showNote(note) {
  document
    .getElementById("printed-note")
    .innerHTML = note.text();
};
