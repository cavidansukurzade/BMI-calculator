import React, { useState } from "react";
import './App.css'

const App = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const heightt = (e) => {
    setHeight(e.target.value);
  };
  const weightt = (e) => {
    setWeight(e.target.value);
  };
  const bmi = (e) => {
    if(isNaN(e)||!height||!weight){
      return ""
    }
    else if(e>1000000){
      return "limit reached"
    }
    else{
      return e
    }
  }
  const weightStatus = (e) => {
    if(isNaN(e)||!height||!weight){
      return ""
    }
    else if(e>=40){
      return "Obesity class III"
    }
    else if(e>=35){
      return "Obesity class II"
    }
    else if(e>=30){
      return "Obesity class I"
    }
    else if(e>=25){
      return "Owerweight"
    }
    else if(e>=18.5){
      return "Normal weight"
    }
    else if(e>=0){
      return "Underweight"
    }
    else{
      return ""
    }
  };
  const reseter = () => {
    setHeight("");
    setWeight("");
  };
  return (
    <div className="app">
      <h1 className="header">BMI Calculator</h1>
      <div className="bmi">
      <h4>{bmi(
          (weight / (height / 100) ** 2).toFixed(2)
        )}</h4>
      <h4>
        {weightStatus(
          (weight / (height / 100) ** 2).toFixed(2)
        )}
      </h4>
      </div>
      <div className="inputs">
        <input
          id="input1"
          type="text"
          onChange={heightt}
          placeholder="height(cm)"
          value={height}
        />
        <input
          id="input2"
          type="text"
          onChange={weightt}
          placeholder="Weight(kg)"
          value={weight}
        />
      </div>
      <button onClick={reseter}>Reset</button>
    </div>
  );
};

export default App;
