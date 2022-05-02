import style from "./playerbar.module.css";
import playicon from "./Assets/play.png";
import pauseicon from "./Assets/pause.png";
import stopicon from "./Assets/stop.png";
import skipstarticon from "./Assets/skipstart.png";
import loopicon from "./Assets/loopicon.png";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Editor,
  isLoopingState,
  isPlayingState,
} from "../../../../State/EditorRecoil";

export default function PlayerBar(props) {
  return (
    <div className={style.playerbar}>
      <SkipStartButton></SkipStartButton>
      <PlayPauseButton></PlayPauseButton>
      <LoopButton></LoopButton>
      <FpsButton></FpsButton>
    </div>
  );
}
function FpsButton(props) {
  const editor = useRecoilValue(Editor);
  const click = (e) => {
    const player = editor.player;
    player.fps = e.target.value;
    console.log(e.target.value)
  };
  return (
    <select
    defaultValue="12"
      name="fps"
      onChange={(val) => click(val)}
      className={style.fpsSelect}
    >
      <option value="6">6fps</option>
      <option value="12">
        12fps
      </option>
      <option value="24">24fps</option>
      <option value="30">30fps</option>
    </select>
  );
}

function PlayPauseButton(props) {
  const editor = useRecoilValue(Editor);
  const [isPlaying, startPlaying] = useRecoilState(isPlayingState);
  const click = () => {
    startPlaying(!isPlaying);
    if (isPlaying) {
     editor.player.pause();
      console.log("stopped");
    } else {
      
       editor.player.play(function () {
         //when player finished
       });
      console.log("started");
    }
  };
  return (
    <img
      className={`${style.icon} ${isPlaying ? style.active :  "" }`}
      src={isPlaying ? pauseicon : playicon}
      onClick={click}
      alt="playpauseicon"
    />
  );
}

function SkipStartButton(props) {
   const editor = useRecoilValue(Editor);
   const player = editor.player;
   const click = () => {
     player.stop();
   };
  return <img className={style.icon} src={skipstarticon} onClick={click} alt="skipstarticon" />;
}

function LoopButton(props) {
  const editor = useRecoilValue(Editor);
  const [isLooping, setLooping] = useRecoilState(isLoopingState);
  const click = () => {
    editor.player.loop = !editor.player.loop;
    setLooping(editor.player.loop);
  };
  return (
    <img
      className={`${style.icon} ${isLooping ? style.active : ""}`}
      src={loopicon}
      onClick={click}
      alt="loopButton"
    />
  );

}
