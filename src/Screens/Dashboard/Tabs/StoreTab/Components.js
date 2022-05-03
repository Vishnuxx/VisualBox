import style from "./storetab.module.css";

export function StorePage(props) {
  return <section className={style.storePage}>{props.children}</section>;
}

export function StoreMenu(props) {
  return <menu className={style.topBar}>{props.children}</menu>;
}

export function EmptyBar(props) {
  return (
    <div className={style.emptyBar}>
      <img
        style={{ width: "30px", height: "30px" }}
        src="https://img.icons8.com/plumpy/24/000000/documentary.png"
      />
      <h3 style={{ margin: "3px" }}>Store has no items</h3>
      <h5 style={{ margin: "3px" }}></h5>
    </div>
  );
}
