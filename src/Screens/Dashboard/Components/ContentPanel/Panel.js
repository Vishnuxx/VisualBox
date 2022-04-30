import style from './panel.module.css'

export function Panel(props) {
  return <section className={style.panel}>{props.children}</section>;
}
