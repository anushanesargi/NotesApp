const model = require("./notesView");

class notesView{
  constructor(model_instance){
    this.instance = model_instance;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');
    console.log(this.buttonEl);
    this.inputEl = document.querySelector('#note-input');
    this.buttonEl.addEventListener('click', () => {
      this.instance.addNote(this.inputEl.value);
      this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
    
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