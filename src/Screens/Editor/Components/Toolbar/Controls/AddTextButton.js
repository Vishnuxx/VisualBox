import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import {
  EditorState,
  onToolBarOptionChanged,
} from "../../../../../State/EditorState";
import { fabric } from "fabric";
import icon from "../Assets/text.png";

export function AddTextButton(props) {
  const editor = useRecoilValue(EditorState);
  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);
  const TYPE = "text";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
    setOption([TYPE]);

    var obj = new fabric.IText("Text", {
      left: 100,
      top: 100,
    });

    editor.canvas.add(obj)
  };
  return (
    <IconButton icon={icon} label="text" onClick={onclick} active={isActive} />
  );
}
