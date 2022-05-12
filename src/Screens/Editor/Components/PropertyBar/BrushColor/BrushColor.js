import { useRecoilValue } from "recoil"
import { EditorState } from "../../../../../State/EditorState"

export function BrushColor(props) {
    const editor = useRecoilValue(EditorState);
    const changeColor = (e) => {
         console.log(e.target.value);
        editor.canvas.freeDrawingBrush.color = e.target.value;
       
    }
    return (
      <label>
        <input type="color" onChange={(e) => changeColor(e)} />
        color
      </label>
    );
}