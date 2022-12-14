import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";

const authService = new AuthService();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
