//Valentina Gandolfo
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import RepetitionExercise from "./components/RepetitionExercise"
import DurationExercise from "./components/DurationExercise"


function App() {
  let names = ["Push Ups", "Running"];
  let title = "Exercise!";

  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  }

  
  // console.log({buttonName});
  
// console.log(selectedButton)
  // if (selectedButton.) {
  //   console.log()
  // }

  return (
    // <button onClick={() => <RepetitionExercise></RepetitionExercise>}>Repetition</button>
    // <RepetitionExercise name></RepetitionExercise>
    
    <div className="App">
      <header className="App-header">
        <p>{title}</p>
        <div>{selectedButton}</div>
        <div className="buttons">
          <button onClick={() => handleClick(<RepetitionExercise name={names}/>)}>{names[0]}</button>
          <button onClick={() => handleClick(<DurationExercise name={names}/>)}>{names[1]}</button>
        </div>
      </header>
    </div>

  );  
}

export default App;
