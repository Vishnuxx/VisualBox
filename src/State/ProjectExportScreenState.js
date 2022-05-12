import { atom } from "recoil";

export const currentExportType = atom({
  key: "currentExportType",
  default: "project",
});
