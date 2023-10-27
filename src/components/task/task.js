import React, { Component } from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../timer'
class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      label: this.props.task.label,
    }
  }

  /**при нажатии на кнопку редактировать, навешивается класс "editing"*/
  editButtonClickHandler = () => {
    document.addEventListener('keydown', this.escPressHandler)
    this.setState(() => ({ isEditing: true }))
  }
  escPressHandler = (e) => {
    if (e.key === 'Escape') {
      this.setState(() => ({ isEditing: false }))
      document.removeEventListener('keydown', this.escPressHandler)
    }
  }

  inputEnterPressHandler = (e) => {
    const input = e.currentTarget
    if (e.key === 'Enter') {
      if (input.value.trim() !== '') {
        this.props.onTextChange(this.props.task.id, input.value.trim())
        this.setState(() => ({ isEditing: false }))
      }
    }
  }
  taskTextChangeHandler = (e) => {
    const input = e.currentTarget
    this.setState(() => ({ label: input.value }))
  }

  render() {
    // через деструлизацию  достаём свойство.
    // свойство можно передавать любые, строки, буллевые, мыссивы, объекты
    const { task, onDeleted, onTaskStatusToggle } = this.props

    const { id, label, isCompleted, created, min, sec } = task

    let classCompleted = isCompleted ? 'completed' : ''
    let classisEditing = this.state.isEditing ? 'editing' : ''

    let inputHandler = this.state.isEditing ? (
      <input
        type="text"
        className="edit"
        onKeyDown={this.inputEnterPressHandler}
        value={this.state.label}
        onChange={this.taskTextChangeHandler}
      />
    ) : null

    const time = min * 60 * 1000 + sec * 1000

    return (
      <li className={`${classCompleted} ${classisEditing}`}>
        <div className="view">
          <input
            id={`toggle-${id}`}
            onChange={onTaskStatusToggle}
            className="toggle"
            type="checkbox"
            defaultChecked={isCompleted}
          />
          <label htmlFor={`toggle-${id}`}>
            <span className="title">{label}</span>
            <Timer initialTime={time} />
            <span className="created">created {formatDistanceToNow(created)} ago</span>
          </label>
          <button className="icon icon-edit position" onClick={this.editButtonClickHandler}></button>
          <button className="icon icon-destroy position" onClick={onDeleted}></button>
        </div>
        {inputHandler}
      </li>
    )
  }
}

export default Task
