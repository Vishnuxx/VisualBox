import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Editor, onToolBarOptionChanged } from "../../../../../State/EditorState";
import icon from "../Assets/draw.png";

export function DrawButton(props) {
  const editor = useRecoilValue(Editor);
  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);
  const TYPE = "draw";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
     setOption([TYPE]);
      //!editor.canvas.isDrawingMode;
     if(editor.canvas.isDrawingMode) {
       editor.canvas.isDrawingMode = false;
        editor.canvas.interactive = true;
       console.log(editor.canvas.interactive)
     }else {
       editor.canvas.isDrawingMode = true;
       editor.canvas.interactive = false;
     }

  }
  return (
    <IconButton
      icon={icon}
      label="draw"
      onClick={onclick}
      active={isActive}
    />
  );
}
