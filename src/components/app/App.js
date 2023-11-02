import React, { useState } from 'react' // /**/
import PropTypes from 'prop-types'

import Header from '../header'
import TaskList from '../tasks-list'
import Footer from '../footer'
import './app.css'
import { Filter } from '../../const'

function App({ initialTasks }) {
  const [tasksData, setTasksData] = useState(initialTasks)
  const [filter, setFilter] = useState(Filter.All)

  let minID = 100

  function createTask(label, isCompleted = false, min = 0, sec = 0) {
    return {
      id: minID++,
      label,
      isCompleted: isCompleted,
      created: new Date(),
      min,
      sec,
    }
  }

  function deleteTask(id) {
    setTasksData((tasksData) => {
      const idx = tasksData.findIndex((el) => el.id === id)

      return [...tasksData.slice(0, idx), ...tasksData.slice(idx + 1)]
    })
  }

  function addTask(text) {
    const newTask = createTask(text)

    setTasksData((tasksData) => {
      const newArray = [...tasksData, newTask]

      return {
        tasksData: newArray,
      }
    })
  }

  function toggleTaskStatus(id) {
    setTasksData((tasksData) => {
      return {
        tasksData: toggleProperty(tasksData, id, 'isCompleted'),
      }
    })
  }

  function toggleProperty(arr, id, propName) {
    const taskIndex = arr.findIndex((el) => el.id === id)
    const task = arr[taskIndex]
    const newTask = { ...task, [propName]: !task[propName] }

    return [...arr.slice(0, taskIndex), newTask, ...arr.slice(taskIndex + 1)]
  }

  function changeTaskText(id, newText) {
    const taskIndex = tasksData.findIndex((el) => el.id === id)
    const task = tasksData[taskIndex]
    if (!task) throw new Error()

    setTasksData((prevTasks) => {
      const newTask = { ...task, label: newText }
      return [...prevTasks.slice(0, taskIndex), newTask, ...prevTasks.slice(taskIndex + 1)]
    })
  }

  function changeFilter(filterName) {
    setFilter(filterName)
  }

  function getFilteredTasks() {
    switch (filter) {
      case Filter.All:
        return tasksData
      case Filter.Active:
        return setTasksData.filter((task) => !task.isCompleted)
      case Filter.Completed:
        return setTasksData.filter((task) => task.isCompleted)
      default:
        return tasksData
    }
  }
  function removeCompletedTasks() {
    setTasksData((tasksData) => {
      return tasksData.filter((el) => !el.isCompleted)
    })
  }
  const filteredTasks = getFilteredTasks()

  return (
    <section className="todoapp">
      <Header onTaskAdd={addTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onDeleted={deleteTask}
          onTaskStatusToggle={toggleTaskStatus}
          onTaskStatusChange={changeTaskText}
        />
        <Footer
          tasksData={tasksData}
          onFilterChange={changeFilter}
          filter={filter}
          onClearCompleted={removeCompletedTasks}
        />
      </section>
    </section>
  )
}
App.defaultProps = {
  initialTasks: [],
  filter: Filter.All,
}
App.propTypes = {
  initialTasks: PropTypes.arrayOf(PropTypes.object),
}

export default App
