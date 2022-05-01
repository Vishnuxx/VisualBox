import style from './playerbar.module.css'
import playicon from './Assets/play.png'
import pauseicon from './Assets/pause.png'
import stopicon from './Assets/stop.png'
import skipstarticon from './Assets/skipstart.png'
import loopicon from './Assets/loopicon.png'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Editor, isLoopingState, isPlayingState } from '../../../../State/EditorRecoil'



export default function PlayerBar(props) {
    return <div className={style.playerbar}>
        <SkipStartButton></SkipStartButton>
        <PlayPauseButton></PlayPauseButton>
        <StopButton></StopButton>
        <LoopButton></LoopButton>
    </div>
}

function PlayPauseButton(props) {
    const editor = useRecoilValue(Editor);
    const [isPlaying, startPlaying] = useRecoilState(isPlayingState);
    const click = () => {
      //editor.player.isLooping = !editor.player.isLooping;
      startPlaying(!isPlaying);
    };
    return (
      <img
        className={`${style.icon} ${isPlaying ? style.active : ""}`}
        src={isPlaying ? pauseicon :  playicon}
        onClick={click}
        alt="playpauseicon"
      />
    );
}

function PauseButton(props) {
  return <img className={style.icon} src={pauseicon} alt="pauseicon" />;
}

function StopButton(props) {
  return <img className={style.icon} src={stopicon} alt="stopicon" />;
}

function SkipStartButton(props) {
  return <img className={style.icon} src={skipstarticon} alt="skipstarticon" />;
}

function LoopButton(props) {
    const editor = useRecoilValue(Editor);
    const [isLooping , setLooping] = useRecoilState(isLoopingState);
    const click = () => {
        editor.player.isLooping = !editor.player.isLooping
        setLooping(editor.player.isLooping);
    }
  return <img className={`${style.icon} ${(isLooping)? style.active : ""}`} src={loopicon} onClick={click} alt="loopButton" />;
}
