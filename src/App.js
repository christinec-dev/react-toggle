import React from "react";
import ToggleSwitch from "./components/ToggleSwitch.js";

export default function App() {
  
  function onToggleChange(event) {
    console.log(event.target.checked);
  }

  return (
    <div className="App">
        <h2 className="pa-color-highlight">This is a reusable toggle switch</h2>
        <ToggleSwitch
          id="id"
          defaultChecked={false}
          disabled={false}
          Text={["Yes", "No"]}
          onToggleChange={onToggleChange}
        />
    </div>
  );
}