import "./index.css";
import React, { useState } from "react";

function Switch({ theme, setTheme }) {
  const changeTheme = (e) => {
    if (e.target.id === "one") {
      setTheme("Theme1");
      return;
    } else if (e.target.id === "two") {
      setTheme("Theme2");
      return;
    }
    setTheme("Theme3");
    return;
  };
  return (
    <div className="tri-state-toggle">
      <input
        className={theme === "Theme1" ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="one"
        onClick={changeTheme}
      />
      <input
        className={theme === "Theme2" ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="two"
        onClick={changeTheme}
      />
      <input
        className={theme === "Theme3" ? "visible" : "invisible"}
        type="radio"
        name="toggle"
        id="three"
        onClick={changeTheme}
      />
    </div>
  );
}

export default Switch;
