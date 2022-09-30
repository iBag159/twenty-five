import ShadowPrism from "./ShadowPrism.js"
import ShadowSquare from "./ShadowSquare.js"
import Timer from "./Timer.js"

function Screen() {
  return (
    <div className="shape cuboid-1 cub-1">
      <ShadowPrism button="less-break" />
      <ShadowPrism button="plus-break" />
      <ShadowPrism button="less-seasson" />
      <ShadowPrism button="plus-seasson" />
      <ShadowSquare button="play" />
      <ShadowSquare button="pause" />
      <ShadowSquare button="reset" />
      <div className="face ft">
        <div className="photon-shader"></div>
      </div>
      <div className="face bk">
        <div className="photon-shader"></div>
      </div>
      <div className="face bm">
        <div className="photon-shader">
          <Timer />
        </div>
      </div>
      <div className="face tp">
        <div className="photon-shader"></div>
      </div>
    </div>
  )
}

export default Screen;