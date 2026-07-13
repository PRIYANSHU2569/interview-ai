import "./Spinner.scss";

function Spinner({ text = "AI is working..." }) {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}

export default Spinner;