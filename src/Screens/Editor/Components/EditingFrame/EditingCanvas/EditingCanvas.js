import style from "./editingcanvas.module.css";
import { fabric } from "fabric";
import { useCallback, useRef } from "react";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { addFrame, Canvas, Editor, framesListState } from "../../../State/EditorRecoil";
import { EditorModel } from "../../../Model/EditorModel";
import Player from "../../../Model/Player";
import { TraceLayer } from "../TraceLayer/TraceLayer";

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
      height: 0,
      width: 0,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      backgroundColor: "white",
      //selection: false,
      allowTouchScrolling: true,
      interactive: false,
      //isDrawingMode:true,
      enableRetinaScaling: true,
      viewportTransform : [0.7, 0, 0, 0.7, 50, 50]
    });
    
    setEditor(editor);
    editor.canvas = canvasref.current;
    editor.addFrame();
    setFrameListState([...editor.frames]);
     
  }, []);


  

  return (
    <div className={style.canvas}>
      <canvas id="canvas" ref={fabricRef}></canvas>
    </div>
  );
}
