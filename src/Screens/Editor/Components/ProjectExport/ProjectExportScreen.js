import style from './projectexport.module.css';
import loadingGif from "./Assets/loadingfinger.gif"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { Editor, showProjectExportPage } from '../../State/EditorRecoil';

export function ProjectExport(props) {
  const editor = useRecoilValue(Editor);
 const [isOpen, setOpen] = useRecoilState(showProjectExportPage);
 const close = () => {
   setOpen(false);
 }
    return (
      <section className={`${style.projectexportpage} ${isOpen ? "" : style.close}`}>
        <LoadingBar></LoadingBar>
        {/* <DownloadBar></DownloadBar> */}
        <img className={style.closeButton} onClick={close} src="https://img.icons8.com/material-rounded/48/000000/back--v1.png" />
      </section>
    );
}


function LoadingBar(props) {
    const progress = 0;
    return <div className={style.loadingPanel}>
        <img className={style.loadingGif} src={loadingGif} alt="loading" />
        <p>Loading Progress: {progress}%</p>
    </div>
}

function DownloadBar(props) {
  const progress = 0;
  return (
    <div className={style.loadingPanel}>
      <img className={style.loadingGif} src={loadingGif} alt="loading" />
      <h3>Yay your video is ready!!</h3>
      <a className={style.publishButton} href="">Publish</a>
      <a className={style.downloadButton} href="">Download</a>
    </div>
  );
}