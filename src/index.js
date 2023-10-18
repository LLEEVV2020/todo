import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app";
import { Filter } from "./const";
// https://platform.kata.academy/user/courses/3/1/3/7

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
