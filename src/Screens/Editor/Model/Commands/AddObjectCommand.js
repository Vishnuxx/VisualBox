import Command from "./Command";

export class AddObjectCommand extends Command {
  constructor(editor, object) {
      super();
    this.editor = editor;
    this.object = object;
  }

  execute = () => {
    this.editor.canvas.add(this.object);
  };

  undo = () => {
    this.editor.canvas.remove(this.object);
  };

  redo = () => {
      
    this.editor.canvas.add(this.object);
  };
}
