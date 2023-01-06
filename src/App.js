import { useState } from "react";
import "./App.css";
import Calculator from "./calculator";

function App() {
  const [theme, setTheme] = useState("Theme1");
  return (
    <div className={`App ${theme}`}>
      <Calculator theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
