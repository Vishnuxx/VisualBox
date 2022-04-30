import { IconButton } from "../IconButton/IconButton";
import style from "./iconbutton.module.css";

export function IconButtonSelector(props) {
  return (
    <div className={style.iconButton}>
      <img className={style.icon} src={props.icon} alt="icon" />
      <p className={style.label}>{props.label}</p>
    </div>
  );
}

export function Option(props)  {
    return (
      <div className={`${style.option} ${(props.isSeleccted)? style.isSeleccted : ""}`} >
        <img className={style.icon} src={props.icon} alt="icon" />
        <p className={style.label}>{props.label}</p>
      </div>
    );
}
