function getPostData() {
  // Hardcode the post data for now.
  return fetch("https://emoji-api.com/emojis/fire?access_key=139e54a1fae0a9ad94e027219da64d2fedc7dde6 ").then(response => {
    return response.json();
  })
}

function renderPost(postData) {
  return postData[0]["character"];
}

function emojiPost() {
  getPostData().then(post => {
    let rendered = renderPost(post);
    document.getElementById("emoji").innerHTML = rendered;
  })
}

emojiPost()
