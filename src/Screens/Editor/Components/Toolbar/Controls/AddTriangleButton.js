import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Editor, onToolBarOptionChanged } from "../../../../../State/EditorState";
import { fabric } from "fabric";
import icon from "../Assets/triangle.png";

export function AddTriangleButton(props) {
  const editor = useRecoilValue(Editor);
  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);

  const TYPE = "triangle";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
    setOption([TYPE]);
    editor.canvas.add(
      new fabric.IText("Text", {
        left: 100,
        top: 100,
      })
    );
  };
  return (
    <IconButton
      icon={icon}
      label="triangle"
      onClick={onclick}
      active={isActive}
    />
  );
}
