import { DrawCommand, UpdateCoordinatesCommand } from "../../../../Model/Commands.js";

export function initCanvasTouchControls(editor) {
  var oldx , oldy = 0;
  editor.canvas.on("mouse:down", function (e) {
    if (editor.canvas.isDrawingMode) return;

    if (
      editor.canvas.getActiveObject() !== undefined ||
      editor.canvas.getActiveObject() === editor.canvas
    ) {
      oldx = editor.canvas.getActiveObject().left;
      oldy = editor.canvas.getActiveObject().top;
    }
  });


  editor.canvas.on("mouse:up", function (e) {
    if (editor.canvas.isDrawingMode) return;
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
      //console.log("sfjk");
    }
  });

//    editor.canvas.on("object:added", function (e) {
//        console.log(e)
//        if (editor.canvas.isDrawingMode) {
//            editor.executeCommand(new DrawCommand(editor , e.target))
//        }
//    });
}
