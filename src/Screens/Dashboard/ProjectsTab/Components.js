import './styles-projects.css';

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

export function ProjectItem(props) {
    return (
        <div className="project-item">
        </div>
    );
}

export function ContentPanel(props) {
  return <div className="content-panel">{props.children}</div>;
}