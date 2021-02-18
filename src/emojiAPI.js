function getEmojiData(text) {
  return fetch("https://makers-emojify.herokuapp.com/", {
      body: JSON.stringify({text}),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
}
