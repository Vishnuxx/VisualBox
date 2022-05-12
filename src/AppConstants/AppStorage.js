export class AppStorage {
  //set project metadata such as project title , size etc
  static setEditorConfigs = (configobj) => {
    localStorage.setItem("editorConfigs", JSON.stringify(configobj));
  };

  //sets wheather the project is newly created by user
  static setIsNewProject = (bool) => {
    localStorage.setItem("isNewProject" , bool);
  }

  //get if the project is newly created
  static isNewProject = () => localStorage.getItem("isNewProject")


  
  static getEditorConfigs = () =>
    JSON.parse(localStorage.getItem("editorConfigs"));

  //used to check wheather publishing type is video or project
  static publishAsType = (mode) => {
    //1.project 2.video
    switch (mode) {
      case "project": //project
        localStorage.setItem("publish_as", mode);
        break;

      case "video": //video
        localStorage.setItem("publish_as", mode);
        break;

      default:

    }
  };

  static getPublishType = () => localStorage.getItem("publish_as");

  //saves project data locally
  static saveProjectLocally = (editor) => {
    const data = JSON.stringify(editor.exportProject(AppStorage.getEditorConfigs()));
    localStorage.setItem("editordata", data);
    console.log(localStorage.getItem("editordata"));
  };

  static getLocalProjectDataAsJSON = () => {
    return JSON.parse(localStorage.getItem("editordata"));
  };

  static getLocalProjectDataAsJSONString = () => {
    return JSON.stringify(localStorage.getItem("editordata"));
  };

  //used to open the /view route for different categories
  static viewAs(mode) { //1. project 2.video
    localStorage.setItem("viewAs" , mode);
  }

  static getViewMode() {
    return localStorage.getItem("viewAs");
  }

  clearAll = () => {
    localStorage.removeItem("editorConfigs");
    localStorage.removeItem("publish_as");
    localStorage.removeItem("editordata");
  };
}
