// export function History() {
//   this.undos = [];
//   this.redos = [];
//   this.historyEnabled = true;

// }

// History.prototype = {

//   hasUndo: function() {
//     return this.undos.length !== 0;
//   } ,

//   hasRedo: function() {
//     return this.redos.length !== 0;
//   },

//   execute: function (command) {
//     if (this.historyEnabled === false) return;
//     console.log(this.undos)
//     this.undos = [...this.undos , command];
//     command.execute();
//     if(this.hasRedo()) this.redos = [];
//     console.log("undos: " + this.undos , "redos: " + this.redos);
//   },

//   undo: function () {
//     if (this.historyEnabled === false) return;
//     const cmd = this.undos.pop();
//     if (cmd === undefined) return;
//     this.redos.push(cmd);
//     cmd.undo();
// console.log("undos: " + this.undos, "redos: " + this.redos);
//   },

//   redo: function () {
//     if (this.historyEnabled === false) return;
//     const cmd = this.redos.pop();
//     if (cmd === undefined) return;
//     this.undos.push(cmd);
//     cmd.redo();
//     console.log("undos: " + this.undos, "redos: " + this.redos);
//   },

//   serialize: function () {
//     let history = {
//       "undos": [],
//       "redos": [],
//     };

//     for (let i = 0; i < this.undos.length; i++) {
//       if (this.undos[i].hasOwnProperty("serialize")) {
//         history.undos.push(this.undos[i].serialize);
//       }
//     }

//     for (let i = 0; i < this.redos.length; i++) {
//       if (this.redos[i].hasOwnProperty("serialize")) {
//         history.redos.push(this.redos[i].serialize);
//       }
//     }
//     return history.toJSON();
//   },
// };

export function HistoryMemento(editor) {

  let undos = [];
  let redos = [];
  this.recordLimit = 10;
  this.isEnabled = true;

  this.hasUndos = () => undos.length !== 0;
  this.hasRedos = () => redos.length !== 0;

  this.track = () => {
    if (this.isEnabled) {
      if (redos.length > 0) redos = [];
      
      if (undos.length >= this.recordLimit) {
        undos.shift();
      }
      var data = editor.canvas.toJSON();
      undos.push(data);
      
      console.log("changetd");
      
      console.log(undos, redos);
    }
  };

  this.undo = () => {
    this.isEnabled = false;
    if (this.hasUndos()) {
      var data = undos.pop();
     editor.loadFrame(data);
      redos.push(data);
       
    }
    this.isEnabled = true;
    console.log(undos, redos);
  };

  this.redo = () => {
    this.isEnabled = false;
    console.log(this.hasRedos());
    if (this.hasRedos()) {
      var data = redos.pop();
      undos.push(data);
      editor.loadFrame(data);
      console.log("redo");
      console.log(undos, redos);
    }
    this.isEnabled = true;
  };
}
