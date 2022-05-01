function History(editor) {
  this.editor = editor;
  this.undos = [];
  this.redos = [];
  this.lastCmdTime = new Date();

  this.writeToStorage = false;
  this.historyEnabled = true;
  this.config = editor.config;

  // signals

  const scope = this;
}

History.prototype = {
  execute: function (command) {
    if (this.historyEnabled === false) return;
    if (this.index === -1) this.index = 0;
    this.undos.push(command);
  },

  undo: function () {
    if (this.historyEnabled === false) return;
    const cmd = this.undos.pop();
    if (cmd === undefined) return;
    this.redos.push(cmd);
  },

  redo: function () {
    if (this.historyEnabled === false) return;
    const cmd = this.redos.pop();
    if (cmd === undefined) return;
    this.undos.push(cmd);
  },

  serialize: function () {
    let history = {
      undos: [],
      redos: [],
    };

    for (let i = 0; i < this.undos.length; i++) {
      if (this.undos[i].hasOwnProperty("serialize")) {
        history.undos.push(this.undos[i].serialize);
      }
    }

    for (let i = 0; i < this.redos.length; i++) {
      if (this.redos[i].hasOwnProperty("serialize")) {
        history.redos.push(this.redos[i].serialize);
      }
    }
    return history;
  },
};
