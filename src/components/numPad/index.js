import "./index.css";
import React from "react";

function NumPad({ operation, setOperation }) {
  const handleClick = (e) => {
    setOperation((current) => current.concat(e.target.value));
  };
  return (
    <div className="numpad">
      <button className="key" value={"7"} onClick={handleClick}>
        7
      </button>
      <button className="key" value={8} onClick={handleClick}>
        8
      </button>
      <button className="key" value={9} onClick={handleClick}>
        9
      </button>
      <button className="key" value={"DEL"} onClick={handleClick}>
        DEL
      </button>
      <button className="key" value={4} onClick={handleClick}>
        4
      </button>
      <button className="key" value={5} onClick={handleClick}>
        5
      </button>
      <button className="key" value={6} onClick={handleClick}>
        6
      </button>
      <button className="key" value={"+"} onClick={handleClick}>
        +
      </button>
      <button className="key" value={1} onClick={handleClick}>
        1
      </button>
      <button className="key" value={2} onClick={handleClick}>
        2
      </button>
      <button className="key" value={3} onClick={handleClick}>
        3
      </button>
      <button className="key" value={"-"} onClick={handleClick}>
        -
      </button>
      <button className="key" value={"."} onClick={handleClick}>
        .
      </button>
      <button className="key" value={0} onClick={handleClick}>
        0
      </button>
      <button className="key" value={"/"} onClick={handleClick}>
        /
      </button>
      <button className="key" value={"*"} onClick={handleClick}>
        x
      </button>
      <button className="reset">RESET</button>
      <button className="equals" value={"="}>
        =
      </button>
    </div>
  );
}

export default NumPad;
