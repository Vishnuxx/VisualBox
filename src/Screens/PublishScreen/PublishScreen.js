import { useRecoilValue } from "recoil";
import { AppStorage } from "../../AppConstants/AppStorage";
import { cloudfunctions } from "../../Services/Appwrite";

import { EditorState } from "../../State/EditorState";
import style from "./publishscreen.module.css";

export function PublishScreen(props) {
  const editor = useRecoilValue(EditorState);
  const publishType = AppStorage.getPublishType();
  const type = publishType === "project" ? "Project" : "Video";
  const projectTitle = AppStorage.getEditorConfigs().projectname;

  //metadata used to put to db
  const metadata = {
    projecttitle: projectTitle,
    tags: "",
    description: "",
  };

  //validation
  const validate = () => {
    // let str = metadata.tags;
    // metadata.tags = str.split(" ").filter((item) => item !== "");
  };
  const publish = () => {
    validate();
    // cloudfunctions.createProject(editor , (respone) => {
    //   console.log(respone)
    // } , (error)=>{
    //   console.log(error)
    // })
  };
  return (
    <section className={style.publishScreen}>
      <menu>
        <h3>Publish {type}</h3>
        <button onClick={publish}>Publish</button>
      </menu>
      <section>
        <div className={style.container}>
          <div className={style.inputHolder}>
            <h3>Title</h3>
            <input
              className={style.input}
              type="text"
              placeholder="Title"
              name="title"
              required={true}
              defaultValue={metadata.projecttitle}
              onChange={(e) => (metadata.projecttitle = e.target.value)}
            ></input>
          </div>

          <div className={style.inputHolder}>
            <h3>Tags</h3>
            <input
              className={style.input}
              type="text"
              placeholder="Use space to seperate tags"
              name="tags"
              required={true}
              onChange={(e) => (metadata.tags = e.target.value)}
            ></input>
          </div>

          <div className={style.inputHolder}>
            <h3>Description</h3>
            <textarea
              className={`${style.input} ${style.inputdescription}`}
              placeholder="Description"
              name="description"
              required={true}
              onChange={(e) => (metadata.description = e.target.value)}
            ></textarea>
          </div>
        </div>
      </section>
    </section>
  );
}
