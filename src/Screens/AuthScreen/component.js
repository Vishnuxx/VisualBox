import style from "./AuthStyle.module.css";
import backgroundGif from "../../Assets/animbackgroundImage.gif";
import { AppLogo } from "../../Components/AppLogo/AppLogo";

export function AuthPage(props) {
  return (
    <main className={style.main}>
      <img
        src={backgroundGif}
        className={style.background}
        alt="visualboxbackground"
      />
      <section className={style.section}>
        <AppLogo width="100px" height="100px" />
        <h2>VisualBox</h2>

        {props.children}
      </section>
    </main>
  );
}




