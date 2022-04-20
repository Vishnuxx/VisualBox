import './styles.css';

export function NavigationMenu(props) {
    return <nav>
     {props.children}
    </nav>
}

export function NavItem(props) {
    return (
      <section className={`navItem ${props.state}`} onClick={props.onClick}>
        <p className="label">{props.children}</p>
      </section>
    );
}

export function Panel(props) {
    return (
        <section className='panel' >
            {props.children}
        </section>
    );
}

export function MenuBar(props) {
    return <menu className="menubar">{props.children}</menu>;
}