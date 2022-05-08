import { Appwrite } from "appwrite";
import { Auth } from "./Auth";

const appwrite = new Appwrite();
appwrite
  .setEndpoint("")
  .setProject("");

export const auth = new Auth(appwrite);
