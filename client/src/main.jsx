import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="https://dev-sedwqtnvpgco728b.us.auth0.com"
     clientId="bwSxtwvZpJQR9wTZT3UHcuySkxXyyuda"
     authorizationParams={{
      redirect_uri: "https://realstatenow-two.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
