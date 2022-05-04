export class UpdateCoordinatesCommand {
  constructor(editor, object, oldX, oldY) {
    this.editor = editor;
    this.object = object;
    this.oldX = oldX;
    this.oldY = oldY;
    this.x = 0;
    this.y = 0;
  }

  execute = () => {
    this.x = this.object.left;
    this.y = this.object.top;
  };

  undo = () => {
    this.object.set("left" , this.oldX);
    this.object.set("top" , this.oldY);
    // this.object.setCoords();
   
  };

  redo = () => {
    
    this.object.set("left", this.x);
    this.object.set("top", this.y);
    
  };
}
