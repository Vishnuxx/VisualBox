import { atom } from "recoil";

export const currentTeamPageState = atom({
  key: "currentTeamPageState",
  default: "", //success , loading , failed
});
