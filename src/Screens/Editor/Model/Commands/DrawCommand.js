import Command from "./Command";

class DrawCommand extends Command {
  constructor(editor, object) {
    super();
    this.editor = editor;
    this.object = object;
  }

  execute = () => {
    if (this.editor.canvas.isDrawingMode) {
      //this.editor.canvas.add(this.object);
    }
  };

  undo = () => {
    if (this.isUndoAvailable) {
      this.editor.canvas.remove(this.object);
    }
  };

  redo = () => {
    this.editor.canvas.add(this.object);
  };
}

export {DrawCommand};