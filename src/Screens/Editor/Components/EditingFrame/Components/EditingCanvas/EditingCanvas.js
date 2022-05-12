import style from "./editingcanvas.module.css";

import { useRef } from "react";



export function EditingCanvas(props) {
  // const canvasref = useRef(null);
  // const setEditor = useSetRecoilState(EditorState);
  // const setFrameListState = useSetRecoilState(framesListState);

  // const fabricRef = useCallback((element) => {
  //   if (!element) return canvasref.current?.dispose();
  //   const editor = new EditorModel();
  //   new Player(editor);

  //   canvasref.current = new fabric.Canvas("canvas", {
  //     height: editor.height,
  //     width: editor.width,
  //     fireRightClick: true,
  //     fireMiddleClick: true,
  //     stopContextMenu: true,
  //     backgroundColor: "white",
  //     selection: true,
  //     allowTouchScrolling: true,
  //     interactive: true,
  //     //isDrawingMode:true,
  //     enableRetinaScaling: true,
  //     viewportTransform: [0.7, 0, 0, 0.7, 50, 50],
  //   });

  //   editor.canvas = canvasref.current;
  //   new VideoExporter(editor);

    

  //   // editor.addFrame();
  //   //editor.createProject(AppStorage.getEditorConfigs());
  //   editor.loadProject(
  //     {
  //       version: 1,
  //       config: AppStorage.getEditorConfigs(),
  //       frames:
  //         '[{"version":"5.2.1","objects":[],"background":"white"}]',
  //     },
  //     () => {

  //       //onFinishLoading
  //       console.log(AppStorage.getEditorConfigs());
  //       // editor.selectFrame(editor.frames.length - 1);
  //       setFrameListState([...editor.frames]);
  //       console.log([...editor.frames]);
  //       initCanvasTouchControls(editor);
  //     }
  //   );

  //   setEditor(editor);
  // }, []);

  const containerRef = useRef();

  return (
    <div className={style.canvas} ref={containerRef}>
      <canvas id="canvas" ref={props.fabricRef}></canvas>
    </div>
  );
}

// FOR ZOOMING AND PANNING
// useEffect(() => {
//   var target = containerRef.current;
//   enableZoom(target);

//   function enableZoom(target) {
//     window.addEventListener(
//       "wheel",
//       function (e) {
//         e.preventDefault();
//         if (e.ctrlKey) {
//           console.log("pinch", e.deltaY);
//           var width = getStyleInt(target, "width");
//           var newWidth = width - e.deltaY;
//           setStyleInt(target, "width", newWidth);
//           setStyleInt(target, "height", newWidth);
//         } else {
//           console.log("pan", e.deltaX, e.deltaY);
//           var x = getStyleInt(target, "left");
//           setStyleInt(target, "left", x - e.deltaX);
//           var y = getStyleInt(target, "top");
//           setStyleInt(target, "top", y - e.deltaY);
//         }
//       },
//       { passive: false }
//     );

//     function getStyleInt(target, key) {
//       console.log();
//       var val = window.getComputedStyle(target)[key];
//       return parseInt(val, 10);
//     }

//     function setStyleInt(target, key, val) {
//       target.style[key] = val + "px";
//     }
//   }
// }, []);
