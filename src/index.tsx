import React from "react";
import ReactDOM from "react-dom";

import "./sass/core.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
