let allNotes = document.querySelector('#list-all');
let list = new List();
let textarea = document.querySelector('#stupidnote')


showNotes = () => {
  let i = list.showNotes().length;
  allNotes.innerHTML += `<a href=#${i}>` + list.newestNote() + "</a><br>";
}


document.getElementById('submit-button').addEventListener("click", () => {
  let text = document.getElementById('stupidnote').value
  html = getPostData(text)
  // rendered = getPostData(text).then(post => {
  //   let rendered = renderPost(post);
  //   document.getElementById("emoji").innerHTML = rendered;
  //   console.log(rendered);
  //   list.createNote(rendered);
  //   return rendered;
  // })
  console.log(html)
  html.then(a => {
    console.log(a)
    list.createNote(a.emojified_text)
  })


  textarea.value = '';
  showNotes()
})
