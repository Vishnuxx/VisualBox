import styles from './explorestyles.module.css'
import searchIcon from './Assets/searchIcon.png'

export function ExplorePage(props) {
  return <section className={styles.explorePage}>{props.children}</section>
}

export function TopBar(props) {
  return <menu className={styles.topBar}>{props.children}</menu>;
}

export function SearchBar(props) {
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search here"
        className={styles.searchInput}
      />
      <img src={searchIcon} alt="search" className={styles.searchIcon} />
    </div>
  );
}

export function ArticlesPane(props) {
  return <article className={styles.articlepane}>{props.children}</article>;
}

export function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.postThumb}>
        <img src={props.postThumb} alt={props.thumbAlt} />
      </div>
      <div className={styles.postTitleContainer}>
        <h3 className={styles.postTitle}>{props.postTitle}</h3>
        <p className={styles.postDescription}>{props.postDescription}</p>
      </div>
    </div>
  );
}