(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var notesModel2 = class {
        constructor() {
          this.notesarray = [];
        }
        getNotes() {
          return this.notesarray;
        }
        addNote(note) {
          this.notesarray.push(note);
        }
        reset() {
          this.notesarray = [];
        }
      };
      module.exports = notesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var model2 = require_notesView();
      var notesView2 = class {
        constructor(model_instance) {
          this.instance = model_instance;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.instance.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = notesView2;
    }
  });

  // index.js
  var notesModel = require_notesModel();
  var notesView = require_notesView();
  console.log("The notes app is running");
  var model = new notesModel();
  model.addNote("Buy Milk");
  console.log(model.getNotes());
})();
