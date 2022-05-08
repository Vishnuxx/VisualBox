import { atom } from "recoil";
import { auth } from "../Model/Appwrite";



export const authState = atom({
  key: "authState",
  default: auth,
  dangerouslyAllowMutability: true
});