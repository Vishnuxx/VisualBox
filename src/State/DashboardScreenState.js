import { atom } from "recoil";

export const activeTabState = atom({
  key: "activateTabState",
  default: 0, //success , loading , failed
});
