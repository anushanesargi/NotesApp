const notesModel = require('./notesModel');
const notesView = require('./notesView');

console.log('The notes app is running')

const model = new notesModel();
model.addNote('Buy Milk');

console.log(model.getNotes());