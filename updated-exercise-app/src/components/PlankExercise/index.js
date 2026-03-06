//Valentina Gandolfo
//reference used: https://youtu.be/jPo0mIcNZfM?si=Z1LD_Ah-0BGEcD9g

// Duration

// useRef does not re-render. The values are persistant between renders, and it can store mutable values.
import {useState, useEffect, useRef} from 'react'
import React from "react";


function PlankExercise({onReturn, exercise}) {
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

    //stops running and sets value to 0
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
        let secs = Math.floor(elapsedTime / (1000) % 60);
        let millisecs = Math.floor(elapsedTime % 1000 / 10);

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
            <h4>{exercise}</h4>
        <div>{formatTime()}</div><br></br>
        <div className="buttons">
            <button onClick={start}>Start</button>

            {/* reset/stop button */}
            <button onClick={reset}>Reset</button>
        </div>

        {/* return button */}
        <div className="buttons">
            <button onClick={onReturn}>Return</button>
        </div>
        </header>
    </div>
    );
}

export default PlankExercise