import style from './navigationmenu.module.css'

export function NavigationMenu(props) {
  return <nav className={style.nav}>{props.children}</nav>;
}
