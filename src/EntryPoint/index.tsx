import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import "../index.css";

const Root: JSX.Element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(Root, document.getElementById("root"));
