import { Appwrite } from "appwrite";
import { AppStorage } from "../AppConstants/AppStorage";
import { appwrite, auth, cloudStorage, database } from "./Appwrite";

export function Functions(sdk) {
  const functions = sdk.functions;

  //-> creeateproject screen
  this.createAndUploadProject = (
    thumbnail,
    source,
    title,
    description,
    tags,
    isVideo,
    onSuccess,
    onError
  ) => {
    var thumbnailURL;
    var sourceURL;
    auth.checkAuthenticated((auth) => {
      const data = AppStorage.getLocalProjectDataAsJSON();

      //Upload thumbnail
      cloudStorage.uploadThumbnail(
        thumbnail,
        auth,
        (res) => {
          console.log("thumbnail: ", res);
          thumbnailURL = appwrite.storage.getFileView(
            "627b7db6ed4e887e9be9",
            res.$id
          ).href;
          //Upload Sourcefile
          if (isVideo === true) {
            //Video
            cloudStorage.uploadVideo(
              source,
              auth,
              res.$id,
              (res) => {
                sourceURL = appwrite.storage.getFileView(
                  "627a73b9af93b9415a6e",
                  res.$id
                ).href;
                console.log("video: ", res);
              },
              (err) => {
                console.log("video error: ", err);
              }
            );
          } else {
            //Project
            cloudStorage.uploadProject(
              source,
              auth,
              res.$id,
              (res) => {
                console.log("project: ", res);
                sourceURL = appwrite.storage.getFileView(
                  "627cdcfa884628ad27a6",
                  res.$id
                ).href;
                //User DB
                if (isVideo) {
                  //video database
                } else {
                  console.log(thumbnailURL, res);
                  //project database
                  database
                    .createDocument("627a35f3ee5b7bcc9835", "unique()", {
                      title: title,
                      description: description,
                      tags: tags,
                      videoUrl: sourceURL,
                      thumbnailUrl: thumbnailURL,
                    })
                    .then(
                      (res) => {
                        console.log("database: ", res);
                      },
                      (err) => {
                        console.log("database error: ", err);
                      }
                    );
                }
              },
              (err) => {
                console.log("project error: ", res);
              }
            );
          }
        },
        (err) => {}
      );

      // functions
      //   .createExecution(
      //     "627b7750b99bfe682cbb",
      //     JSON.stringify({
      //       title: data.projectname,
      //       description: "Sample desc",
      //       thumbnail: "",
      //       projectData:"" ,
      //       video:""
      //     }),
      //     false
      //   )
      //   .then(
      //     (response) => {
      //       onSuccess(response);
      //     },
      //     (error) => {
      //       onError(error);
      //     }
      //   );
    });
  };

  //gets the private projects
  this.getPrivateProjects = (onSuccess, onError) => {
    let promise = functions.createExecution(
      "627bcd4da5a0403c2b5c",
      "{private:true}",
      false
    );
    promise.then(
      function (response) {
        onSuccess(JSON.parse(response.stdout).documents); // Success
      },
      function (error) {
        onError(error); // Failure
      }
    );
  };

  //gets the public projects
  this.getSharedProjects = (onSuccess, onError) => {
    let promise = functions.createExecution(
      "627bcd4da5a0403c2b5c",
      "{private:false}",
      false
    );
    promise.then(
      function (response) {
        onSuccess(JSON.parse(response.stdout).documents); // Success
      },
      function (error) {
        onError(error); // Failure
      }
    );
  };
}
