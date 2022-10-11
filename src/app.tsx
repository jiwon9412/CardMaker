import React from "react";
import Login from "./components/login/login";
import AuthService from "./service/auth_service";

function App(props: { authService: AuthService }): JSX.Element {
  return (
    <>
      <Login authService={props.authService} />
    </>
  );
}

export default App;
