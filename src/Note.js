// function sum(a, b) {
//   return a + b
// }

class Note {
  constructor(text){
    this._text = text;
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
}
