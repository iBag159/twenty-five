function ShadowSquare({button, ...props}) {
  return (
    <div className={`shadow-square ${button}`}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 50 50" xmlSpace="preserve">
        <rect width="50" height="50"/>
      </svg>
    </div>
  )
}

export default ShadowSquare;