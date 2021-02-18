function getPostData(text) {
  // Hardcode the post data for now.
  return fetch("https://makers-emojify.herokuapp.com/", {
  body: `{\"text\": \"` + text + `\"}`,
  headers: {
    "Content-Type": "application/json"
  },
  method: "POST"
}).then(response => {
    return response.json();
  })
}

function renderPost(postData) {
  console.log(postData["emojified_text"]);
  console.log(postData.emojified_text);
  return `<h1>${postData.emojified_text}</h1>`;
}


  
