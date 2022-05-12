import { BrushColor } from "./BrushColor/BrushColor";
import { BrushSize } from "./BrushSize.js/BrushSize";
import style from "./propertybar.module.css";

export function PropertyBar(props) {
  return (
    <section className={style.propertybar}>
      <BrushColor></BrushColor>
      <BrushSize></BrushSize>
    </section>
  );
}
