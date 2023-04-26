import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppTheme } from "./theme/AppTheme";
import "./index.css";
import "./Translations/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <App />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);
