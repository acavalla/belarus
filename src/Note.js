// function sum(a, b) {
//   return a + b
// }

class Note {
  constructor(text){
    this._text = text;
    this.emojiSub();
  }

  text(){
    return this._text;
  }

  abbreviate(){
    if(this._text.length > 20) {
      return this._text.substring(0,20) + "...";
    } else {
      return this._text
    }
  }

  emojiSub(){
    // var input = this._text
    // var regex = /:([\w]+):/g
    // // console.log(emojiPost('fire'))
    // var replaced = input.replace(":" + regex + ":", emojiPost('fire'))
    // console.log(replaced)
    // this._text = replaced
    // return this._text
    let emoji_text = emojiPost(this._text)
  }
}
