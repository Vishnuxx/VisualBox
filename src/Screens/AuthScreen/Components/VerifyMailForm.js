import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../../State/AuthState";
import style from "../AuthStyle.module.css";

export function VerifyMail(props) {
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    auth.login(
      e.target.elements["email"].value,
      e.target.elements["password"].value,
      (response) => {
        navigate("/");
      },
      (error) => {
        alert(error.message);
        auth.setAuthenticated(false);
        console.log("failed");
      }
    );
  };


  return (
    <form id="loginform" method="POST" onSubmit={(e) => handlelogin(e)}>
      <div className={style.title}>
        <h3>VerifyMail</h3>
      </div>

      {/* <div className={style.inputHolder}>
        <input
          className={style.input}
          type="email"
          placeholder="Enter Email"
          name="email"
          required={true}
        ></input>
      </div> */}
      <div className={style.inputHolder}>
        <input
          className={style.input}
          type="text"
          placeholder="enter verification code"
          name="password"
          required={true}
        ></input>
      </div>
      <input
        name="loginButton"
        className={style.submit}
        type="submit"
        form="loginform"
        value="Verify"
      ></input>
      {props.children}
    </form>
  );
}
