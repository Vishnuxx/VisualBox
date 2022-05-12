import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cloudfunctions } from '../../../../Services/Appwrite';
import { EditorState } from '../../../../State/EditorState';
import styles from './projectstyles.module.css';


export function ProjectsPage(props) {
  return <section className={styles.page}>{props.children}</section>;
}


export function TopBar(props) {
    return <menu className={styles.menu}>{props.children}</menu>;
}


export function CreateButton(props) {
    const editor = useRecoilValue(EditorState);
    const navigate = useNavigate();
    const create = () => {
       navigate("/create");
    }
   
    return (
      <button className={styles.createButton} onClick={create}>Create</button>
      
    );
}

export function ProjectItem(props) {
    return (
      <div className={styles.project_item} onClick={props.onClick}>
        <div className={styles.thumb}>
          {/* <img src={props.thumb}  /> */}
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{props.postTitle}</p>
          <p className={styles.description}>{props.postDescription}</p>
        </div>
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
        alt=''
      />
      <h3 style={{ margin: "3px" }}>{props.title}</h3>
      <h5 style={{ margin: "3px" }}>{props.message}</h5>
    </div>
  );
}