import { Appwrite } from "appwrite";
import { Auth } from "./Auth";
import { CloudStorage } from "./cloudstorage";
import { Functions } from "./Functions";

export const appwrite = new Appwrite();
appwrite
  .setEndpoint("http://localhost/v1")
  .setProject("");

export const auth = new Auth(appwrite);
export const cloudfunctions = new Functions(appwrite);
export const cloudStorage = new CloudStorage(appwrite);
export const database = appwrite.database;
