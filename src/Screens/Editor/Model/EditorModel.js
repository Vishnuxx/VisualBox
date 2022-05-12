import { AppConstants } from "../../../AppConstants/AppConstants";
import { AppStorage } from "../../../AppConstants/AppStorage";
import { HistoryMemento } from "./History";
import { fabric } from "fabric";

export function EditorModel() {
  this.projectName = "VisualBox_Project";

  this.frameIndex = 0;
  this.canvas = null;
  this.player = null;
  this.width = 500;
  this.height = 300;
  this.frames = []; //stores all frames
  this.player = null;
  this.videoExporter = null;

  //METHODS
  // this.getFrames = () => this.frames;
  this.getFrameCount = () => this.frames.length;

  this.currentFrame = () => {
    return this.frames[this.frameIndex];
  };

  this.setAspectRatio = (ratio) => {
    this.canvas.setWidth(document.body.clientWidth / 1.5);
    this.canvas.setHeight(this.canvas.width / ratio);
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

  this.addFrame = (isNew) => {
    let frame = new Frame(this);
    this.frames.push(frame);
    this.saveFrame(frame);
    if (isNew) {
      frame.data().objects = [];
    }
  };

  this.removeFrame = (index) => {
    this.frames.splice(index, 1);
  };

  // this.nextFrame = () => {
  //   if (this.frameIndex < this.frames.length - 1) {
  //     this.frameIndex++;
  //   } else {
  //     console.log("No Next frame");
  //   }
  // };

  // this.previousFrame = () => {
  //   if (this.frameIndex > 0) {
  //     this.frameIndex--;
  //   } else {
  //     console.log("No Previous frame");
  //   }
  // };

  this.moveFrameTo = (fromIndex, toIndex) => {
    if (fromIndex < 0 && fromIndex > this.frames.length - 1) return;
    if (toIndex < 0 && toIndex > this.frames.length - 1) return;
    this.splice(toIndex, 0, this.splice(fromIndex, 1)[0]);
  };

  // this.executeCommand = (command) => {
  //   this.frames[this.frameIndex].execute(command);
  // };

  this.trackChanges = () => {
    this.frames[this.frameIndex].track();
  };

  
  this.undo = () => {
    
    this.frames[this.frameIndex].undo();
    //this.canvas.renderAll();
  };


  this.redo = () => {

    this.frames[this.frameIndex].redo();
    //this.canvas.renderAll();
  };


  this.saveCurrentFrame = () => {

    this.frames[this.frameIndex].save();
  };


  this.saveFrame = (frame) => {

    console.log(this.frames ?? [0].thumbnail());
    frame.save();
  };


  this.loadFrame = (jsonObject) => {

    const canv = this.canvas;
    canv.loadFromJSON(
      jsonObject,
      function () {
        canv.renderAll();
      },
      function (o, object) {
        // console.log(o, object);
      }
    );
  };


  this.getThumbnailFromFrame = (frameNumber, filename) => {

    const dataurl = this.frames[frameNumber]
      .generateThumb()
      .split(";base64,")
      .pop();

    return dataurl;

    // console.log(this.frames)

    // var arr = dataurl.split(","),
    //   mime = arr[0].match(/:(.*?);/)[1] //,
    // bstr = atob(arr[1]),
    //   n = bstr.length,
    //   u8arr = new Uint8Array(n);

    // while (n--) {
    //   u8arr[n] = bstr.charCodeAt(n);
    // }

    // const blob = new Blob([dataurl], {
    //   type: "image/png",
    // });

    //  // function blobToUint8Array(b) {
    //     var uri = URL.createObjectURL(blob),
    //       xhr = new XMLHttpRequest(),
    //       i,
    //       ui8;

    //     xhr.open("GET", uri, false);
    //     xhr.send();

    //     URL.revokeObjectURL(uri);

    //     ui8 = new Uint8Array(xhr.response.length);

    //     for (i = 0; i < xhr.response.length; ++i) {
    //       ui8[i] = xhr.response.charCodeAt(i);
    //     }

    //     return ui8;
    //}

    // var binary_string = atob(arr[1].split(","));
    // var len = binary_string.length;
    // var bytes = new Uint8Array(len);
    // for (var i = 0; i < len; i++) {
    //   bytes[i] = binary_string.charCodeAt(i);
    // }

    // var binary_string = atob(dataurl.split(",")[1]);
    // var len = binary_string.length;
    // var bytes = new Uint8Array(len);
    // for (var i = 0; i < len; i++) {
    //   bytes[i] = binary_string.charCodeAt(i);
    // }
    // console.log(bytes.buffer)
    // return new String(...bytes.buffer);
    // return JSON.stringify(...binary_string);
    // console.log(dataurl)
    // return dataurl;
    //return new File([blob], filename, { type: mime });

    //  //Usage example:
    //  var file = dataURLtoFile(
    //    "data:text/plain;base64,aGVsbG8gd29ybGQ=",
    //    "hello.txt"
    //  );
    //  console.log(file);
  };

  this.createProject = (editorconfig, onFinish) => {
    const config = JSON.parse(JSON.stringify(editorconfig));
    //setup
    this.projectName = config.projectname;
    this.canvas.enableRetinaScaling = config.retinascale;
    console.log(config.custom)
    if(config.custom === true) {
      this.canvas.setWidth(config.width);
      this.canvas.setHeight(config.height);
    } else {
      //aspect ratio
      this.setAspectRatio(config.aspectratio);
    }
   
    this.addFrame();
    this.selectFrame(this.frameIndex);
    onFinish();
  };

  this.loadProject = async (projectDataJSON, onFinish) => {
    const projectdata = JSON.parse(JSON.stringify(projectDataJSON));
    console.log(projectdata);
    const config = projectdata.config;
    const frames = await JSON.parse(JSON.stringify(projectdata.frames));

    //setup
    this.projectName = config.projectname;
    this.canvas.enableRetinaScaling = config.retinascale;

    //compute canvas size
    this.setAspectRatio(config.aspectratio);

    //load frames
    for (let frameObj of frames) {
      let frame = new Frame(this);
      frame.load(frameObj);
      this.frames.push(frame);
      this.loadFrame(frameObj);
      frame.generateThumb();
    }
    // frames.map((frameObj) => {

    // });
    this.selectFrame(this.frameIndex);
    //finish callback
    onFinish();
  };

  this.loadProjectFromFile = (filecontents, onload, onError) => {
    const tempcanvas =  document.createElement("canvas");
    var tempCanvas = new fabric.Canvas(tempcanvas , {
      width: this.width,
      height: this.height,
      
    });

    try {
      var fr = new FileReader();
      fr.onload = function () {
        const data = JSON.parse(JSON.parse(fr.result));
        onload(data);
      };
      fr.readAsText(filecontents);
    } catch (error) {
      onError(error);
    }
    tempCanvas = null;
  };

  this.exportProject = (projectConfig) => {
    let data = [];
   
    data = this.frames.map((frame) => frame.data());
    return {
      version: AppConstants.EDITOR_VERSION,
      config: projectConfig,
      //thumbnail: this.getThumbnailFromFrame(AppConstants.getRandomInt(0 , this.frames.length -1) , "thumbnail.png"),
      frames: data,
    };
  };

  this.downloadProject = (onSuccess, onError) => {
    try {
      const data = AppStorage.getLocalProjectDataAsJSONString();
      console.log(data);
      setTimeout(() => {
        const blob = new Blob([data], {
          type: "text/plain",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${this.projectName}.visualbox`;
        a.click();

        // URL.revokeObjectURL(url);
      }, 200);
      onSuccess();
    } catch (e) {
      onError(e);
    }
  };
}

export function Frame(editor) {
  var thumbnail = null;
  var data = null;
  this.history = new HistoryMemento(editor);

  this.hasUndo = () => this.history.hasUndo();
  this.hasRedo = () => this.history.hasRedo();

  this.track = () => {
    this.history.track();
    this.save();
  };
  this.undo = () => {
    this.history.undo();
  };
  this.redo = () => {
    this.history.redo();
  };

  this.load = (framedatajson) => {
    data = framedatajson;
  };
  this.save = () => {
    data = editor.canvas.toJSON();
    thumbnail = editor.canvas.toDataURL("image/png");
  };

  this.generateThumb = () => {
    // thumbnail = editor.canvas.toDataURL();
    return thumbnail;
  };
  this.thumb = () => thumbnail;
  this.data = () => data;
}
