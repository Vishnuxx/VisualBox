import "./styles.css";

export function LoginForm(props) {
  return (
    <form action="POST">
      <div className="title">
        <h2>Login</h2>
      </div>

      
      <input
        className="input"
        type="email"
        placeholder="Enter Email"
        name="fname"
      ></input>
     
      <input
        className="input"
        type="password"
        placeholder="Enter Password"
        name="lname"
      ></input>
      <input className="submit" type="submit" value="Login"></input>
      {props.children}
    </form>
  );
}

export function SignUpForm(props) {
  return (
    <form action="POST" className={props.className}>
      <div className="title">
        <h2>SignUp</h2>
      </div>
     
      <input
        className="input"
        type="text"
        placeholder="Enter Username"
        name="fname"
      ></input>
      
      <input
        className="input"
        type="email"
        placeholder="Enter Email"
        name="lname"
      ></input>
      
      <input
        className="input"
        type="password"
        placeholder="Enter Password"
        name="lname"
      ></input>
      
      <input
        className="input"
        type="password"
        placeholder="Confirm Password"
        name="lname"
      ></input>
      <input className="submit" type="submit" value="SignUP"></input>

      {props.children}
    </form>
  );
}

export function TextFormField(props) {
  return (
    <div className="formfield">
      <label className="label" for={props.for}>
        {props.title}
      </label>
      <input
        placeholder={props.placeholder}
        className="input"
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
      ></input>
    </div>
  );
}
