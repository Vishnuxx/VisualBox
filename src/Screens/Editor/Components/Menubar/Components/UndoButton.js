import { useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { EditorState } from "../../../../../State/EditorState";
import icon from "../Asset/undoIcon.png";

export function UndoButton(props) {
  const editor = useRecoilValue(EditorState);
  const onclick = () => {
    editor.undo();
  };
  return <IconButton icon={icon} label="undo" onClick={onclick} />;
}
