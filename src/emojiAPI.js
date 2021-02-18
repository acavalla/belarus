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
  return postData.emojified_text;
}

function emojiPost(text) {
  getPostData(text).then(post => {
    let rendered = renderPost(post);
    document.getElementById("emoji").innerHTML = rendered;
    console.log(rendered);
    return rendered;
  })
}
