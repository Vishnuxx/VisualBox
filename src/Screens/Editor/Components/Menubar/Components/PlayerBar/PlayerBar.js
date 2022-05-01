import style from './playerbar.module.css'
import playicon from './Assets/play.png'
import pauseicon from './Assets/pause.png'
import stopicon from './Assets/stop.png'
import skipstarticon from './Assets/skipstart.png'
import loopicon from './Assets/loopicon.png'



export default function PlayerBar(props) {
    return <div className={style.playerbar}>
        <SkipStartButton></SkipStartButton>
        <PlayButton></PlayButton>
        <StopButton></StopButton>
        <LoopButton></LoopButton>
    </div>
}

function PlayButton(props) {
    return <img className={style.icon} src={playicon} alt="playicon" />;
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
  return <img className={style.icon} src={loopicon} alt="loopButton" />;
}
