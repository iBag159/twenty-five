function Timer({ breakTime="05:00", seassonTime="25:00", currentTime="25:00", ...props}) {
  return(
    <div className="timer">
      <div className="timer__small">
        <span className="timer__small-label">BREAK</span>
        <time className="timer__small-value">
          {breakTime}
        </time>
      </div>
      <div className="timer__current">
        <span className="timer__current-label">SEASSON</span>
        <time className="timer__current-value">
          {currentTime}
        </time>
        <span className="timer__current-label">WORKING HARD</span>
      </div>
      <div className="timer__small">
        <span className="timer__small-label">SEASSON</span>
        <time className="timer__small-value">
          {currentTime}
        </time>
      </div>
    </div>
  )
}

export default Timer;