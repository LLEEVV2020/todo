import React, { useState } from 'react'
import './task.css'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../timer'

function Task(props) {
  const [label, setLabel] = useState(props.task.label)
  const [isEditing, setIsEditing] = useState(false)

  function editButtonClickHandler() {
    document.addEventListener('keydown', escPressHandler)
    setIsEditing(true)
  }

  function escPressHandler(e) {
    if (e.key === 'Escape') {
      setIsEditing(false)
      document.removeEventListener('keydown', escPressHandler)
    }
  }

  function inputEnterPressHandler(e) {
    const input = e.currentTarget
    if (e.key === 'Enter') {
      if (input.value.trim() !== '') {
        props.onTextChange(props.task.id, input.value.trim())
        setIsEditing(false)
      }
    }
  }
  function taskTextChangeHandler(e) {
    const input = e.currentTarget
    setLabel(input.value)
  }

  const { task, onDeleted, onTaskStatusToggle } = props

  const { id, isCompleted, created, min, sec } = task

  let classCompleted = isCompleted ? 'completed' : ''
  let classisEditing = isEditing ? 'editing' : ''

  let inputHandler = isEditing ? (
    <input
      type="text"
      className="edit"
      onKeyDown={inputEnterPressHandler}
      value={label}
      onChange={taskTextChangeHandler}
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
        <button className="icon icon-edit position" onClick={editButtonClickHandler}></button>
        <button className="icon icon-destroy position" onClick={onDeleted}></button>
      </div>
      {inputHandler}
    </li>
  )
}

export default Task
