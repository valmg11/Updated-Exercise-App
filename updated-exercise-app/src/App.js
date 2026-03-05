//Valentina Gandolfo
// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import PlankExercise from "./components/PlankExercise"
import DurationExercise from "./components/DurationExercise"
import RepetitionExercise from "./components/RepetitionExercise"
import SitUpExercise from "./components/SitUpExercise"


function App() {
  let names = ["Push Ups", "Running"];
  let title = "Exercise!";

  
  //menu
  const [selectedButton, setSelectedButton] = useState(null);

  // sets button to null (aka menu)
  const toMenu = () => setSelectedButton(null);

// console.log(selectedButton)
  // if (selectedButton.) {
  //   console.log()
  // }
  console.log(selectedButton);

  //duration exercises
  if (selectedButton === "plank") {
    return <PlankExercise onReturn={toMenu} name={names}/>;
  } else if (selectedButton === "running") {
    return <DurationExercise onReturn={toMenu}/>;
    
  //repetition exercises
  } else if (selectedButton === "pushups") {
    return <RepetitionExercise onReturn={toMenu}/>;
  } else if (selectedButton === "situps") {
    return <SitUpExercise onReturn={toMenu}/>;
  }


  return (
    // <button onClick={() => <RepetitionExercise></RepetitionExercise>}>Repetition</button>
    // <RepetitionExercise name></RepetitionExercise>
    
    <div className="App">
      <header className="App-header">
        <p>{title}</p>
        <div className="buttons">
          <button onClick={() => setSelectedButton("plank")}>Plank</button>
          <button onClick={() => setSelectedButton("pushups")}>Push Ups</button>
        </div>
        <div className="buttons">
          <button onClick={() => setSelectedButton("running")}>Running</button>
          <button onClick={() => setSelectedButton("situps")}>Sit Ups</button>
        </div>
        
        {/* {selectedButton === "menu" && (
          <div>
            <button onClick={() => setSelectedButton("rep")}> rep</button>
            <button onClick={() => setSelectedButton("dur")}> dur</button>

          </div> */}

        {/* )} */}

        {/* {selectedButton === "rep" && <RepetitionExercise onReturn={goToMenu}  name={names}/>}
        {selectedButton === "dur" && <DurationExercise onReturn={goToMenu}  name={names}/>} */}




        {/* <div>{selectedButton}</div>
        <div className="buttons"> */}
          {/* <button onClick={() => handleClick(<RepetitionExercise name={names}/>)}>{names[0]}</button>
          <button onClick={() => handleClick(<DurationExercise name={names}/>)}>{names[1]}</button> */}
          {/* <button onClick={() => {
            setSelectedButton(<RepetitionExercise name={names} onReturn={() => setSelectedButton(null)}/>);
            // setVisible(false);
            }}>{names[0]}</button> */}
            
          {/* <button onClick={() => {
            setSelectedButton(<DurationExercise name={names} onReturn={() => setSelectedButton(null)}/>);
            // setVisible(false);
            }}>{names[1]}</button> */}
{/* 
        </div>
        <br></br>
        <div className="buttons">
          <button>Plank</button>
          <button>Sit Ups</button>
        </div> */}
      </header>
    </div>

  );  
}

export default App;
