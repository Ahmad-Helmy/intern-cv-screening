import "./ColoredNumber.css";
import { getColorClass, getdisplayScore } from "./ColoredNumber.utils";

export const ColoredNumber = ({
  score,
  level = null,
  size = "large",
  percent = false,
}: {
  score?: number | string | null;
  level?: "high" | "mid" | "low" | null;
  size?: "small" | "large";
  percent?: boolean;
}) => {
  return (
    <p className={`score-value ${getColorClass(score, level)} size-${size}`}>
      {getdisplayScore(score, percent)}
    </p>
  );
};

export default ColoredNumber;
