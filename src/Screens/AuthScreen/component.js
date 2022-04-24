import style from "./AuthStyle.module.css";

export function AuthPage(props) {
  return (
    <main className={style.main}>
      <section>
        <div className="tabpanel"></div>
        {props.children}
      </section>
    </main>
  );
}

export function LoginForm(props) {
  return (
    <form action="POST">
      <div className={style.title}>
        <h2>Login</h2>
      </div>

      <input
        className={style.input}
        type="email"
        placeholder="Enter Email"
        name="fname"
      ></input>

      <input
        className={style.input}
        type="password"
        placeholder="Enter Password"
        name="lname"
      ></input>
      <input className={style.submit} type="submit" value="Login"></input>
      {props.children}
    </form>
  );
}

export function SignUpForm(props) {
  return (
    <form action="POST" className={props.className}>
      <div className={style.title}>
        <h2>SignUp</h2>
      </div>

      <input
        className={style.input}
        type="text"
        placeholder="Enter Username"
        name="fname"
      ></input>

      <input
        className={style.input}
        type="email"
        placeholder="Enter Email"
        name="lname"
      ></input>

      <input
        className={style.input}
        type="password"
        placeholder="Enter Password"
        name="lname"
      ></input>

      <input
        className={style.input}
        type="password"
        placeholder="Confirm Password"
        name="lname"
      ></input>
      <input className={style.submit} type="submit" value="SignUP"></input>

      {props.children}
    </form>
  );
}

export function TextFormField(props) {
  return (
    <div className={style.formfield}>
      <label className={style.label} for={props.for}>
        {props.title}
      </label>
      <input
        placeholder={props.placeholder}
        className={style.input}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
      ></input>
    </div>
  );
}
