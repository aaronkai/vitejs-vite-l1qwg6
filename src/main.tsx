import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CookiesProvider } from "react-cookie";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </HelmetProvider>
  </React.StrictMode>
);
