import "./Bar.css";
function ProgressBar({ percentage }: { percentage: number }) {
  let color = "";
  if (percentage <= 49) {
    color = "progress-bar-low";
  } else if (percentage >= 49 && percentage < 79) {
    color = "progress-bar-mid";
  } else color = "progress-bar-success";

  return (
    <div className="progress-bar">
      <div
        className={`progress-fill ${color}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;
