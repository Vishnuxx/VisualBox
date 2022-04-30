import style from "./editingcanvas.module.css";
import { fabric } from "fabric";
import { useCallback, useRef } from "react";
import {  useSetRecoilState } from "recoil";
import { Canvas, Editor } from "../../../State/EditorRecoil";
import { EditorModel } from "../../../Model/EditorModel";

fabric.Object.prototype.set({
  transparentCorners: false,
  cornerStyle: "circle",
  cornerColor: "#3880ff",
  cornerSize: 10,
});

export function EditingCanvas(props) {
  const setEditor = useSetRecoilState(Editor);
  const setCanvas = useSetRecoilState(Canvas);
  const canvasref = useRef(null);

  const fabricRef = useCallback((element) => {
    if (!element) return canvasref.current?.dispose();

    const editorModel = new EditorModel();

    canvasref.current = new fabric.Canvas("canvas", {
      height: 400,
      width: 600,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      backgroundColor: "white",
    });

    
    
    //setCanvas(canvasref.current);
    setEditor(editorModel);
    editorModel.canvas = canvasref.current;
    console.log(editorModel.canvas);
  }, []);

  return <canvas id="canvas" ref={fabricRef} className={style.canvas}></canvas>;
}

// const useFabric = () => {
//   const canvas = useRef(null);
//   const fabricRef = useCallback((element) => {
//     if (!element) return canvas.current?.dispose();

//     canvas.current = new fabric.Canvas("canvas", {
//       height: 400,
//       width: 600,
//       fireRightClick: true,
//       fireMiddleClick: true,
//       stopContextMenu: true,
//       backgroundColor: "white",
//     });

//     canvas.current.add(
//       new fabric.Rect({
//         top: 100,
//         left: 100,
//         width: 100,
//         height: 100,
//         fill: "red",
//       })
//     );
//     return canvas;
//   }, []);

//   fabric.Object.prototype.set({
//     transparentCorners: false,
//     cornerStyle: "circle",
//     cornerColor: "#3880ff",
//     cornerSize: 10,
//   });
//   return fabricRef;
// };
