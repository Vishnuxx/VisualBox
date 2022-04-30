import { useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Editor } from "../../../State/EditorRecoil";
import { fabric } from "fabric";
import icon from "../Assets/triangle.png";

export function AddTriangleButton(props) {
  const editor = useRecoilValue(Editor);
  const onclick = () => {
    editor.canvas.add(
      new fabric.IText("Text", {
        left: 100,
        top: 100,
      })
    );
  };
  return <IconButton icon={icon} label="triangle" onClick={onclick} />;
}
