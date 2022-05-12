
import { EditingCanvas } from "./Components/EditingCanvas/EditingCanvas";
import style from "./editingframe.module.css";

//Container which holdss all canvases
export function EditingFrame(props) {
  
  return (
    <section className={style.editingFrame}>
      <EditingCanvas fabricRef={props.fabricRef}></EditingCanvas>
    </section>
  );
}
