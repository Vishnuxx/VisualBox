export function History() {
  this.undos = [];
  this.redos = [];
  this.historyEnabled = true;

  // this.execute = (command) => {
  //   if (this.historyEnabled === false) return;
  //   console.log("undos: " + undos, "redos: " + redos);
  //   undos.push(command);

  //   command.execute();
  //   console.log("undos: " + undos, "redos: " + redos);
  // };

  // this.undo = () => {
  //   if (this.historyEnabled === false) return;
  //   const cmd = undos.pop();
  //   if (cmd === undefined) return;
  //   redos.push(cmd);
  //   cmd.undo();
  //   console.log("undos: " + undos, "redos: " + redos);
  // };

  // this.redo = () => {
  //   if (this.historyEnabled === false) return;
  //   const cmd = redos.pop();

  //   if (cmd === undefined) return;
  //   undos.push(cmd);
  //   cmd.redo();
  //   console.log("undos: " + undos, "redos: " + redos);
  // };

  // this.serialize = () => {
  //   let history = {
  //     undos: [],
  //     redos: [],
  //   };

  //   for (let i = 0; i < this.undos.length; i++) {
  //     if (this.undos[i].hasOwnProperty("serialize")) {
  //       undos.push(this.undos[i].serialize);
  //     }
  //   }

  //   for (let i = 0; i < this.redos.length; i++) {
  //     if (this.redos[i].hasOwnProperty("serialize")) {
  //       redos.push(this.redos[i].serialize);
  //     }
  //   }
  //   return history.toJSON();
  // };
}

History.prototype = {
  execute: function (command) {
    if (this.historyEnabled === false) return;
    console.log(this.undos)
    this.undos = [...this.undos , command];
    command.execute();
    console.log("undos: " + this.undos , "redos: " + this.redos);
  },

  undo: function () {
    if (this.historyEnabled === false) return;
    const cmd = this.undos.pop();
    if (cmd === undefined) return;
    this.redos.push(cmd);
    cmd.undo();
console.log("undos: " + this.undos, "redos: " + this.redos);
  },

  redo: function () {
    if (this.historyEnabled === false) return;
    const cmd = this.redos.pop();
    if (cmd === undefined) return;
    this.undos.push(cmd);
    cmd.redo();
    console.log("undos: " + this.undos, "redos: " + this.redos);
  },

  serialize: function () {
    let history = {
      "undos": [],
      "redos": [],
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
    return history.toJSON();
  },
};
