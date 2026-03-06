//Valentina Gandolfo
//Repetition

import {useState} from 'react'
// import DurationExercise from "../DurationExercise"


function SitUpExercise({onReturn, exercise}) {
    const [count, setCount] = useState(0);

    return (
    <div className="App">
        <header className="App-header">
            <h4>{exercise}</h4>

        <span>{count}</span>
        <br></br>
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Complete Rep</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            {/* return button */}
            <div className="buttons">
                <button onClick={onReturn}>Return</button>
            </div>
        </header>
    </div>
    );
}

export default SitUpExercise