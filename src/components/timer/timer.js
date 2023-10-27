import moment from 'moment'
import { Component } from 'react'
import './timer.css'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialTime: this.props.initialTime,
      timerId: null,
      isPause: false,
    }
  }

  playButtonClickHandler = () => {
    const id = setInterval(() => {
      this.setState((prevState) => ({
        initialTime: prevState.initialTime + 1000,
      }))
      //console.log(this.state.initialTime)
    }, 1000)

    this.setState({ timerId: id })
  }

  pauseButtonClickHandler = () => {
    clearInterval(this.state.timerId)
  }

  render() {
    const { initialTime } = this.state

    let formattedTime =
      moment.duration(initialTime).asHours() >= 1
        ? moment.utc(initialTime).format('HH:mm:ss')
        : moment.utc(initialTime).format('mm:ss')

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.playButtonClickHandler}></button>
        <button className="icon icon-pause" onClick={this.pauseButtonClickHandler}></button>
        {formattedTime}
      </span>
    )
  }
}

export default Timer
