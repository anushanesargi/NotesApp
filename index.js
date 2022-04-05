const notesModel = require('./notesModel');

console.log('The notes app is running')

const model = new notesModel();
model.addNote('Buy Milk');

console.log(model.getNotes());