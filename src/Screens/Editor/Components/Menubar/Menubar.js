
import { useRecoilState, useRecoilValue } from "recoil";
import { Editor, frames } from "../../State/EditorRecoil";
import { ExportButton } from "./Components/ExportButton";
import { RedoButton } from "./Components/RedoButton";
import { UndoButton } from "./Components/UndoButton";
import style from "./menubar.module.css";


export function MenuBar(props) {
  
  return (
    <main className={style.menu}>
      <UndoButton></UndoButton>
      <RedoButton></RedoButton>
      <ExportButton></ExportButton>
    </main>
  );
}
