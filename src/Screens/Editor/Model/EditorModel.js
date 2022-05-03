import { History } from "./History";

export function EditorModel() {
  this.frameIndex = 0;

  this.canvas = null;
  this.player = null;
  this.width = 500;
  this.height = 300;
  this.frames = []; //stores all frames

  //METHODS
  // this.getFrames = () => this.frames;

  this.currentFrame = () => {
    return this.frames[this.frameIndex];
  };

  this.setSelectable = (bool) => {
    this.canvas.selection = bool;
  };

  this.getTraceLayer = () => {
    var thumb;
    console.log(this.frameIndex);
    if (this.frameIndex > 0) {
      thumb = this.frames[this.frameIndex - 1].thumb;
    } else {
      thumb = this.frames[this.frameIndex].thumb;
    }
    return thumb;
  };

  this.unselectAll = () => this.canvas.discardActiveObject().renderAll();

  this.getFrame = (index) => this.frames[index];

  this.selectFrame = (index) => {
    if (index < 0 && index > this.frames.length - 1) return;
    this.unselectAll();
    this.saveCurrentFrame();
    this.frameIndex = index;
    this.loadFrame(this.currentFrame().data());
  };

  this.addFrame = () => {
    let frame = new Frame(this);
    this.frames.push(frame);
    this.saveFrame(frame);
  };

  this.removeFrame = (index) => {
    this.frames.splice(index, 1);
  };

  this.nextFrame = () => {
    if (this.frameIndex < this.frames.length - 1) {
      this.frameIndex++;
    } else {
      console.log("No Next frame");
    }
  };

  this.previousFrame = () => {
    if (this.frameIndex > 0) {
      this.frameIndex--;
    } else {
      console.log("No Previous frame");
    }
  };

  this.moveFrameTo = (fromIndex, toIndex) => {
    if (fromIndex < 0 && fromIndex > this.frames.length - 1) return;
    if (toIndex < 0 && toIndex > this.frames.length - 1) return;
    this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
  };

  this.export = async () => {
    let data = [];
    this.frames.map((frame, index) => {
      data.push(frame.data());
    });
    return {
      version: "1.0",
      frames: data,
    };
  };

  this.executeCommand = (command) => {
    this.frames[this.frameIndex].execute(command);
  };

  this.undo = () => {
    this.frames[this.frameIndex].undo();
    this.canvas.renderAll();
  };

  this.redo = () => {
    this.frames[this.frameIndex].redo();
    this.canvas.renderAll();
  };

  this.saveCurrentFrame = () => {
    this.frames[this.frameIndex].save();
  };

  this.saveFrame = (frame) => {
    frame.save();
  };

  this.loadFrame = (json) => {
    const canv = this.canvas;
    canv.loadFromJSON(
      json,
      function () {
        canv.renderAll();
      },
      function (o, object) {
        // console.log(o, object);
      }
    );
  };
}

export class Frame {
  constructor(editor) {
    this.editor = editor;
    this._thumbnail = null;
    this._data = null;
    this._history = new History();
  }

  execute = (command) => {
      this._history.execute(command);
    };
  undo = () => {
      this._history.undo();
    };
  redo = () => {
      this._history.redo();
    };
  save = () => {
      this._data = this.editor.canvas.toJSON();
      this._thumbnail = this.editor.canvas.toDataURL();
    };
  thumb = () => this._thumbnail;
  data = () => this._data;
}
