import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./view/Router/App.Router";

import "./view/assets/styles/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRouter />
);
