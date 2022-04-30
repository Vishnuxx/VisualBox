
import { useRecoilState } from "recoil";
import { frames } from "../../../../Recoil/EditorRecoil";
import style from "./menubar.module.css";


export function MenuBar(props) {
  const [frame , setFrame] = useRecoilState(frames)
  
  return (
    <menu className={style.menu}></menu>
  );
}
