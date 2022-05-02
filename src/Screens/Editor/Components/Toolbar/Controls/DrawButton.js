import { useRecoilState } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { onToolBarOptionChanged } from "../../../State/EditorRecoil";
import icon from "../Assets/draw.png";

export function DrawButton(props) {
  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);
  const TYPE = "draw";
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
     setOption([TYPE]);
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
