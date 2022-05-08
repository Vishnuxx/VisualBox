import { atom , selector } from "recoil";



export const Editor = atom({
  key: "editor",
  default: "",
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
    default: 0
})

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
  default: 0
});