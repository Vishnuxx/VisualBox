import { auth } from "./Appwrite";

export function CloudStorage(sdk) {
  const storage = sdk.storage;

  this.uploadThumbnail = async (thumbnail, auth, onSuccess, onError) => {
    console.log(auth.$id);
    const promise = storage.createFile(
      "627b7db6ed4e887e9be9",
      "unique()",
      thumbnail,
      ["role:member"],
      [`user:${auth.$id}`]
    );

    promise.then(
      (res) => {
        onSuccess(res);
      },
      (err) => {
        onError(err);
      }
    );
  };

  // this.uploadVideo = async (video) => {
  //   const videodata = await storage
  //     .createFile(
  //       "627a73b9af93b9415a6e",
  //       "unique()",
  //       video,
  //       ["role:member"],
  //       [`user:${uid}`]
  //     )
  //     .catch((error) => {
  //       console.log(error);
  //       return;
  //     });
  //   console.log(videodata);
  // };

  this.uploadProject = (file, auth , id , onSuccess, onError) => {
   
      
        storage
          .createFile(
            "627cdcfa884628ad27a6",
            "unique()",
            file,
            [`user:${auth.$id}`],
            [`user:${auth.$id}`]
          )
          .then(
            (response) => {
              onSuccess(response);
            },
            (error) => {
              onError(error);
            }
          );

  };

  this.uploadVideo = (file, auth,id, onSuccess, onError) => {
    storage
      .createFile(
        "627a73b9af93b9415a6e",
        "unique()",
        file,
        [`user:${auth.$id}`],
        [`user:${auth.$id}`]
      )
      .then(
        (response) => {
          onSuccess(response);
        },
        (error) => {
          onError(error);
        }
      );
  };

  this.updateProject = async (file, oldfileId, onSuccess, onError) => {
    auth.checkAuthenticated(
      (res) => {
        storage.deleteFile("627a73b9af93b9415a6e", oldfileId).then(
          (res) => {
            storage
              .createFile(
                "627a73b9af93b9415a6e",
                "unique()",
                file,
                [`user:${res.$id}`],
                [`user:${res.$id}`]
              )
              .then(
                (response) => {
                  onSuccess(response);
                },
                (e) => {
                  onError(e);
                }
              );
          },
          (err) => {
            onError(err);
          }
        );
      },
      (errr) => {
        onError(errr);
      }
    );
  };

  this.viewProject = (projectid) => {
    const result = storage.getFileView("627cdcfa884628ad27a6", projectid);
    console.log(result.href);
    fetch(result.href, {
      // method: "GET",
      mode: "no-cors",
      credentials: "include",
    })
      .then((r) => console.log(r)) // r.text())
      .then((t) => console.log(t));
  };
}
