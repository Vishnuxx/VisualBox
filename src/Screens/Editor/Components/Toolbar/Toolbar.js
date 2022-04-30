
import { AddCircleButton } from "./Controls/AddCircleButton";
import { AddImageButton } from "./Controls/AddImageButton";
import { AddLineButton } from "./Controls/AddLineButton";
import { AddRectangleButton } from "./Controls/AddRectangleButton";
import { AddTextButton } from "./Controls/AddTextButton";
import { AddTriangleButton } from "./Controls/AddTriangleButton";
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
    <AddLineButton></AddLineButton>
    <AddCircleButton></AddCircleButton>
    <AddTriangleButton></AddTriangleButton>
    <AddRectangleButton></AddRectangleButton>

  </section>;
}
