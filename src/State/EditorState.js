import { atom } from "recoil";
import { EditorModel } from "../Screens/Editor/Model/EditorModel";
import Player from "../Screens/Editor/Model/Player";
import { VideoExporter } from "../Screens/Editor/Model/VideoExporter";
import { fabric } from "fabric";

export const editor = new EditorModel();
editor.canvas = new fabric.Canvas();

new Player(editor);
new VideoExporter(editor);

export const EditorState = atom({
  key: "editor",
  default: editor,
  dangerouslyAllowMutability: true,
});


//Timeline

export const framesListState = atom({
  key: "framesListState",
  default: [],
  dangerouslyAllowMutability: true,
});

export const isLoopingState = atom({
  key: "isLoopingState",
  default: false,
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});

export const selectedFrameIndex = atom({
  key: "selectedframeIndex",
  default: 0,
});

//Toolbar

export const onToolBarOptionChanged = atom({
  key: "onToolBarOptionChanged",
  default: ["select"],
});

export const showProjectExportPage = atom({
  key: "showProjectExportPage",
  default: false,
});

export const exportStatus = atom({
  key: "exportStatus",
  default: "exportsettings", // exportsettings , success , loading , failed
});

export const videoExportingProgress = atom({
  key: "videoExportingProgress",
  default: 0,
});

export const editorConfigState = atom({
  key: "editorConfigState",
  default: {
    projectname: "VisualBoxProject",
    aspectratio: "16:9",
    retinascale: false,
  },
  dangerouslyAllowMutability: true,
});
