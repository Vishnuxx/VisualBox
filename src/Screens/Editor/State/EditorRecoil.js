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
  // dangerouslyAllowMutability: true,
});

export const isLoopingState = atom({
  key: "isLoopingState",
  default: false,
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});



//Toolbar

export const currentSelectedToolOptionState = atom({
  key: "",
  default: ["select"]
})

