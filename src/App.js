import { useMemo, useState } from "react";
import './App.css';
const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

function App() {
  const[height,setHeight] = useState(DEFAULT_HEIGHT);
  const[weight,setWeight] = useState(DEFAULT_WEIGHT);
  

  function onHeightChange(event){
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event){
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() =>{
    const calculteHeight = height/100;
    return(weight/(calculteHeight *calculteHeight)).toFixed(1)//toFixed() converts a number to a string, rounded to a specified number of decimals:
    //toFixed() converts a number to a string, rounded to a specified number of decimals:
  },[weight,height]);

 return(
   <div>
     
      <h1>Project 7: BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
  
  );
   </div>
 )
}

export default App;
