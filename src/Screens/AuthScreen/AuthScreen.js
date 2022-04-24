

import { useState } from "react";

import { AuthPage, LoginForm, SignUpForm } from "./component";

export function AuthScreen(props) {
  const Tab = {
    FIRST: 1,
    SECOND: 2,
  };
  Object.freeze(Tab);

  const [index, setindex] = useState(1);

  function showTab() {
    switch (index) {
      case Tab.FIRST:
        return (
          <LoginForm>
            <p className="link" onClick={() => setindex(Tab.SECOND)}>
              Signup
            </p>
          </LoginForm>
        );

      case Tab.SECOND:
        return (
          <SignUpForm>
            <p className="link" onClick={() => setindex(Tab.FIRST)}>
              Login
            </p>
          </SignUpForm>
        );

      default:
        return;
    }
  }

  return <AuthPage>{showTab()}</AuthPage>;
}
