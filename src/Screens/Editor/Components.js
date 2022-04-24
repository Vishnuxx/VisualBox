import style from './EditorStyles.module.css';

export function EditorPage(props) {
    return <main className={style.main}>{props.children}</main>
}

export function MenuBar(props) {
    return <menu className={style.menu}></menu>
}

export function EditingFrame(props) {
    return <section className={style.editingFrame}>{props.children}</section>
}

export function ToolBar(props) {
    return <section className={style.toolbar}>{props.children}</section>
}

export function Timeline(props) {
    return <section className={style.timeline}>{props.children}</section>
}

export function Frame(props) {
    return <div className={`${style.frame} ${(props.isActive === true)? style.activeFrame : ""}`}>
        <p className={style.frameNumber}>{props.frameNumber}</p>
    </div>
}

