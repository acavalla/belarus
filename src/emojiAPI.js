// function getPostData(text) {
//   // Hardcode the post data for now.
//   return fetch("https://makers-emojify.herokuapp.com/", {
//   body: `{\"text\": \"` + text + `\"}`,
//   headers: {
//     "Content-Type": "application/json"
//   },
//   method: "POST"
// }).then(response => {
//     return response.json().then(post => {
//       let rendered = renderPost(post);
//       // document.getElementById("list-all").innerHTML += rendered;
//       console.log(rendered);
//       // list.createNote(rendered);
//       return rendered;
//   })
// })

// function renderPost(postData) {
//   console.log(postData["emojified_text"]);
//   console.log(postData.emojified_text);
//   return `<a>${postData.emojified_text}</a>`;
// }
// }
