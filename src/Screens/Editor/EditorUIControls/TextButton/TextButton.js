import style from './textbutton.module.css'

export function TextButton(props) {
    return <div className={style.textButton} onClick={props.onClick}>{props.children}</div>
}