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

export function EmptyBar(props) {
  return (
    <div className={styles.emptyBar}>
      <img
        style={{ width: "30px", height: "30px" }}
        src="https://img.icons8.com/plumpy/24/000000/documentary.png"
      />
      <h3 style={{ margin: "3px" }}>You havent created any projects.</h3>
      <h5 style={{ margin: "3px" }}>Click create button to create project</h5>
    </div>
  );
}