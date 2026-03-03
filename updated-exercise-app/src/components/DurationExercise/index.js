//Valentina Gandolfo
//reference used: https://youtu.be/jPo0mIcNZfM?si=Z1LD_Ah-0BGEcD9g

// Duration

// useRef does not re-render. The values are persistant between renders, and it can store mutable values.
import {useState, useEffect, useRef} from 'react'
import React from "react";


function DurationExercise(props) {
    // old code from timer tutorial in modules:

    // let [timer, setTimer] = useState(0)
    // let [curTime, setCurTime] = useState(0)
    // let [time, setTime] = useState(0)
    // let [running, setRunning] = useState(false)

    
    
    // useEffect(() => {
        //     if(running) {
            //         let newTimer = setInterval(() =>{setCurTime(prev=>prev+1)}, 1000)
            //         setTimer(newTimer)
            //         return () => clearInterval(newTimer)
            
            //     }
            // }, [running])
            // let click = useCallback(
                //     () => {
                    //         console.log("click" + running)
                    //         if (running) {
                        //             console.log("clearing time")
    //             setTime(Date.now() - curTime)
    //             clearInterval(timer)
    //             setRunning(false)
    //         } else {
        //             console.log("starting time")
        //             setRunning(true)
        //             setCurTime(Date.now())
        //             let timer = setInterval(() => setCurTime(prev=>prev+1), 1000/30)
        //             setTimer(timer)
        //         }
        //     }, [running, timer]
        // )

        // new code from tutorial linked at top of file:
        const [isRunning, setIsRunning] = useState(false);
        const [elapsedTime, setElapsedTime] = useState(0);
        const intervalIdRef = useRef(null);
        const startTimeRef = useRef(0);
    
        useEffect (() => {
            if(isRunning) {
                intervalIdRef.current = setInterval(() => {
                    setElapsedTime(Date.now() - startTimeRef.current)
                }, 10);
            }
            return () => {
                clearInterval(intervalIdRef.current);
            }
        }, [isRunning]);
        
        function start() {
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime;
        }
        
        // function stop() {
            //     setIsRunning(false);
            // }

        //stops running and sets value to 0
        function reset() {
            setElapsedTime(0);
            setIsRunning(false);
        }
    
        function formatTime() {
            // let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
            let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
            let secs = Math.floor(elapsedTime / (1000) % 60);
            let millisecs = Math.floor(elapsedTime % 1000 / 10);
    
            // return {hours},":",{mins},":",{secs},":",{millisecs};
            // hours = String(hours).padStart(2, "0");

            // add "0" padding to beginning
            mins = String(mins).padStart(2, "0");
            secs = String(secs).padStart(2, "0");
            millisecs = String(millisecs).padStart(2, "0");
    
            // display stopwatch
            return `${mins}:${secs}:${millisecs}`
        }

    return (
    <div className="App">
        <header className="App-header">
            <p>{props.name[1]}</p>
            {/* <p>Duration Exercise</p> */}
        {/* <p>{running ? (Date.now()-curTime)/1000 : time/1000}</p> */}
        {/* <button onClick={click}>{running ? "Reset" : "Start"}</button> */}
        <div>{formatTime()}</div><br></br>
        <div className="buttons">
            <button onClick={start}>Start</button>
            {/* <button onClick={stop}>Stop</button> */}

            {/* reset/stop button */}
            <button onClick={reset}>Reset</button>
        </div>
        </header>
    </div>

    );
}

export default DurationExercise