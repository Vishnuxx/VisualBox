import { useEffect } from "react";

import { AuthPage } from "./component";
import style from "./AuthStyle.module.css";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { LoginForm } from "./Components/LoginForm";
import { SignUpForm } from "./Components/SignupForm";
import { useRecoilValue } from "recoil";
import { authState } from "../../State/AuthState";
import { VerifyMail } from "./Components/VerifyMailForm";

export function AuthScreen(props) {

  const auth = useRecoilValue(authState);
  const navigate = useNavigate();
  const { locationstate } = useLocation();

  useEffect(()=>{

    try{
    if(auth.checkLogin()){
      navigate(locationstate || '/dashboard');
    }else{

    }
  
  }catch(e) {
    
    console.log(e)
  }
  })

  return (
    <AuthPage>
      <Routes>
        <Route
          path="*"
          element={
            <LoginForm auth={props.auth}>
              <p className={style.link} onClick={() => navigate("signup")}>
                Signup
              </p>
            </LoginForm>
          }
        ></Route>
        <Route
          path="login"
          element={
            <LoginForm auth={props.auth}>
              <p className={style.link} onClick={() => navigate("signup")}>
                Signup
              </p>
            </LoginForm>
          }
        ></Route>

        <Route
          path="signup"
          element={
            <SignUpForm auth={props.auth}>
              <p className={style.link} onClick={() => navigate("login")}>
                Login
              </p>
            </SignUpForm>
          }
        ></Route>

        <Route
          path="verify"
          element={
            <VerifyMail auth={props.auth}>
              <p className={style.link} onClick={() => navigate("login")}>
                Back to Login
              </p>
            </VerifyMail>
          }
        ></Route>
      </Routes>
    </AuthPage>
  );
}
