import { cloudStorage } from "../../../Services/Appwrite";


export function VideoExporter(editor) {
  editor.videoExporter = this;
  let recording = false;
  let framerate = 12;
  let mediaRecorder;
  let recordedChunks;
  let totalCanvasFrames;
  let canvas = editor.canvas.lowerCanvasEl;
  let player = editor.player;

  this.setMaxFrameRate = (fps) => (framerate = fps);

  this.exportVideo = (onProgressCallback, onFinish) => {
    if (recording === false) {
      totalCanvasFrames = editor.getFrameCount();
      player.loop = false;
      player.stop();
      const stream = canvas.captureStream(framerate);
      mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/webm;codecs=vp9",
        // ignoreMutedMedia: true,
      });
      recordedChunks = [];
      mediaRecorder.ondataavailable = (e) => {
        console.log(e.data)
        if (e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };
      mediaRecorder.start();
      console.log("recording started");
      player.play(
        (currentframenumber) => {
          //onProgress
          onProgressCallback(
            Math.trunc((currentframenumber / totalCanvasFrames) * 100)
          );
        },

        () => {
          //onFinish
          this.stop();
          console.log("recording finished");
          onFinish();
        }
      );
    } else {
      console.log(" already in recording progress");
    }
  };

  this.stop = () => {
    mediaRecorder.stop();
  };

  this.download = (type) => {
    const filetype = type === "mp4" ? "mp4" : "webm";
    setTimeout(() => {
      const blob = new Blob(recordedChunks, {
        type: `video/${filetype}`,
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${editor.projectName}${framerate}fps.${filetype}`;
      a.click();

      // URL.revokeObjectURL(url);
    }, 200);
  };

  this.getVideoFileAs = (type) => {
    //mp4 or webm
    const filetype = type === "mp4" ? "mp4" : "webm";

    // const blob = new Blob(recordedChunks[0], {
    //   type: `video/${filetype}`,
    // });

    // console.log("blob: " , blob)
    
    console.log(recordedChunks)
    

    let file = new File( [recordedChunks[0]] ,`${editor.projectName}${framerate}fps.${filetype}`,{ lastModified: new Date().getTime(), type: `video/${filetype}` });
    // console.log("file: " , file);

   console.log("recorded chunks: ", recordedChunks);
    //recordedChunks[0].type = `${editor.projectName}${framerate}fps.${filetype}`;
 
     cloudStorage.uploadVideo( file)
     console.log("recorded chunks: ", recordedChunks);

    // return file;
  };
}
