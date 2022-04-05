const notesModel = require('./notesModel')

describe('.getNotes', () => {
  it('can get notes', () => {
    const model = new notesModel();
    expect(model.getNotes()).toEqual([]);
  });
});

describe('.addNotes', () => {
  it('can add notes', () => {
    const model = new notesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });
});

describe('.reset', () => {
  it('can reset the list of notes', () => {
    const model = new notesModel();
    model.addNote('Buy milk');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});