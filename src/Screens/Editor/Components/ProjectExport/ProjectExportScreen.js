import style from "./projectexport.module.css";
import loadingGif from "./Assets/loadingfinger.gif";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Editor,
  exportStatus,
  showProjectExportPage,
} from "../../../../State/EditorState";

export function ProjectExport(props) {
  const editor = useRecoilValue(Editor);
  const [exportStatusState, setExportStatusState] =
    useRecoilState(exportStatus);
  const [isOpen, setOpen] = useRecoilState(showProjectExportPage);
  const close = () => {
    setOpen(false);
  };

  const render = () => {
    switch (exportStatusState) {
      case "success":
        return <DownloadSuccessBar></DownloadSuccessBar>;
      case "loading":
        return <LoadingBar></LoadingBar>;
      case "failed":
        return <ExportErrorBar></ExportErrorBar>;
      default:
        return <div></div>;
    }
  };
  return (
    <section
      className={`${style.projectexportpage} ${isOpen ? "" : style.close}`}
    >
      {render()}
      <img
        className={style.closeButton}
        onClick={close}
        src="https://img.icons8.com/material-rounded/48/000000/back--v1.png"
      />
    </section>
  );
}

function LoadingBar(props) {
  var progress = 0;
  setInterval(()=>{
    progress++;
  }, 1000);
  return (
    <div className={style.loadingPanel}>
      <img className={style.loadingGif} src={loadingGif} alt="loading" />
      <p>Loading Progress: {progress}%</p>
    </div>
  );
}

function DownloadSuccessBar(props) {
  const progress = 0;
  return (
    <div className={style.loadingPanel}>
      <img className={style.loadingGif} src={loadingGif} alt="loading" />
      <h3>Yay your video is ready!!</h3>
      <a className={style.publishButton} href="">
        Publish
      </a>
      <a className={style.downloadButton} href="">
        Download
      </a>
    </div>
  );
}

function ExportErrorBar(props) {
  const progress = 0;
  return (
    <div className={style.loadingPanel}>
      <img
        className={style.loadingGif}
        src="https://img.icons8.com/plumpy/96/000000/sad-cloud.png"
      />
      <h3>Failed to render Video</h3>
      <a className={style.publishButton} href="">
        Try Again
      </a>
      <a className={style.downloadButton} href="">
        Go back
      </a>
    </div>
  );
}
