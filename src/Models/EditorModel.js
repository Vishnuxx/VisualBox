import BroadCast from "./Broadcast/Broadcast.js";
import { fabric } from "fabric";

export function EditorModel() {

  var frameIndex = 0;

  this.canvas = new fabric.Canvas("canvas", {
    height: 200,
    width: 400,
    fireRightClick: true,
    fireMiddleClick: true,
    stopContextMenu: true,
    backgroundColor: "white",
  });
  this.name = "vishnu";
  this.width = 500;
  this.height = 300;
  this.frames = [];
  this.currentFrame = this.frames[frameIndex];
  this.nextFrame = () => {
    if (frameIndex < this.frames.length-1) {
      frameIndex++;
    }else {
      console.log("No Next frame");
    }
  };
  this.previousFrame = () => {
    if (frameIndex > 0) {
      frameIndex--;
    } else {
      console.log("No Previous frame");
    }
    
  };
  this.addFrame = () => {
    this.frames = [...this.frames , ]
  };

  this.saveFrame = () => {};
  this.removeFrame = () => {};
  this.moveFrameTo = (index) => {};
  this.selectFrame = (index) => {}
  this.export = () => {};

  this.events = {
    onFrameAdded: new BroadCast(),
    onFrameRemoved: new BroadCast(),
  };
}

export function Frame(editor) {
  this.data = {};
  let history = [];
  this.execute = (command) => {};
  this.undo = () => {};
  this.redo = () => {};
}

// function Frame(editor) {
//     this.data = [];
//     this.image = '';
//     this.history = [];
//     this.undo = () => {};
//     this.redo = () => {};
//     this.execute = (command) => {};
//     this.save = ()=>{}
// }
