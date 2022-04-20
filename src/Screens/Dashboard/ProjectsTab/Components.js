import './styles.css';

export function TopBar(props) {
    return (
        <menu className='menu'>
            {props.children}
        </menu>
    );
}

export function Body(props) {
    return (
        <div className='page-body'></div>
    );
}

export function CreateButton(props) {
    return <button className='createButton'>Create</button>
}

export function projectItem(props) {
    return (
        <div className="project-item">
        </div>
    );
}