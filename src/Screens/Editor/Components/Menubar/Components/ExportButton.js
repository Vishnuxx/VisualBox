import { useRecoilValue, useSetRecoilState } from "recoil";
import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import { EditorState , showProjectExportPage } from "../../../../../State/EditorState";
import icon from "../Asset/export.png";
import { AppStorage } from "../../../../../AppConstants/AppStorage";

export function ExportButton(props) {
  const editor = useRecoilValue(EditorState);
  //  const setExportStatusState = useSetRecoilState(exportStatus);
  const showExportScreen = useSetRecoilState(showProjectExportPage);
  const click = () => {
    AppStorage.saveProjectLocally(editor);
    showExportScreen(true);
    // setExportStatusState("exportsettings");
  }
  return <IconButton icon={icon} label="export" onClick={click} />;
}
