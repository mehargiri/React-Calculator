import { useState } from "react";
import Toggle from "./components/Toggle";
import "./App.scss";
import buttonData from "./utils/RawData";
import Button from "./components/Button";

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

  // Dynamically create calculators buttons based on rawData
  const btns = [];
  buttonData.forEach((item) => {
    btns.push(
      <Button key={item.id} data={item} light={lightMode} dark={darkMode} />
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
      <div className="btns-container">{btns}</div>
    </main>
  );
}
