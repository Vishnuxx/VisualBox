
import { AddImageButton } from "./Controls/AddImageButton";
import { AddTextButton } from "./Controls/AddTextButton";
import { DrawButton } from "./Controls/DrawButton";
import { EraseButton } from "./Controls/EraseButton";
import { MultiSelectButton, } from "./Controls/MultiSelectButton";

import { ToggleSelectionButton } from "./Controls/toggleSelectionButton";

import style from "./toolbar.module.css";

export function ToolBar(props) {

  return <section className={style.toolbar}>
    <ToggleSelectionButton></ToggleSelectionButton>
    <AddImageButton></AddImageButton>
    <MultiSelectButton></MultiSelectButton>
    <AddTextButton></AddTextButton>
    <DrawButton></DrawButton>
    <EraseButton></EraseButton>
    
  </section>;
}
