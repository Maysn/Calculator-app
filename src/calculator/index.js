import "./index.css";
import React, { useEffect, useState } from "react";
import Top from "../components/header";
import Screen from "../components/screen";
import NumPad from "../components/numPad";

function Calculator(props) {
  const [operation, setOperation] = useState("");
  useEffect(() => {
    console.log(operation);
  }, [operation]);
  return (
    <div className="calculator">
      <Top />
      <Screen operation={operation} />
      <NumPad operation={operation} setOperation={setOperation} />
    </div>
  );
}

export default Calculator;
