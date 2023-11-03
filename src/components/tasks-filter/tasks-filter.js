import './tasks-filter.css'
import React, { useState } from 'react'

import { Filter } from '../../const'

function TasksFilter({ onFilterChange, filter }) {
  const [currentFilter, setFilter] = useState(filter)

  function filterChangeHandler(e) {
    const filterName = e.currentTarget.dataset.filter
    if (filterName === currentFilter) {
      return
    }

    setFilter(filterName)
    onFilterChange(filterName)
  }

  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === Filter.All ? 'selected' : ''}
          data-filter={Filter.All}
          onClick={filterChangeHandler}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === Filter.Active ? 'selected' : ''}
          data-filter={Filter.Active}
          onClick={filterChangeHandler}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === Filter.Completed ? 'selected' : ''}
          data-filter={Filter.Completed}
          onClick={filterChangeHandler}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

export default TasksFilter
