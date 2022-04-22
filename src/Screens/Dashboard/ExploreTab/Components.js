import './styles-explore.css';

export function MenuBar(props) {
  return <menu className="menu-explore">{props.children}</menu>;
}

export function SearchBar(props) {
  return <div className="search-bar">
        <input type="text"/>
        <img src="../../../../public/search.png" alt="search" />
      </div>;
}

export function Post(props) {
  return <menu className="menu">{props.children}</menu>;
}