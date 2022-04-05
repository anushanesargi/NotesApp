const notesModel = require('./notesModel');
const notesView = require('./notesView');

console.log('The notes app is running')

const model = new notesModel();
model.addNote('Buy Milk');
model.addNote('Buy Chocolates');

const view = new notesView(model);
view.displayNotes();

console.log(model.getNotes());