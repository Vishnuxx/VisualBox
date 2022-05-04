import { UpdateCoordinatesCommand } from "../../../Model/Commands.js";


export function initCanvasTouchControls(editor) {
    var oldx , oldy = 0;
    editor.canvas.on("mouse:down", function (e) {
        
         if (
           editor.canvas.getActiveObject() !== undefined ||
           editor.canvas.getActiveObject() === editor.canvas
         ) {
           oldx = editor.canvas.getActiveObject().left;
           oldy = editor.canvas.getActiveObject().top;
         }
      
    });

    editor.canvas.on("mouse:up", function (e) {
        console.log(editor.canvas.getActiveObject() );
      if (
        editor.canvas.getActiveObject() !== undefined ||
        editor.canvas.getActiveObject() === editor.canvas
      ) {
        editor.executeCommand(
          new UpdateCoordinatesCommand(
            editor,
            editor.canvas.getActiveObject(),
            oldx,
            oldy
          )
        );
        console.log("sfjk");
      }
    });
}