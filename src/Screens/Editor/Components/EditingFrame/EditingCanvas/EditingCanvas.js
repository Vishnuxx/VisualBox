import style from "./editingcanvas.module.css";
import { fabric } from "fabric";
import { useCallback, useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  addFrame,
  Canvas,
  Editor,
  framesListState,
} from "../../../State/EditorRecoil";
import { EditorModel } from "../../../Model/EditorModel";
import Player from "../../../Model/Player";
import { TraceLayer } from "../TraceLayer/TraceLayer";
import {  initCanvasTouchControls } from "./CanvasFunctions";

fabric.Object.prototype.set({
  transparentCorners: false,
  cornerStyle: "circle",
  cornerColor: "#3880ff",
  cornerSize: 10,
});

export function EditingCanvas(props) {
  const canvasref = useRef(null);
  const setEditor = useSetRecoilState(Editor);
  const setFrameListState = useSetRecoilState(framesListState);

  const fabricRef = useCallback((element) => {
    if (!element) return canvasref.current?.dispose();
    const editor = new EditorModel();
    const player = new Player(editor);

    canvasref.current = new fabric.Canvas("canvas", {
      height: editor.height,
      width: editor.width,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      backgroundColor: "white",
      selection: false,
      allowTouchScrolling: true,
      interactive: true,
      //isDrawingMode:true,
      enableRetinaScaling: true,
      viewportTransform: [0.7, 0, 0, 0.7, 50, 50],
    });

    setEditor(editor);
    editor.canvas = canvasref.current;
    editor.addFrame();
    editor.selectFrame(editor.frames.length - 1);
    setFrameListState([...editor.frames]);
    initCanvasTouchControls(editor);
    
  }, []);

  const containerRef = useRef();
  

  return (
    <div className={style.canvas} ref={containerRef}>
      <canvas id="canvas" ref={fabricRef}></canvas>
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