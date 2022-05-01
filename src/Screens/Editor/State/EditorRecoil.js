import { atom , selector } from "recoil";



export const Editor = atom({
  key: "editor",
  default: "",
  dangerouslyAllowMutability: true,
});

export const framesListState = atom({
  key: "framesListState",
  default: [],
  // dangerouslyAllowMutability: true,
});



export const selectedFrameIndex = atom({
    key: "selectedframeIndex",
    default: 0
})

