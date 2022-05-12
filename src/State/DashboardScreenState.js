import { atom } from "recoil";

export const activeTabState = atom({
  key: "activateTabState",
  default: 0, //success , loading , failed
});


export const projectsListState = atom({
  key: "projectsListState",
  default: [], 
});

export const privateProjectsListState = atom({
  key: "privateProjectsListState",
  default: [],
});