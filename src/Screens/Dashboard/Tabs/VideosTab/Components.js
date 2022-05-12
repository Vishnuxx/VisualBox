import style from "./videostab.module.css";

export function VideosPage(props) {
  return <section className={style.storePage}>{props.children}</section>;
}

export function VideoMenu(props) {
  return <menu className={style.topBar}>{props.children}</menu>;
}

export function EmptyBar(props) {
  return (
    <div className={style.emptyBar}>
      <img
        alt=""
        style={{ width: "30px", height: "30px" }}
        src="https://img.icons8.com/plumpy/24/000000/documentary.png"
      />
      <h3 style={{ margin: "3px" }}>No Videos</h3>
      
    </div>
  );
}
