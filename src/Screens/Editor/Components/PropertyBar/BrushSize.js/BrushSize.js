import { useRecoilValue } from "recoil";
import { EditorState } from "../../../../../State/EditorState";

export function BrushSize(props) {
     const editor = useRecoilValue(EditorState);
    const setsize = (e) => {
        editor.canvas.freeDrawingBrush.width = e.target.value;
    }
    return (
      <label>
        <input type="number" style={{width:'30px'}} defaultValue={10} onChange={setsize} />
        size
      </label>
    ); 
}