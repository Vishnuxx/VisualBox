

import { ExportButton } from "./Components/ExportButton";
import PlayerBar  from "./Components/PlayerBar/PlayerBar";
import { RedoButton } from "./Components/RedoButton";
import { UndoButton } from "./Components/UndoButton";
import style from "./menubar.module.css";


export function MenuBar(props) {
  
  return (
    <main className={style.menu}>
      <UndoButton></UndoButton>
      <RedoButton></RedoButton>
      <PlayerBar></PlayerBar>
      <ExportButton></ExportButton>
    </main>
  );
}
