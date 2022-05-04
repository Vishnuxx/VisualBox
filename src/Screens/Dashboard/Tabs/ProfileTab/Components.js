import style from './profiletab.module.css';

export function ProfilePage(props) {
  return <section className={style.profilePage}>{props.children}</section>;
}

export function ProfileMenu(props) {
  return <menu className={style.topBar}>{props.children}</menu>;
}

export function Contents(props) {
    return <article className={style.contents}>
        {props.children}
    </article>
}

export function EmptyBar(props) {
  return (
    <div className={style.emptyBar}>
      <img
        style={{ width: "30px", height: "30px" }}
        src="https://img.icons8.com/plumpy/24/000000/documentary.png"
        alt=''
      />
      <h3 style={{ margin: "3px" }}>Store has no items</h3>
      <h5 style={{ margin: "3px" }}></h5>
    </div>
  );
}


export function ProfileName(props) {
    return (
      <div className={style.profileName}>
        <h1 style={{ margin: "0 10px" }}>{props.name}</h1>
        {/* <img
          style={{
            width: "20px",
            height: "20px",
            padding: "5px",
            borderRadius: "100%",
            overflow: "hidden",
            background: "#eee",
          }}
          src="https://img.icons8.com/material-sharp/24/000000/edit--v1.png"
        /> */}
      </div>
    );
  
}

export function ProfileEmail(props) {
  return (
    <div className={style.profileName}>
      <p style={{ margin: "0 10px" }}>{props.name}</p>
      {/* <img
          style={{
            width: "20px",
            height: "20px",
            padding: "5px",
            borderRadius: "100%",
            overflow: "hidden",
            background: "#eee",
          }}
          src="https://img.icons8.com/material-sharp/24/000000/edit--v1.png"
        /> */}
    </div>
  );
}

export function ProfileIcon(props) {
    return (
      <img className={style.profileIcon} src="https://img.icons8.com/external-flaticons-flat-flat-icons/128/000000/external-user-web-flaticons-flat-flat-icons-2.png" />
    );
}

