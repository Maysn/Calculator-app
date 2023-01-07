import "./index.css";
import React, { useEffect, useState } from "react";
import Top from "../components/header";
import Screen from "../components/screen";
import NumPad from "../components/numPad";

function Calculator({ theme, setTheme }) {
  const [operation, setOperation] = useState("");
  useEffect(() => {
    console.log(operation);
  }, [operation]);
  return (
    <div className="calculator">
      <Top theme={theme} setTheme={setTheme} />
      <Screen theme={theme} operation={operation} />
      <NumPad theme={theme} operation={operation} setOperation={setOperation} />
    </div>
  );
}

export default Calculator;
