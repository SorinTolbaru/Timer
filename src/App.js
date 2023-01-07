import { useEffect, useState } from "react";
import "./index.css";

function App() {
  
  const[displayMS,setDisplayMS] = useState(0);
  const[displayS,setDisplayS] = useState(0);
  const[displayM,setDisplayM] = useState(0);
  const[running,setRunning] = useState(false);
  const[holdTime,setHoldTime] = useState(0);
  let [ms,sec,min] = [0];


  useEffect(()=>{
    let startTimer

    if(running == true){
      ms = displayMS;
      sec = displayS;
      min = displayM;
      startTimer = setInterval(()=>{
      setDisplayMS(ms);

    if(ms >= 99){
        ms = 0;
        sec++;
        setDisplayMS(0);
        setDisplayS(sec);
      }

    if(min == 60){
          ms = 0;
          sec = 0;
          min++;
          setDisplayS(0);
          setDisplayM(0);
          setDisplayM(min);
        }

    if(min == 60){
          clearInterval(startTimer);
          setDisplayMS(0);
        }

             ms++;

    }, 10);

  }else if(running == false){
    clearInterval(startTimer);
    ms = sec = min = 0;
    setDisplayMS(0);
    setDisplayS(0);
    setDisplayM(0);

 }else if(running == null){
  clearInterval(startTimer);
 }
  return ()=>clearInterval(startTimer);
},[running])


const starttimer =()=>{
  setRunning(true);
  setHoldTime(0);
}

const reset =() =>{
return holdTime == 0 ? (setRunning(null),setHoldTime(1)) : (setRunning(false),setHoldTime(0));
}

  return (
    <div className="container">
      <div className="display"><div>{displayM < 10 && 0}{displayM}</div><div>:{displayS < 10 && 0}{displayS}</div><div>.{displayMS < 10 && 0}{displayMS} </div></div>
        <div className="main-circle">
          <div className="pause-restart">
          <a href="#" onClick={reset}><div className="pause-restart-button">Stop/Restart</div></a>
         </div>
          <div className="start">
          <a href="#" onClick={starttimer}><div className="start-button">Start</div></a>
          </div>
        </div>
    </div>
  );
}

export default App;