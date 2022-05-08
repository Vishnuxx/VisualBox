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

 
  this.exportVideo = (onProgressCallback , onFinish) => {
    if (recording === false) {
      totalCanvasFrames = editor.getFrameCount();
      player.stop();
      const stream = canvas.captureStream(framerate);
      mediaRecorder = new MediaRecorder(stream, {
        mimeType: "video/webm;codecs=vp9",
       // ignoreMutedMedia: true,
      });
      recordedChunks = [];
      mediaRecorder.ondataavailable = (e) => {
          let progress = e.data.size
        if (progress > 0) {
          console.log("recording progress");
          recordedChunks.push(e.data);
          onProgressCallback((progress / totalCanvasFrames) * 100)
        }
      };
      mediaRecorder.start();
      console.log("recording started");
      player.play(() => {
        //onFinish
        this.stop();
        console.log("recording finished");
        this.download();
        onFinish();
        
      });
      
    } else {
        console.log(" already in recording progress")
    }
  };

  this.stop = () => {
    mediaRecorder.stop();
    
  };

  this.download = () => {
      setTimeout(() => {
        const blob = new Blob(recordedChunks, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "recording.webm";
        a.click();
        URL.revokeObjectURL(url);
      }, 200);
  }
}
