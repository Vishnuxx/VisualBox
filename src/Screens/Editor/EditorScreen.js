import style from "./editor.module.css";

import { Timeline } from "./Components/Timeline/Timeline";
import { ToolBar } from "./Components/Toolbar/Toolbar";
import { MenuBar } from "./Components/Menubar/Menubar";
import { EditingFrame } from "./Components/EditingFrame/EditingFrame";


import { RecoilRoot } from "recoil";
import { PropertyBar } from "./Components/PropertyBar/PropertyBar";


export function EditorScreen(props) {
  
  return (
    <RecoilRoot>
      <main className={style.main}>
        <EditingFrame />
        <MenuBar />
        <ToolBar></ToolBar>
        <Timeline />
        <PropertyBar></PropertyBar>
      </main>
    </RecoilRoot>
  );
}
