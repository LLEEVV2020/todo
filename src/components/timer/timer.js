import moment from 'moment'
import { useState } from 'react'
import './timer.css'

function Timer({ initialTime }) {
  const [timerId, setTimerId] = useState(null)
  const [totalTime, setTotalTime] = useState(initialTime)
  const [isPause, setPause] = useState(false)

  function playButtonClickHandler() {
    if (timerId && !isPause) return
    const id = setInterval(() => {
      setTotalTime((prevValue) => {
        return prevValue + 1000
      })
    }, 1000)

    setTimerId(id)
  }

  function pauseButtonClickHandler() {
    clearInterval(timerId)
    setPause(false)
  }

  const formattedTime =
    moment.duration(totalTime).asHours() >= 1
      ? moment.utc(totalTime).format('HH:mm:ss')
      : moment.utc(totalTime).format('mm:ss')

  return (
    <span className="description">
      <button className="icon icon-play" onClick={playButtonClickHandler}></button>
      <button className="icon icon-pause" onClick={pauseButtonClickHandler}></button>
      {formattedTime}
    </span>
  )
}

export default Timer
