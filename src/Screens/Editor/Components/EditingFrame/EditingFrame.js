
import { EditingCanvas } from "./EditingCanvas/EditingCanvas";
import style from "./editingframe.module.css";

export function EditingFrame(props) {
  
  return (
    <section className={style.editingFrame}>
      <EditingCanvas></EditingCanvas>
    </section>
  );
}
