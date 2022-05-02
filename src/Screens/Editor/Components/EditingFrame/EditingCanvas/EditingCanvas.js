import style from "./editingcanvas.module.css";
import { fabric } from "fabric";
import { useCallback, useRef } from "react";
import {  useRecoilValue, useSetRecoilState } from "recoil";
import { addFrame, Canvas, Editor, framesListState } from "../../../State/EditorRecoil";
import { EditorModel } from "../../../Model/EditorModel";
import Player from "../../../Model/Player";

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
      selection:false,
    });
    setEditor(editor);
    editor.canvas = canvasref.current;
    editor.addFrame();
    setFrameListState([...editor.frames]);
     
  }, []);

  return <canvas id="canvas" ref={fabricRef} className={style.canvas}></canvas>;
}
