import React, { Component } from "react";

import Header from "../header";
import TaskList from "../tasks-list";
import Footer from "../footer";
import "./app.css";

const Main = () => {
  return <section className="test"></section>;
};

class App extends Component {
  state = {
    todoData: [
      { id: 0, label: "Completed task3", isCompleted: false },
      { id: 1, label: "Editing task2", isCompleted: false },
      { id: 2, label: "Active task3", isCompleted: true },
    ],
  };
  minID = 100;

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      console.log(idx, "ttt");

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addTask = (text) => {
    console.log("Added", text, this.minID++);

    const newTask = {
      id: this.minID++,
      isCompleted: false,
      label: text,
    };

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newTask];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header onTaskAdd={this.addTask} />
        <section className="main">
          <TaskList todos={this.state.todoData} onDeleted={this.deleteTask} />
          <Footer />
        </section>

        <Main items={["test1", "tesr2"]} />
      </section>
    );
  }
}

export default App;
