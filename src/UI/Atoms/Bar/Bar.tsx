import "./Bar.css";
function ProgressBar({ percentage }: { percentage: number }) {
  const getColor = () => {
    if (percentage <= 49) {
      return "low";
    }
    if (percentage < 79) {
      return "mid";
    }
    return "success";
  };

  return (
    <div className="progress-bar">
      <div
        className={`progress-fill progress-bar-${getColor()}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
