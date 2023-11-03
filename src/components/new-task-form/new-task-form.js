import { useState } from 'react'
import './new-task-form.css'

function NewTaskForm({ onTaskAdd }) {
  const [value, setValue] = useState('')

  function changeValue(newValue) {
    setValue(newValue)
  }
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={value}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          if (value.trim() !== '') {
            onTaskAdd(value.trim())
            changeValue('')
          }
        }
      }}
      onChange={(e) => changeValue(e.target.value)}
    />
  )
}

export default NewTaskForm
