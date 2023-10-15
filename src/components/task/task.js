import React, { Component } from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

class Task extends Component {
  taskStatusChangeHandler() {
    console.log(`Название: ${this.props.label}`);
  }

  render() {
    // через деструлизацию  достаём свойство.
    // свойство можно передавать любые, строки, буллевые, мыссивы, объекты
    const { id, label, isCompleted } = this.props;

    const classLi = isCompleted ? "completed" : "";

    return (
      <li className={classLi}>
        <div className="view">
          <input
            id={`toggle-${id}`}
            onChange={this.taskStatusChangeHandler.bind(this)}
            className="toggle"
            type="checkbox"
          />
          <label htmlFor={`toggle-${id}`}>
            <span className="description">{label}</span>
            <span className="created">
              created 17 seconds ago //{" "}
              {formatDistanceToNow(new Date(2014, 6, 2))}
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}

export default Task;
