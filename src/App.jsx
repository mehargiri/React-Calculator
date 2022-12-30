import { useState } from "react";
import Toggle from "./components/Toggle";
import "./App.scss";

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

  return (
    <main className={`calculator ${lightMode ? "light" : "dark"}`}>
      <Toggle
        light={lightMode}
        dark={darkMode}
        changeLight={handleLightMode}
        changeDark={handleDarkMode}
      />
    </main>
  );
}
