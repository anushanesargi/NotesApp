const model = require("./notesView");

class notesView{
  constructor(model_instance){
    this.instance = model_instance;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  // displayNotes(){
  //   const notes = this.instance.getNotes();

  //   notes.forEach(ele => {
  //     const divElement = document.createElement('div');
  //     divElement.innerText = ele;
  //     divElement.className = 'note';
  //     this.mainContainerEl.append('divElement');
  //   });
  // }

  displayNotes() {
    const notes = this.instance.getNotes()
    
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = notesView;