import "./index.css";
import React from "react";
import Switch from "../switch/index";

function Top({ theme, setTheme }) {
  return (
    <div className="calc-top" style={{color: theme === 'Theme1'? 'hsl(0, 0%, 100%)': ''}}>
      <h3 className="calc">calc</h3>
      <div className="theme-switch">
        <p>THEME</p>
        <div className="switch">
          <p className="theme-number">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </p>
          <Switch theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default Top;
