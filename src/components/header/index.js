import "./index.css";
import React from "react";
import Switch from "../switch/index";

function Top(props) {
  return (
    <div className="calc-top">
      <h3 className="calc">calc</h3>
      <div className="theme-switch">
        <p>THEME</p>
        <Switch />
      </div>
    </div>
  );
}

export default Top;
