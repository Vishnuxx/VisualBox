import style from './menubar.module.css'

export function MenuBar(props) {
  return (
    <menu className={style.menubar}>
      <h2>VisualBox</h2>
      {props.children}
    </menu>
  );
}
