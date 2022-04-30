import { atom, DefaultValue, selector } from "recoil";
import {EditorModel} from '../Models/EditorModel';
import { fabric } from "fabric";

const editor = new EditorModel();


// export const canvas = atom({
//     key: "canvas" ,
//     default: fabric.Canvas("canvas", {
//       height: 200,
//       width: 400,
//       fireRightClick: true,
//       fireMiddleClick: true,
//       stopContextMenu: true,
//       backgroundColor: "white",})
// });

export const frames = atom({
  key: "frames",
  default: [],
});

export const selectedFrameIndex = atom({
    key: "selectedframeIndex",
    default: 0
})

export const addFrame = selector({
  key: "tempCelsius",
  get: ({ get }) => {},
  set: ({ get , set }, newValue) => {
      const fr = get(frames);
      set(frames , [...fr , newValue]);
  }
});