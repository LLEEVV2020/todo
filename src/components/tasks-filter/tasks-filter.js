import './tasks-filter.css';
import React, { Component } from 'react';
import { Filter } from '../../const';

class TasksFilter extends Component {
  filterChangeHandler = (e) => {
    const filterName = e.currentTarget.dataset.filter;
    if (filterName === this.props.filter) {
      return;
    }

    this.setState(() => ({ filter: filterName }));
    this.props.onFilterChange(filterName);
  };

  render() {
    return (
      <ul className="filters">
        <li>
          <button
            className={this.props.filter === Filter.All ? 'selected' : ''}
            data-filter={Filter.All}
            onClick={this.filterChangeHandler}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Active ? 'selected' : ''}
            data-filter={Filter.Active}
            onClick={this.filterChangeHandler}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={this.props.filter === Filter.Completed ? 'selected' : ''}
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
