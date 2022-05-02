import { Link, unstable_HistoryRouter } from 'react-router-dom';
import styles from './projectstyles.module.css';


export function ProjectsPage(props) {
  return <section className={styles.page}>{props.children}</section>;
}


export function TopBar(props) {
    return <menu className={styles.menu}>{props.children}</menu>;
}


export function CreateButton(props) {
    return (
      <Link to="/editor" className={styles.createButton}>Create</Link>
     
    );
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