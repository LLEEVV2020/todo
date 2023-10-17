import "./tasks-filter.css";
import React, { Component } from "react";
import { Filter } from "../../const";

class TasksFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button
            className={this.props.filter === Filter.All ? "selected" : ""}
            data-filter={Filter.All}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Active ? "selected" : ""}
            data-filter={Filter.Active}
          >
            Active{" "}
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Completed ? "selected" : ""}
            data-filter={Filter.Completed}
          >
            Completed{" "}
          </button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
