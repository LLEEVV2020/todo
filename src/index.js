import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app";

const initialTasks = [
  { id: 0, label: "Completed task3", isCompleted: false },
  { id: 1, label: "Editing task2", isCompleted: false },
  { id: 2, label: "Active task3", isCompleted: true },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App initialTasks={initialTasks} />
  </React.StrictMode>
);
