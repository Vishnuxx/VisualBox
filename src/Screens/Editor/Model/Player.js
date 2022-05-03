function Player(editor) {
  var timer;

  editor.player = this;
  this.editor = editor;
  this.currentFrameNumber = 0;
  this.frameCount = this.editor.frames.length-1;
  this.loop = false;
  this.fps = 12;

  this.play = (onFinish) => {
    this.frameCount = this.editor.frames.length-1;
    this.editor.saveCurrentFrame();
    timer = setInterval(() => {
       if(this.currentFrameNumber > this.frameCount) {
           if(this.loop) {
               this.seekToFrame(0)
           } else {
                this.stop();
                if(onFinish!== undefined)onFinish();
           }
       }else {
           this.editor.loadFrame(this.editor.getFrame(this.currentFrameNumber).data());
       }
       this.currentFrameNumber++;
    }, 1000 / this.fps);
  };


  this.pause = () => {
    if (timer !== undefined) {
      clearInterval(timer);
    }
  };


  this.stop = () => {
    if (timer !== undefined) {
      clearInterval(timer);
      this.currentFrameNumber = 0;
    }
  };


  this.seekToFrame = (framenumber) => {
    this.currentFrameNumber = framenumber;
  };

  this.startRecording = () => {

  };

  this.stopRecording = () => {

  };
}

export default Player;
