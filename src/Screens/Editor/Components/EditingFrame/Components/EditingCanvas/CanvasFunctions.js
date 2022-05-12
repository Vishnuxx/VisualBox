

export function initCanvasTouchControls(editor) {
  // var oldx , oldy = 0;
  // editor.canvas.on("mouse:down", function (e) {

  //   if (editor.canvas.isDrawingMode) return;

  //   if (
  //     editor.canvas.getActiveObject() !== undefined ||
  //     editor.canvas.getActiveObject() === editor.canvas
  //   ) {
  //     oldx = editor.canvas.getActiveObject().left;
  //     oldy = editor.canvas.getActiveObject().top;
  //   }
  // });


  // editor.canvas.on("mouse:up", function (e) {
  //   if (editor.canvas.isDrawingMode) return;
  //   if (
  //     editor.canvas.getActiveObject() !== undefined ||
  //     editor.canvas.getActiveObject() === editor.canvas
  //   ) {
  //     editor.executeCommand(
  //       new UpdateCoordinatesCommand(
  //         editor,
  //         editor.canvas.getActiveObject(),
  //         oldx,
  //         oldy
  //       )
  //     );
  //     //console.log("sfjk");
  //   }
  // });

   editor.canvas.on("object:added", function (e) {
      editor.trackChanges();
   });

   editor.canvas.on("object:modified", function (e) {
      editor.trackChanges();
   });

   editor.canvas.on("object:removed", function (e) {
      editor.trackChanges();
   });
}
