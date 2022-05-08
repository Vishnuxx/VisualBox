import style from "./projectexport.module.css";
import loadingGif from "./Assets/loadingfinger.gif";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  Editor,
  exportStatus,
  showProjectExportPage,
  videoExportingProgress,
} from "../../../../State/EditorState";

export function ProjectExport(props) {
  const editor = useRecoilValue(Editor);
  const [exportStatusState, setExportStatusState] =
    useRecoilState(exportStatus);
  const [isOpen, setOpen] = useRecoilState(showProjectExportPage);
  const close = () => {
    setOpen(false);
    setExportStatusState("exportsettings");
  };

  const render = () => {
    switch (exportStatusState) {
      case "exportsettings":
        return <ExportSettingsBar></ExportSettingsBar>;

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

function ExportSettingsBar(props) {
  const editor = useRecoilValue(Editor);
  const setExportStatusState = useSetRecoilState(exportStatus);
  const setExportProgress = useSetRecoilState(videoExportingProgress);

  const publishProject = () => {
    setExportStatusState("loading");

    
  }

  const publishVideo = () => {
     setExportStatusState("loading");
  }

  const downloadVideo = () => {
     setExportStatusState("loading");
     editor.videoExporter.exportVideo(
       (progress) => {
         //onProgress
         setExportProgress(progress);
       },
       () => {
         //onFinish
         setExportStatusState("success");
        
       }
     );
  }

  return (
    <div className={style.exportSettingsPanel}>
      <img
        src="https://media0.giphy.com/media/tIYA4g6xx9e4VBKKRe/giphy.gif?cid=ecf05e471zgw3yrgs2tqpbgnc9vxgv3mfzon5trvgnpl5lqe&rid=giphy.gif&ct=g"
        alt="exportgif"
      />
      <button className={style.publishButton} onClick={publishProject} >
        Publish as Project
      </button>
      <button className={style.publishButton} onClick={publishVideo}  >
        Publish as Video
      </button>
      <button className={style.downloadButton} onClick={downloadVideo}  >
        Download Video
      </button>
    </div>
  );
}

function LoadingBar(props) {
  var progress = 0;
  setInterval(() => {
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
