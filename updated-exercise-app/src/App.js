//Valentina Gandolfo
import './App.css';
import {useState} from 'react';

import PlankExercise from "./components/PlankExercise";
import DurationExercise from "./components/DurationExercise";

import RepetitionExercise from "./components/RepetitionExercise";
import SitUpExercise from "./components/SitUpExercise";

import StrengthExercise from './components/StrengthExercise';
import ChestPressExercise from './components/ChestPressExercise';



function App() {
  let title = ["Exercise!", "Plank", "Running", "Push Ups", "Sit Ups", "Leg Press", "Chest Press"];
  
  //menu
  const [selectedButton, setSelectedButton] = useState(null);

  // sets button to null (aka menu)
  const toMenu = () => setSelectedButton(null);

  //duration exercises
  if (selectedButton === "plank") {
    return <PlankExercise onReturn={toMenu} exercise={title[1]}/>;
  } else if (selectedButton === "running") {
    return <DurationExercise onReturn={toMenu} exercise={title[2]}/>;
    
  //repetition exercises
  } else if (selectedButton === "pushups") {
    return <RepetitionExercise onReturn={toMenu} exercise={title[3]}/>;
  } else if (selectedButton === "situps") {
    return <SitUpExercise onReturn={toMenu} exercise={title[4]}/>;

  //strength exercises
  } else if (selectedButton === "leg press") {
    return <StrengthExercise onReturn={toMenu} exercise={title[5]}/>;
  } else if (selectedButton === "chest press") {
    return <ChestPressExercise onReturn={toMenu} exercise={title[6]}/>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>{title[0]}</h4>

        {/* duration */}
        <div className="buttons">
          <button onClick={() => setSelectedButton("plank")}>Plank</button>
          <button onClick={() => setSelectedButton("running")}>Running</button>
        </div>

        {/* repetition */}
        <div className="buttons">
          <button onClick={() => setSelectedButton("situps")}>Sit Ups</button>
          <button onClick={() => setSelectedButton("pushups")}>Push Ups</button>
        </div>

        {/* strength */}
        <div className="buttons">
          <button onClick={() => setSelectedButton("leg press")}>Leg Press</button>
          <button onClick={() => setSelectedButton("chest press")}>Chest Press</button>
        </div>
      </header>
    </div>
  );  
}

export default App;
