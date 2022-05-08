import { AuthButton, Title } from "./Components";

export function MainScreen(props) {
  return (
    <main className="MainScreen">
      <Title></Title>
      <div className="content">
        <AuthButton className="btn login">Login</AuthButton>
        <AuthButton className="btn signup">Signup</AuthButton>

        <a
          href="https://appwrite.io/"
          target="_blank"
          style={{position: "fixed" , right: "18px" , bottom: "18px" , zIndex: "999"}}
        >
          <img
            style={{width: '130px'}}
            src="https://appwrite.io/images-ee/press/badge-white-box.svg"
            alt="Built with Appwrite"
          ></img>
        </a>
      </div>
    </main>
  );
}
