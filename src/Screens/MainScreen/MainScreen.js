import { AuthButton, Page, Title } from "./Components";
import style from './mainscreen.module.css'
import { useNavigate } from "react-router-dom";
import background from '../../Assets/backgroundanim.gif'

export function MainScreen(props) {
  const navigate = useNavigate()
  const gotoAuthPage = () => {
    navigate("/auth")
  }
  return (
    <main className={style.main}>
      <section className={`${style.MainScreen}`}>
        <Title></Title>
        <img
          className={style.background}
          src={background}
          alt="background animation"
        />
        <div className={`${style.content}`}>
          <AuthButton
            className={`${style.btn} ${style.login}`}
            onClick={gotoAuthPage}
          >
            Get Started
          </AuthButton>
          <a
            className={`${style.btn} ${style.signup}`}
            href="https://github.com/Vishnuxx/VisualBox"
          >
            Read More
          </a>

          <a
            href="https://appwrite.io/"
            target=""
            style={
              {
                // position: "fixed",
                // right: "18px",
                // bottom: "18px",
              }
            }
          >
            <img
              style={{ width: "130px" }}
              src="https://appwrite.io/images-ee/press/badge-white-box.svg"
              alt="Built with Appwrite"
            ></img>
          </a>
        </div>
      </section>
      {/* <Page heading="title1" paragraph="desc1" swap={true} />
      <Page heading="title1" paragraph="desc1" swap={false} />
      <Page heading="title1" paragraph="desc1"swap={true} /> */}
      {/* <Page heading="title1" paragraph="desc1" swap={false} /> */}
    </main>
  );
}
