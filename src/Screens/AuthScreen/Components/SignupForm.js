
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../../State/AuthState";
import style from "../AuthStyle.module.css";


export function SignUpForm(props) {
  const auth = useRecoilValue(authState);


  const navigate = useNavigate();



  const handlelogin = (email , password) => {
      auth.login(
        email,
        password,
        (response) => {
          navigate("/dashboard");
          console.log("login success");
        },
        (error) => {
          alert("login" + error);
          auth.setAuthenticated(false);
        }
      );
  }


  //handles signup
  const handleSignup = (e) => {
    e.preventDefault();
    var name = e.target.elements["username"].value;
    var email = e.target.elements["email"].value;
    var password = e.target.elements["password"].value;
    var repassword = e.target.elements["confirmPass"].value;
    if (password !== repassword) {
      alert("Passwords doesnt match")
    } else {
      auth.signup(
        name,
        email,
        password,
        (response) => {
          console.log("success");
          handlelogin(email , password);
        },
        (error) => {
          alert("signup" + JSON.stringify(error));
          console.log()
        }
      );
    }
  };



  return (
    <form
      id="signupform"
      className={props.className}
      method="POST"
      onSubmit={(e) => handleSignup(e)}
    >
      <div className={style.title}>
        <h3>SignUp</h3>
      </div>

      <div className={style.inputHolder}>
        <input
          className={style.input}
          type="text"
          placeholder="Enter Username"
          name="username"
          required={true}
        ></input>
      </div>

      <div className={style.inputHolder}>
        <input
          className={style.input}
          type="email"
          placeholder="Enter Email"
          name="email"
          required={true}
        ></input>
      </div>

      <div className={style.inputHolder}>
        <input
          className={style.input}
          type="password"
          placeholder="Enter Password"
          name="password"
          required={true}
        ></input>
      </div>

      <div className={style.inputHolder}>
        <input
          className={style.input}
          type="password"
          placeholder="Confirm Password"
          name="confirmPass"
          required={true}
        ></input>
      </div>

      <input
        className={style.submit}
        type="submit"
        form="signupform"
        value="SignUP"
      ></input>

      {props.children}
    </form>
  );
}
