import { useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { EditorState } from "../../../../../State/EditorState";
import icon from "../Asset/redoIcon.png";

export function RedoButton(props) {
  const editor = useRecoilValue(EditorState);
  const onclick = () => {
    editor.redo();
  };
  return <IconButton icon={icon} label="redo" onClick={onclick} />;
}
