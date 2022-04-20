import './styles.css';

export function AuthButton(props) {
    return (
        <div className={props.className}>{props.children}</div>
    );
} 

export function Title(props) {
    return (
      <div>
        <h1 className="title">VisualBox</h1>
        <h3 className="subtitle">Create Stunning Motion Posters</h3>
      </div>
    );
}