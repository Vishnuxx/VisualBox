import style from './iconbutton.module.css'

export function IconButton(props) {
    return <div className={style.iconButton} onClick={props.onClick}>
        <img className={style.icon} src={props.icon} alt="icon" />
        <p className={style.label}>{props.label}</p>
    </div>
}