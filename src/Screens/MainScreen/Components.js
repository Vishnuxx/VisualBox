
import style from './mainscreen.module.css';
import TypeAnimation from 'react-type-animation';
import logo from '../../Assets/visualboxlogo.svg'

export function AuthButton(props) {
    return (
        <div className={props.className} onClick={props.onClick}>{props.children}</div>
    );
} 

export function Title(props) {
  
    return (
      <div style={{ display: "flex", flexFlow: "column" }}>
        <img className={style.logo} src={logo} alt="mainbg" />
        <h1 className={style.title}>VisualBox</h1>
        <TypeAnimation
          className={style.subtitle}
          cursor={false}
          sequence={["Create Stunning Motion Posters on the go"]}
          wrapper="h3"
        />
      </div>
    );
}


export function Page(props ) {
  function swapSections() {
    if(props.swap) {
      return (
        <>
          <section className={style.sectionB}>
            <img src={props.src}  alt="visualboxfeature" />
          </section>
          <section className={style.sectionA}>
            <h3>{props.heading}</h3>
            <p>{props.paragraph}</p>
          </section>
        </>
      );
    } else {
       return (
         <>
           <section className={style.sectionA}>
             <h3>{props.heading}</h3>
             <p>{props.paragraph}</p>
           </section>
           <section className={style.sectionB}>
             <img src={props.src} alt="visualboxfeature" />
           </section>
         </>
       );
    }
   
  }
  return <div className={style.page}>
   {swapSections()}
  </div>
}