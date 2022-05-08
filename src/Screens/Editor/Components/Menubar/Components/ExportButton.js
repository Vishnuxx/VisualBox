import { useSetRecoilState } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { showProjectExportPage } from "../../../../../State/EditorState";
import icon from "../Asset/export.png";

export function ExportButton(props) {
  const setExportScreen = useSetRecoilState(showProjectExportPage);
  const click = () => {
    setExportScreen(true);
  }
  return <IconButton icon={icon} label="export" onClick={click} />;
}
