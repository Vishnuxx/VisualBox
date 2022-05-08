import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { Editor, onToolBarOptionChanged } from "../../../../../State/EditorState";
import selectIcon from "../Assets/select.png";

export function ToggleSelectionButton(props) {
  const editor = useRecoilValue(Editor);
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
