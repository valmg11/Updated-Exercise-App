//Valentina Gandolfo
//Repetition

import {useState, useEffect} from 'react'
// import DurationExercise from "../DurationExercise"


function RepetitionExercise(props) {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        // console.log("button clicked "+ count+ " times");
    }, [count]);
    return (
    <div className="App">
        <header className="App-header">
            <p>{props.name[0]}</p>
        {/* <p>Repetition Exercise</p> */}
        <p>{count}</p>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Complete Rep</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </header>
    </div>

    );
}

export default RepetitionExercise