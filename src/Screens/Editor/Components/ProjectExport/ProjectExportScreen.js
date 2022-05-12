import style from "./projectexport.module.css";
import loadingGif from "./Assets/loadingfinger.gif";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  EditorState,
  exportStatus,
  showProjectExportPage,
  videoExportingProgress,
} from "../../../../State/EditorState";
import { useNavigate } from "react-router-dom";
import { currentExportType } from "../../../../State/ProjectExportScreenState";
import { useRef, useState } from "react";
import { cloudfunctions, cloudStorage } from "../../../../Services/Appwrite";
import { AppStorage } from "../../../../AppConstants/AppStorage";

export function ProjectExport(props) {
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

      case "savetocloud":
        return <SaveToCloudBar></SaveToCloudBar>;

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
        alt=""
        className={style.closeButton}
        onClick={close}
        src="https://img.icons8.com/material-rounded/48/000000/back--v1.png"
      />
    </section>
  );
}

function ExportSettingsBar(props) {
  const navigate = useNavigate();

  const editor = useRecoilValue(EditorState);
  const setExportStatusState = useSetRecoilState(exportStatus);
  const setExportProgress = useSetRecoilState(videoExportingProgress);

  const setCurrentTypeState = useSetRecoilState(currentExportType);

  //publish project
  // const publishProject = () => {
  //   setExportStatusState("exportsettings");
  //   AppStorage.publishAsType("project");
  //   navigate("/publish");
  // };

  // //publish video
  // const publishVideo = () => {
  //   setExportStatusState("exportsettings");
  //   AppStorage.publishAsType("video");
  //   //navigate("/publish");
  //   editor.videoExporter.exportVideo(
  //     (progress) => {
  //       //onProgress
  //       setExportProgress(progress);
  //       console.log(progress);
  //     },
  //     () => {
  //       //onFinish
  //       setCurrentTypeState("video");
  //       setExportStatusState("success");
  //     }
  //   );
  // };

  //download project
  const downloadProject = () => {
    editor.downloadProject((res)=>{
 setExportStatusState("savetocloud");
 setCurrentTypeState("project");
    }, err=>{

    })

   
  };

  //download video
  const downloadVideo = () => {
    setExportStatusState("loading");
    setCurrentTypeState("video");
    editor.videoExporter.exportVideo(
      (progress) => {
        //onProgress
        setExportProgress(progress);
      },
      () => {
        //onFinish
        setExportStatusState("success");
        editor.videoExporter.download();
      }
    );
  };

  return (
    <div className={style.exportSettingsPanel}>
      <img
        src="https://media0.giphy.com/media/tIYA4g6xx9e4VBKKRe/giphy.gif?cid=ecf05e471zgw3yrgs2tqpbgnc9vxgv3mfzon5trvgnpl5lqe&rid=giphy.gif&ct=g"
        alt="exportgif"
      />
      <button className={style.publishButton} onClick={downloadProject}>
        Download as Project
      </button>

      <button className={style.downloadButton} onClick={downloadVideo}>
        Download as Video
      </button>

      {/* <button className={style.publishButton} onClick={publishProject}>
        Publish as Project
      </button>
      <button className={style.publishButton} onClick={publishVideo}>
        Publish as Video
      </button> */}
    </div>
  );
}

function LoadingBar(props) {
  const progress = useRecoilValue(videoExportingProgress);
  return (
    <div className={style.loadingPanel}>
      <img className={style.loadingGif} src={loadingGif} alt="loading" />
      <p>Loading Progress: {progress}%</p>
    </div>
  );
}

function DownloadSuccessBar(props) {
  const setExportStatusState = useSetRecoilState(exportStatus);
  const [showfileupload, setshowfileupload] = useState(false);
  const currentType = useRecoilValue(currentExportType);

  const onClick = () => {
    setExportStatusState("savetocloud");
  };

  return (
    <div className={style.loadingPanel}>
      <img className={style.loadingGif} src={loadingGif} alt="loading" />
      <h3>Yay your {currentType} is ready!!</h3>
      <button className={style.publishButton} onClick={onClick}>
        Save {currentType} to cloud
      </button>
    </div>
  );
}

export function SaveToCloudBar(props) {
  const setExportStatusState = useSetRecoilState(exportStatus);
  const editor = useRecoilValue(EditorState);
  const currentType = useRecoilValue(currentExportType);
  const files = useRef();
  //const uploadtextstat = [`Upload your ${currentType}` , "Uploading..." , "Upload Finished"];
  const [uploadtextstat, setUploadtextstat] = useState(
    `Upload your ${currentType}`
  );
  const [errormessage, setErrormessage] = useState("");

  //file ref
  const fref1 = useRef(0);
  const fref2 = useRef(0);

  var metadata = {
    projecttitle: AppStorage.getEditorConfigs().projectname,
    tags: "",
    description: "",
    thumbnail: fref1.current,
    source: fref2.current,
  };

  console.log(metadata.thumbnail);

  //UPLOADS THE PROJECT
  const uploadProject = (e) => {
    setUploadtextstat("Uploading...");
    setErrormessage("");
    cloudStorage.uploadProject(
      metadata.source.files[0],
      (response) => {
        console.log(response);
        setUploadtextstat("Upload Finished");
      },
      (error) => {
        setErrormessage(error.errormessage);
      }
    );
  };

  const uploadVideo = (e) => {
    setUploadtextstat("Uploading...");
    setErrormessage("");
    cloudStorage.uploadVideo(
      metadata.source.files[0],
      (response) => {
        setUploadtextstat("Upload Finished");
        setInterval(() => {
          setExportStatusState("exportsettings");
        }, 2000);
      },
      (error) => {
        setErrormessage(error.errormessage);
      }
    );
  };

  const validateAndUpload = (e) => {
    e.preventDefault();
    //check if all are not empty
    if (
      metadata.projecttitle !== "" &&
      fref1.current.files[0] !== undefined &&
      fref2.current.files[0] !== undefined
    ) {
      if (currentType === "project") {
        editor.loadProjectFromFile(
          fref2.current.files[0],
          (success) => {
            console.log(metadata)
            cloudfunctions.createAndUploadProject(
              fref1.current.files[0],
              fref2.current.files[0],
              metadata.projecttitle , 
              metadata.description ,
              metadata.tags,
              false,
              (response) => {
                console.log("project and video" , response)
              },
              (error) => {
                console.log("project and video error", error);
              }
            );
          },
          (error) => {
            setErrormessage(error.errormessage);
          }
        );
      } else {
        uploadVideo(e);
      }
    }
  };

  return (
    <div className={style.savetocloudpanel}>
      <form className={style.form}>
        <div className={style.container}></div>

        {/* <div className={style.inputHolder}> */}
        <h3>Title</h3>
        <input
          className={style.input}
          type="text"
          placeholder="Title"
          name="title"
          required={true}
          defaultValue={metadata.projecttitle}
          onChange={(e) => (metadata.projecttitle = e.target.value)}
        ></input>
        {/* </div> */}

        {/* <div className={style.inputHolder}> */}
        <h3>Tags</h3>
        <input
          className={style.input}
          type="text"
          placeholder="Use space to seperate tags"
          name="tags"
          required={true}
          onChange={(e) => (metadata.tags = e.target.value)}
        ></input>
        {/* </div> */}

        {/* <div className={style.inputHolder}> */}
        <h3>Description</h3>
        <textarea
          className={`${style.input} ${style.inputdescription}`}
          placeholder="Description"
          name="description"
          required={true}
          onChange={(e) => (metadata.description = e.target.value)}
        ></textarea>
        {/* </div> */}
        <h3>{uploadtextstat}</h3>
        {}
        <p>Choose your project thumbnail</p>
        <input
          ref={fref1}
          className={style.file}
          type="file"
          accept="image/*"
          id="file"
          aria-label="File browser example"
        />

        <p>Choose your project</p>
        <input
          ref={fref2}
          className={style.file}
          type="file"
          accept={currentType === "project" ? ".visualbox" : ".mp4 , .webm"}
          id="file"
          aria-label="File browser example"
        />
        {}
        <button
          className={style.publishButton}
          onClick={(e) => validateAndUpload(e)}
        >
          Upload {currentType} to cloud
        </button>
        {errormessage !== "" ? <p>{errormessage}</p> : ""}
      </form>
    </div>
  );
}

function ExportErrorBar(props) {
  return (
    <div className={style.loadingPanel}>
      <img
        alt=""
        className={style.loadingGif}
        src="https://img.icons8.com/plumpy/96/000000/sad-cloud.png"
      />
      <h3>Failed to render Video</h3>
      <button className={style.publishButton}>Try Again</button>
      <button className={style.downloadButton}>Go back</button>
    </div>
  );
}
