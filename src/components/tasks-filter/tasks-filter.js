import "./tasks-filter.css";
import React, { Component } from "react";
import { Filter } from "../../const";

class TasksFilter extends Component {
  constructor(props) {
    super(props);
  }

  filterChangeHandler = (evt) => {
    const filterName = evt.currentTarget.dataset.filter;
    if (filterName === this.props.filter) {
      //console.log("dddddd", evt.currentTarget.dataset.filter);
      return;
    }
    //console.log("hhhhhh", evt.currentTarget.dataset.filter);
    this.setState(() => ({ filter: filterName }));
    this.props.onFilterChange(filterName);
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button
            className={this.props.filter === Filter.All ? "selected" : ""}
            data-filter={Filter.All}
            onClick={this.filterChangeHandler}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Active ? "selected" : ""}
            data-filter={Filter.Active}
            onClick={this.filterChangeHandler}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Completed ? "selected" : ""}
            data-filter={Filter.Completed}
            onClick={this.filterChangeHandler}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TasksFilter;
