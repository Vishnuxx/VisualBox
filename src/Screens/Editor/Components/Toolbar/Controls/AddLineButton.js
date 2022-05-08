import { useRecoilState } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { onToolBarOptionChanged } from "../../../../../State/EditorState";
import icon from "../Assets/line.png";

export function AddLineButton(props) {
   const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);

   const TYPE = "line";
   const isActive = optionType.includes(TYPE);
   const onclick = () => {
     setOption([TYPE]);
   };
  return <IconButton icon={icon} onClick={onclick} active={isActive} label="line" />;
}
