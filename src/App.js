import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import {ReactComponent as Rain} from './rain.svg';
import {ReactComponent as HG} from './hourglass.svg';
import {ReactComponent as Radio} from './radio.svg';
import TimeBar from './Component/ProgressBar';
import Modal from './Component/PopUp';



function App(props) {
  const [timer, setTimer] = useState(600); //# of seconds
  const [timeLeft, setTimeLeft]= useState(600);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const noise = useRef(new Audio('none'));
  noise.current.loop= true;
  function openPopup(){
    if (!active){
      setShow(true);
    }
  }
  function childClick(e){
    e.stopPropagation();
  }
  function setMinutes(e){
    if (!active){
      const re = /^[0-9\b]+$/;
      if (e.target.value === ''|| re.test(e.target.value)){
        if (parseInt(e.target.value) <= 0){
          alert('Enter a number greater than 0')
        }else{
          setTimer(e.target.value*60);
          setTimeLeft(e.target.value*60);
        }
      }
    }
  }

  useEffect(() =>{
    let interval = null;

    if (active){
      if (timeLeft === 0){
        let alarm = new Audio();
        setActive(!active);
        alarm.loop=false;
        alarm.src = 'http://www.orangefreesounds.com/wp-content/uploads/2018/12/Bell-sound-effect-ding.mp3';
        noise.current.pause();
        alarm.play();
      }
      else{
        interval = setInterval(()=>{
          setTimeLeft (timeLeft => timeLeft-0.5);
        }, 500);
        noise.current.play();
      }

    } else if (!active && timeLeft !== 0){
      clearInterval(interval);
      noise.current.pause();

    } 
    return () => clearInterval(interval);
  }, [active, timeLeft]);
  function stopModal(){
    setShow(false);
  }
  function toggleCountdown(){
    setActive(!active);


  }

  function resetCountdown(){
    setTimer(600);
    setTimeLeft(600);
    setActive(false);
    noise.current.pause();
  }
  function setRain(){
    noise.current.src = ("http://www.orangefreesounds.com/wp-content/uploads/2020/03/Rain-on-window-sound.mp3");
  }
  function setwNoise(){
    noise.current.src = ("http://www.orangefreesounds.com/wp-content/uploads/2019/02/Factory-air-conditioner-white-noise.mp3");

  }
  

  return (
    <div className="Background">

      {show ?<Modal setMinutes={setMinutes} seconds={timer} childClick={childClick} onClick={stopModal}/>:null}
      <div className="Container">
      <div className="SVGContainer">
        <Rain onClick={setRain}  />

      </div>
        <div className="SVGContainer">
        <Radio onClick={setwNoise} />

      </div>
      <div id="hourglass" className="SVGContainer">
        <HG onClick={openPopup}    />

      </div>
      <TimeBar total={timer} timeLeft={timeLeft} />
      <div className="Buttons">
        <button onClick={toggleCountdown} id="Start">{active ? "Pause":"Start"}</button>
        <button onClick={resetCountdown} id="Reset">Reset</button>
      </div>
      </div>
    </div>
  );
}



export default App;
