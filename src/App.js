import React, {useState} from 'react';
import './App.scss';
import {ReactComponent as Rain} from './rain.svg'
import {ReactComponent as HG} from './hourglass.svg'
import {ReactComponent as Radio} from './radio.svg'
import TimeBar from './ProgressBar'

function App() {
  const [timer, setTimer] = useState(10);
  return (
    <div className="Background">
      <div className="Container">
      <div className="SVGContainer">
        <Rain height={30} width={30}  />

      </div>
        <div className="SVGContainer">
        <Radio height={30} width={30}  />

      </div>
      <div className="SVGContainer">
        <HG height={30} width={30}  />

      </div>
      <TimeBar/>

      </div>
    </div>
  );
}



export default App;
