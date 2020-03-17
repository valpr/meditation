import React, {useState} from 'react';
import './App.scss';
import {ReactComponent as Rain} from './rain.svg';
import {ReactComponent as HG} from './hourglass.svg';
import {ReactComponent as Radio} from './radio.svg';
import TimeBar from './Component/ProgressBar';
import Modal from './Component/PopUp';

function App(props) {
  const [timer, setTimer] = useState(10); //# of seconds
  const [timeLeft, setTimeLeft]= useState(timer*60);
  const [percentage, setPercentage]= useState(0);
  const [show, setShow] = useState(false);
  function openPopup(){
    setShow(true);
  }
  function childClick(e){
    e.stopPropagation();
  }
  function setMinutes(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === ''|| re.test(e.target.value)){
      setTimer(e.target.value);
    }
  }
  function playSound(){

  }
  function stopModal(){
    setShow(false);
  }
  

  return (
    <div className="Background">
      {show ?<Modal setMinutes={setMinutes} minutes={timer} childClick={childClick} onClick={stopModal}/>:null}
      <div className="Container">
      <div className="SVGContainer">
        <Rain height={30} width={30}  />

      </div>
        <div className="SVGContainer">
        <Radio height={30} width={30}  />

      </div>
      <div className="SVGContainer">
        <HG onClick={openPopup} height={30} width={30}  />

      </div>
      <TimeBar total={timer} timeLeft={timeLeft} percentage={percentage}/>
      <div className="Buttons">
        <button  id="Start">Start</button>
        <button  id="Stop">Stop</button>
        <button  id="Reset">Reset</button>
      </div>
      </div>
    </div>
  );
}



export default App;
