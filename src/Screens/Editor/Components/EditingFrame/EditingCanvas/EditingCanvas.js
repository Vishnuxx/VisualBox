import style from "./editingcanvas.module.css";
import { fabric } from "fabric";
import { useContext, useEffect, useState } from "react";
import { editorContext } from "../../../EditorScreen";

export function EditingCanvas(props) {
  const [canvas, setCanvas] = useState("");

  const initCanvas = () => 
    new fabric.Canvas("canvas", {
      height: 200,
      width: 400,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      backgroundColor: "white",
    });
  

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  // context.canvas = canvas;

  return (

      <canvas id="canvas" className={style.canvas}></canvas>
   
  ); 
}
