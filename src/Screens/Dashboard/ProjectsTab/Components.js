import styles from './projectstyles.module.css';


export function ProjectsPage(props) {
  return <section className={styles.page}>{props.children}</section>;
}


export function TopBar(props) {
    return <menu className={styles.menu}>{props.children}</menu>;
}


export function CreateButton(props) {
    return <button className={styles.createButton}>Create</button>
}

export function ProjectItem(props) {
    return (
        <div className={styles.project_item}>
        </div>
    );
}

export function ContentPanel(props) {
  return <div className={styles.content_panel}>{props.children}</div>;
}