import { Component } from 'react'
import './new-task-form.css'

class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      // таким способом можно длбавить стили
      searchStyle: {
        fontSize: '25px',
      },
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
        style={this.state.searchStyle}
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
