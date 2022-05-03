import { IconButton } from "../../../EditorUIControls/IconButton/IconButton";
import icon from "../Assets/circle.png";
import { fabric } from "fabric";
import { Editor, onToolBarOptionChanged } from "../../../State/EditorRecoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { AddObjectCommand } from "../../../Model/Commands";


export function AddCircleButton(props) {
  const editor = useRecoilValue(Editor);
  const [optionType , setOption] = useRecoilState(onToolBarOptionChanged);

  const TYPE = "circle"
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
    setOption([TYPE]);
  //  editor.canvas.add(
   let obj =  new fabric.Circle({
        radius: 100,
        fill: "",
        stroke: "red",
        strokeWidth: 3,
        originX: "center",
        originY: "center",
        top: 100,
        left: 100,
      })
  //  );
    editor.executeCommand(new AddObjectCommand(editor , obj))
  };

  return <IconButton icon={icon} label="circle" active={isActive} onClick={onclick} />;
}
