import "./styles.css";

import { useState } from "react";

import { LoginForm, SignUpForm } from "./components";

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
            <p className="link" onClick={() => setindex(Tab.SECOND)}>Signup</p>
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

  return (
    <main className="main">
      <section>
        <div className="tabpanel">
          
          
        </div>
        {showTab()}
      </section>
    </main>
  );
}
