import { atom } from "recoil";
import { auth } from "../Services/Appwrite";



export const authState = atom({
  key: "authState",
  default: auth,
  dangerouslyAllowMutability: true
});