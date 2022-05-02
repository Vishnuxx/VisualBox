import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Canvas, Editor, onToolBarOptionChanged } from "../../../State/EditorRecoil";
import { fabric } from "fabric";
import icon from "../Assets/rectangle.png";

export function AddRectangleButton(props) {
  const editor = useRecoilValue(Editor);
   const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);

   const TYPE = "rectangle";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
     setOption([TYPE]);
    editor.canvas.add(
      new fabric.Rect({
        top: 100,
        left: 100,
        width: 100,
        height: 100,
        fill: "red",
      })
    );
  }
  return (
    <IconButton
      icon={icon}
      label="rectangle"
      active={isActive}
      onClick={onclick}
    />
  );
}
