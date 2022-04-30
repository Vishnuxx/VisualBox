import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import icon from "../Assets/circle.png";
import { fabric } from "fabric";
import { Canvas, Editor } from "../../../State/EditorRecoil";
import { useRecoilValue } from "recoil";

export function AddCircleButton(props) {
  const editor = useRecoilValue(Editor);
  const onclick = () => {
    editor.canvas.add(
      new fabric.Circle({
        radius: 100,
        fill: "",
        stroke: "red",
        strokeWidth: 3,
        originX: "center",
        originY: "center",
        top: 100,
        left: 100,
      })
    );
  };

  return <IconButton icon={icon} label="circle" onClick={onclick} />;
}
