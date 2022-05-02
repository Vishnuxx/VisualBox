

import { useState } from "react";

import { AuthPage, LoginForm, SignUpForm } from "./component";
import style from "./AuthStyle.module.css";
export function AuthScreen(props) {
  const Tab = {
    LOGIN: 1,
    SIGNUP: 2,
  };
  Object.freeze(Tab);

  const [index, setindex] = useState(1);

  function showTab() {
    switch (index) {
      case Tab.LOGIN:
        return (
          <LoginForm>
            <p className={style.link} onClick={() => setindex(Tab.SIGNUP)}>
              Signup
            </p>
          </LoginForm>
        );

      case Tab.SIGNUP:
        return (
          <SignUpForm>
            <p className={style.link} onClick={() => setindex(Tab.LOGIN)}>
              Login
            </p>
          </SignUpForm>
        );

      default:
        return;
    }
  }

  return (
    <AuthPage>
     
      {showTab()}
    </AuthPage>
  );
}
