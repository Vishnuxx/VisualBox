function Player(editor) {
    var currentFrameNumber = 0;
    var frameCount = editor.frames.length - 1;
    var timer;
    editor.player = this;
    this.editor = editor;
    this.loop = false;
    this.fps = 12;
    this.play = () => {
        timer = setInterval(function () {
          if (currentFrameNumber > frameCount) {
              if(this.loop) {
                 currentFrameNumber = 0;
              }else {
                 clearInterval(timer);
              }
          } else {
            
            currentFrameNumber++;
          }
        }, 1000 / this.fps);
    };
    this.pause = () => {
        if(timer !== undefined){
            clearInterval(timer);
        }
    };
    this.stop = () => {
        if (timer !== undefined) {
          clearInterval(timer);
          currentFrameNumber = 0;
        }
    };
    this.seekToFrame = (framenumber) => {
        currentFrameNumber = framenumber;
    }
}

export default Player;