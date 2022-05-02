import style from './iconbutton.module.css'

export function IconButton({active , onClick , icon , label}) {
    return <div className={`${style.iconButton} ${(active) ? style.active : ""}`} onClick={onClick}>
        <img className={style.icon} src={icon} alt="icon" />
        <p className={style.label}>{label}</p>
    </div>
}