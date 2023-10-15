import React, { Component } from "react";
import "./task.css";
import { formatDistanceToNow } from "date-fns";

class Task extends Component {
  /*constructor() {
    super();

    this.state = {
      done: false,
    };
  }*/

  state = {
    done: false,
  };

  taskStatusChangeHandler = () => {
    console.log(`Название: ${this.props.label}`);
    /*this.setState({
      done: true,
    });*/
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };

  render() {
    // через деструлизацию  достаём свойство.
    // свойство можно передавать любые, строки, буллевые, мыссивы, объекты
    const { id, label, isCompleted } = this.props;
    let classLi = isCompleted ? "completed" : "";
    const { done } = this.state;
    if (done) {
      classLi = "completed";
    }

    return (
      <li className={classLi}>
        <div className="view">
          <input
            id={`toggle-${id}`}
            onChange={this.taskStatusChangeHandler}
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
