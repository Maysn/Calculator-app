import "./index.css";
import React, { useState } from "react";

function Switch(props) {
  const [switchNum, setSwitchNum] = useState(1);
  return (
    <div className="tri-state-toggle">
      <input
        className={switchNum === 1 ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="one"
        onClick={() => setSwitchNum(1)}
      />
      <input
        className={switchNum === 2 ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="two"
        onClick={() => setSwitchNum(2)}
      />
      <input
        className={switchNum === 3 ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="three"
        onClick={() => setSwitchNum(3)}
      />
    </div>
  );
}

export default Switch;
