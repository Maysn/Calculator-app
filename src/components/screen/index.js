import "./index.css";

function Screen({ theme, operation }) {
  return (
    <div className="screen">
      <input
        type="text"
        style={{ color: theme === "Theme1" ? "hsl(0, 0%, 100%)" : "" }}
        value={operation}
        maxLength="19"
        readOnly
      />
    </div>
  );
}

export default Screen;
