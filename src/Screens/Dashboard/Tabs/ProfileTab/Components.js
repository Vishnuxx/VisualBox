import { useRecoilValue } from 'recoil';
import { authState } from '../../../../State/AuthState';
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
      {/* <h5 style={{ margin: "3px" }}></h5> */}
    </div>
  );
}


export function ProfileNameAndIcon(props) {
    return (
      <div className={style.profileName}>
        <img
          className={style.profileIcon}
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/128/000000/external-user-web-flaticons-flat-flat-icons-2.png"
          alt='profileIcon'
        />
        <div style={{ display: "flex", flexFlow: "column" }}>
          <h1 style={{ margin: "0", fontSize: "1.4rem" }}>{props.name}</h1>
          <p
            style={{
              margin: "0px",
              padding: "0px",
              color: "grey",
              fontSize: "1rem",
              textAlign:"start"
            }}
          >
            {props.email}
          </p>
        </div>
      </div>
    );
  
}

export function SubHeadings(props) {
  return <h3 className={style.subheading}>{props.children}</h3>
}

export function Option(props) {

  return (
    <div className={style.option} onClick={props.onClick}>
      <p className={style.optionHead}>{props.head}</p>
      <p className={style.optionPara}>{props.para}</p>
    </div>
  );
}


export function LogoutButton(props) {
  const auth = useRecoilValue(authState)
  const logout = () => {
    auth.logout((response)=>{
      
    },(error)=>{})
  }
  return <button onClick={logout} className={style.logoutbutton}>Logout</button>
}