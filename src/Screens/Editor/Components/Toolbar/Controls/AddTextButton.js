import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Canvas, Editor, onToolBarOptionChanged } from "../../../State/EditorRecoil";
import { fabric } from "fabric";
import icon from "../Assets/text.png";

export function AddTextButton(props) {
    const editor = useRecoilValue(Editor);
    const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);
    const TYPE = "text";
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
      label="text"
      onClick={onclick}
      active={isActive}
    />
  );
}
