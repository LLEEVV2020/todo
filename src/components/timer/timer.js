import moment from 'moment'

function Timer({ initialTime }) {
  function playButtonClickHandler() {}

  function pauseButtonClickHandler() {}
  const formattedTime = initialTime

  if (initialTime === 'jhh') {
    console.log(moment)
  }

  /*moment.duration(totalTime).asHours() >= 1
      ? moment.utc(totalTime).format('HH:mm:ss')
      : moment.utc(totalTime).format('mm:ss');*/

  //debugger
  return (
    <span className="description">
      <button className="icon icon-play" onClick={playButtonClickHandler}></button>
      <button className="icon icon-pause" onClick={pauseButtonClickHandler}></button>
      {formattedTime}
    </span>
  )
}

export default Timer
