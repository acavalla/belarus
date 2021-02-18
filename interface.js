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
    console.log(response);
    response.json().then(emojiData => {
      let emojiText = emojiData.emojified_text;
      list.createNote(emojiText)
      showNotes()
      textarea.value = '';
    })
  });
})

function getEmojiData(text) {
  return fetch("https://makers-emojify.herokuapp.com/", {
      body: JSON.stringify({text}),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
}

  // html = getPostData(text)
  // rendered = getPostData(text).then(post => {
  //   let rendered = renderPost(post);
  //   document.getElementById("emoji").innerHTML = rendered;
  //   console.log(rendered);
  //   list.createNote(rendered);
  //   return rendered;
  // })
  // console.log(html)
  // html.then(a => {
  //   console.log(a)
  //   list.createNote(a.emojified_text)
  // })
