import React from "react";
import AuthService from "../../service/auth_service";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

type loginProps = { authService: AuthService };

const Login = ({ authService }: loginProps): JSX.Element => {
  const onLogin = (event: React.MouseEvent): void => {
    authService.login(event.currentTarget.textContent);
  };
  return (
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
