import { useRecoilState } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { onToolBarOptionChanged } from "../../../State/EditorRecoil";
import icon from "../Assets/erase.png";

export function EraseButton(props) {
  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);
  const TYPE = "erase";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
     setOption([TYPE]);
  }
  
  return (
    <IconButton
      icon={icon}
      label="erase"
      onClick={onclick}
      active={isActive}
    />
  );
}
