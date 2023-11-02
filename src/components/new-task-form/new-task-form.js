import { Component, useState } from 'react'
import './new-task-form.css'

function NewTaskForm2({ onTaskAdd }) {
  const [task, setTask] = useState('')
  setTask(1)
  console.log(task)
  console.log(onTaskAdd)
}
console.log(NewTaskForm2)

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  changeValue(newValue) {
    this.setState({ value: newValue })
  }

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.value}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (this.state.value.trim() !== '') {
              this.props.onTaskAdd(this.state.value.trim())
              this.changeValue('')
            }
          }
        }}
        onChange={(e) => this.changeValue(e.target.value)}
      />
    )
  }
}

export default NewTaskForm
