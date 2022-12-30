import { useState, useReducer } from "react";
import Toggle from "./components/Toggle";
import "./App.scss";
import buttonData from "./utils/RawData";
import Button from "./components/Button";
import initialState from "./utils/InitialState";
import reducer from "./utils/CalculatorReducer";

export default function App() {
  // Toggle between Light and Dark Modes using react's useState
  const [lightMode, setLightMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const handleLightMode = () => {
    if (lightMode === true) return;
    setLightMode((prevState) => !prevState);
    setDarkMode((prevState) => !prevState);
  };
  const handleDarkMode = () => {
    if (darkMode === true) return;
    setLightMode((prevState) => !prevState);
    setDarkMode((prevState) => !prevState);
  };

  // Adding functionality to buttons using react's useReducer

  const [{ previousNum, currentNum, sign, result, includeEqual }, dispatch] =
    useReducer(reducer, initialState);

  // Dynamically create calculator's buttons based on raw data
  const btns = [];
  buttonData.forEach((item) => {
    btns.push(
      <Button
        key={item.id}
        data={item}
        light={lightMode}
        dark={darkMode}
        dispatch={dispatch}
      />
    );
  });

  return (
    <main className={`calculator ${lightMode ? "light" : "dark"}`}>
      <Toggle
        light={lightMode}
        dark={darkMode}
        changeLight={handleLightMode}
        changeDark={handleDarkMode}
      />
      <p className="previous-data">
        {previousNum} {sign} {currentNum} {includeEqual ? "=" : ""}
      </p>
      <p className="current-data">{result}</p>
      <div className="btns-container">{btns}</div>
    </main>
  );
}
