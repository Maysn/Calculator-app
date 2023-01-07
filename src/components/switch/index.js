import "./index.css";
import React, { useState } from "react";

function Switch({ theme, setTheme }) {
  const [switchNum, setSwitchNum] = useState(1);
  const changeTheme = (e) => {
    if (e.target.id === "one") {
      setSwitchNum(1);
      setTheme("Theme1");
      return;
    } else if (e.target.id === "two") {
      setSwitchNum(2);
      setTheme("Theme2");
      return;
    }
    setSwitchNum(3);
    setTheme("Theme3");
    return;
  };
  return (
    <div className="tri-state-toggle">
      <input
        className={switchNum === 1 ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="one"
        onClick={changeTheme}
      />
      <input
        className={switchNum === 2 ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="two"
        onClick={changeTheme}
      />
      <input
        className={switchNum === 3 ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="three"
        onClick={changeTheme}
      />
    </div>
  );
}

export default Switch;
