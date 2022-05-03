export class History {
  constructor() {
    this.undos = [];
    this.redos = [];
  }

  execute = (command) => {
    if (this.historyEnabled === false) return;
    if (this.index === -1) this.index = 0;
    this.undos.push(command);
    command.execute();
  };

  undo = () => {
    if (this.historyEnabled === false) return;
    const cmd = this.undos.pop();
    if (cmd === undefined) return;
    this.redos.push(cmd);
    cmd.undo();
  };

  redo = () => {
    if (this.historyEnabled === false) return;
    const cmd = this.redos.pop();
    if (cmd === undefined) return;
    this.undos.push(cmd);
    cmd.redo();
  };
  serialize = () => {
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
    return history.toJSON();
  };
}
