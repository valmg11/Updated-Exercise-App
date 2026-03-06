//Valentina Gandolfo
//Strength

import {useState} from 'react'
// import DurationExercise from "../DurationExercise"


function ChestPressExercise({onReturn, exercise}) {
    const [count, setCount] = useState(0);
    const [weight, setWeight] = useState(0);

    return (
    <div className="App">
        <header className="App-header">
            <h4>{exercise}</h4>

        <span>Rep: {count}</span>
        <br></br>
        <span>Weight: {weight}</span>
        <br></br>

            {/* rep buttons */}
            <div className="buttons">
                <button onClick={() => setCount(count + 1)}>Complete Rep</button>
                <button onClick={() => setCount(0)}>Reset Rep</button>
            </div>

            {/* weight buttons */}
            <div className="buttons">
                <button onClick={() => setWeight(weight + 5)}>Increase Weight</button>
                <button onClick={() => setWeight(weight - 5)}>Decrease Weight</button>
            </div>

            {/* return button */}
            <div className="buttons">
                <button onClick={onReturn}>Return</button>
            </div>
        </header>
    </div>
    );
}

export default ChestPressExercise