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
    return this._text.substring(0,5);
  }

}
