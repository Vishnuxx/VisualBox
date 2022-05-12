
import { useRecoilState } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import {
  onToolBarOptionChanged,
} from "../../../../../State/EditorState";
import selectIcon from "../Assets/select.png";

export function ToggleSelectionButton(props) {

  const [optionType, setOption] = useRecoilState(onToolBarOptionChanged);
  const TYPE = "select";
  const isActive = optionType.includes(TYPE);

  const onclick = () => {
    setOption([TYPE]);
  };

  return (
    <IconButton
      icon={selectIcon}
      label="select"
      onClick={onclick}
      active={isActive}
    />
  );
}
