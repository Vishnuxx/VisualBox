import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import {
  EditorState,
  onToolBarOptionChanged,
} from "../../../../../State/EditorState";
import { fabric } from "fabric";
import icon from "../Assets/rectangle.png";

export function AddRectangleButton(props) {
  const editor = useRecoilValue(EditorState);
  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);

  const TYPE = "rectangle";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
    setOption([TYPE]);
    var obj = new fabric.Rect({
      top: 100,
      left: 100,
      width: 100,
      height: 100,
      fill: "red",
    });

    editor.canvas.add(obj);
  };
  return (
    <IconButton
      icon={icon}
      label="rectangle"
      active={isActive}
      onClick={onclick}
    />
  );
}
