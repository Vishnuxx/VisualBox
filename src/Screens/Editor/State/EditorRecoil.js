import { atom , selector } from "recoil";



export const Editor = atom({
  key: "editor",
  default: "",
  dangerouslyAllowMutability: true,
});

export const Canvas = atom({
    key: "canvas" ,
    default: "",
    dangerouslyAllowMutability: true
});

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