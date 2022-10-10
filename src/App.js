import './App.scss';
import LeftCylinder from "./components/LeftCylinder.js";
import RightCylinder from "./components/RightCylinder.js";
import PrismButton from "./components/PrismButton.js";
import Screen from "./components/Screen.js";
import CuboidButton from './components/CuboidButton';

function App() {
  return (
    <div id="clock">
      <div className="scene" style={{ transform: "rotateX(55deg) rotateY(0) rotateZ(25deg)" }}>
        <LeftCylinder />
        <Screen />
        <RightCylinder />
        <PrismButton name="less-break"/>
        <PrismButton name="plus-break" />
        <PrismButton name="less-seasson"/>
        <PrismButton name="plus-seasson"/>
        <CuboidButton name="play" active={true}/>
        <CuboidButton name="pause"/>
        <CuboidButton name="reset"/>
      </div>
    </div>
  );
}

export default App;
