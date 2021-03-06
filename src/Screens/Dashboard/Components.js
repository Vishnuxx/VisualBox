import { AppLogo } from '../../Components/AppLogo/AppLogo';
import styles from './dashboard.module.css'

export function DashboardPage(props) {
  return <main className={styles.main}>
  {props.children}
  </main>
}


export function NavigationMenu(props) {
    return <nav className={styles.nav}>
     {props.children}
    </nav>
}

export function NavItem(props) {
    return (
      <section
        className={`${styles.navItem} ${
          props.state === "active" ? styles.active : ""
        } ${styles.noSelect} `}
        onClick={(e)=>{
          e.preventDefault();
          props.onClick()
          
        }}
      >
        <img className={styles.icon} src={props.icon} alt=""></img>
        <p className={styles.label}>{props.label}</p>
      </section>
    );
}

export function Panel(props) {
    return (
        <section className={styles.panel} >
            {props.children}
        </section>
    );
}

export function MenuBar(props) {
    return (
      <menu className={styles.menubar}>
        <div style={{width:"fit-content" , height:"fit-content",textAlign:"center"  , display:"flex" , alignItems:"center" , position:"absolute" , left:"0"}}>
          <AppLogo width="30px" height="30px"></AppLogo>
          <h4 style={{margin:"2px"}}>VisualBox</h4>
        </div>

        {props.children}
      </menu>
    );
}

export function SearchBar(props) {
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search here"
        className={styles.searchInput}
      />
      <img
        src="https://img.icons8.com/plumpy/24/000000/search--v1.png"
        alt="search"
        className={styles.searchIcon}
      />
    </div>
  );
}