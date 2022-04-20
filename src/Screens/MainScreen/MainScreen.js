import { AuthButton , Title } from "./Components";

export function MainScreen(props) {
    return (
      <main className="MainScreen">
        <Title></Title>
        <div className="content">
          <AuthButton className="btn login">Login</AuthButton>
          <AuthButton className="btn signup">Signup</AuthButton>
         
        </div>
      </main>
    );
}