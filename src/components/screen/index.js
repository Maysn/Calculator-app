import "./index.css";

function Screen({ operation }) {
  return (
    <div className="screen">
      <input type="text" value={operation} readOnly />
    </div>
  );
}

export default Screen;
