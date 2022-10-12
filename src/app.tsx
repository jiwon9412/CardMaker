import React from "react";
import Login from "./components/login/login";
import AuthService from "./service/auth_service";

type AppProps = { authService: AuthService };

function App({ authService }: AppProps): JSX.Element {
  return (
    <>
      <Login authService={authService} />
    </>
  );
}

export default App;
