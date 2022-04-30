import styles from './dashboard.module.css'

export function DashboardPage(props) {
  return <main className={styles.main}>
  {props.children}
  </main>
}
export function NavigationMenu(props) {
    return <nav>
     {props.children}
    </nav>
}

export function NavItem(props) {
    return (
      <section
        className={`${styles.navItem} ${
          props.state === "active" ? styles.active : ""
        } ${styles.noSelect} `}
        onClick={props.onClick}
      >
        <p className={styles.label}>{props.children}</p>
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
        <h2>VisualBox</h2>
        {props.children}
      </menu>
    );
}