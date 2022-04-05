/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 
 
describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Buy Newspaper');
    model.addNote('Buy Something Sour');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);

  });
});
     