function getPostData(emoji) {
  // Hardcode the post data for now.
  return fetch("https://emoji-api.com/emojis/" + emoji + "?access_key=" + API_KEY).then(response => {
    return response.json();
  })
}

function renderPost(postData) {
  // console.log(postData)
  return postData[0]["character"];
}

function emojiPost(emoji) {
  getPostData(emoji).then(post => {
    let rendered = renderPost(post);
    // document.getElementById("emoji").innerHTML = rendered;
    console.log(rendered)
    return rendered
  })
}

// emojiPost('skull')
