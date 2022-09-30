function CuboidButton({name, active, ...props}) {
  return (
    <div className={`shape cuboid ${name}${active ? " active": ""}`}>
      <div className="face ft">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
      <div className="face bk">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
      <div className="face rt">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
      <div className="face lt">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
      <div className="face bm">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
      <div className="face tp">
        <div className="photon-shader" style={{backgroundColor: "rgba(0, 0, 0, 0.15)"}}></div>
      </div>
    </div>
  )
}

export default CuboidButton;