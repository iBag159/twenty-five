function PrismButton ({name, active=false, ...props}) {
  return (
    <div className={`shape prism ${name}${active ? " active": ""}`}>
      <div className="face ft">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.008)"}}></div>
      </div>
      <div className="face bk">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
      <div className="face-wrapper rt">
        <div className="face">
          <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
        </div>
      </div>
      <div className="face-wrapper lt">
        <div className="face">
          <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
        </div>
      </div>
      <div className="face bm">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
    </div>
  )
}

export default PrismButton;