import { useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Editor } from "../../../State/EditorRecoil";
import icon from "../Asset/redoIcon.png";

export function RedoButton(props) {
   const editor = useRecoilValue(Editor);
   const onclick = () => {
     editor.redo();
   };
  return <IconButton icon={icon} label="redo" onClick={onclick} />;
}
