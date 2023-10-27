import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import TaskList from '../tasks-list'
import Footer from '../footer'
import './app.css'
import { Filter } from '../../const'

class App extends Component {
  minID = 100
  constructor(props) {
    super(props)

    this.state = {
      tasksData: this.props.initialTasks,
      filter: this.props.filter,
    }
  }

  createTask(label, isCompleted = false, min = 0, sec = 0) {
    return {
      id: this.minID++,
      label,
      isCompleted: isCompleted,
      created: new Date(),
      min,
      sec,
    }
  }

  deleteTask = (id) => {
    this.setState(({ tasksData }) => {
      const idx = tasksData.findIndex((el) => el.id === id)

      const newArray = [...tasksData.slice(0, idx), ...tasksData.slice(idx + 1)]

      return {
        tasksData: newArray,
      }
    })
  }

  addTask = (text) => {
    const newTask = this.createTask(text)

    this.setState(({ tasksData }) => {
      const newArray = [...tasksData, newTask]

      return {
        tasksData: newArray,
      }
    })
  }

  toggleTaskStatus = (id) => {
    this.setState(({ tasksData }) => {
      return {
        tasksData: this.toggleProperty(tasksData, id, 'isCompleted'),
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const taskIndex = arr.findIndex((el) => el.id === id)
    const task = arr[taskIndex]
    const newTask = { ...task, [propName]: !task[propName] }

    return [...arr.slice(0, taskIndex), newTask, ...arr.slice(taskIndex + 1)]
  }

  changeTaskText = (id, newText) => {
    const taskIndex = this.state.tasksData.findIndex((el) => el.id === id)
    const task = this.state.tasksData[taskIndex]
    if (!task) throw new Error()

    this.setState(({ tasksData }) => {
      const newTask = { ...task, label: newText }
      return {
        tasksData: [...tasksData.slice(0, taskIndex), newTask, ...tasksData.slice(taskIndex + 1)],
      }
    })
  }

  changeFilter = (filterName) => {
    this.setState(() => ({ filter: filterName }))
  }

  getFilteredTasks() {
    switch (this.state.filter) {
      case Filter.All:
        return this.state.tasksData
      case Filter.Active:
        return this.state.tasksData.filter((task) => !task.isCompleted)
      case Filter.Completed:
        return this.state.tasksData.filter((task) => task.isCompleted)
      default:
        return this.state.tasksData
    }
  }
  removeCompletedTasks = () => {
    this.setState(({ tasksData }) => {
      return {
        tasksData: tasksData.filter((el) => !el.isCompleted),
      }
    })
  }

  render() {
    const filteredTasks = this.getFilteredTasks()

    return (
      <section className="todoapp">
        <Header onTaskAdd={this.addTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            onDeleted={this.deleteTask}
            onTaskStatusToggle={this.toggleTaskStatus}
            onTaskStatusChange={this.changeTaskText}
          />
          <Footer
            tasksData={this.state.tasksData}
            onFilterChange={this.changeFilter}
            filter={this.state.filter}
            onClearCompleted={this.removeCompletedTasks}
          />
        </section>
      </section>
    )
  }
}

App.defaultProps = {
  initialTasks: [],
  filter: Filter.All,
}
App.propTypes = {
  initialTasks: PropTypes.arrayOf(PropTypes.object),
}

export default App
