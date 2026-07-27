import React from "react";
import "./ColoredNumber.css";

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
  const getColorClass = () => {
    if (score === null || score === undefined) {
      return "score--none";
    }
    return `score--${level}`;
  };

  const getdisplayScore = () => {
    if (score === null || score === undefined) {
      return "—";
    }
    if (percent) {
      return `${score}/100`;
    }
    return `${score}`;
  };

  return (
    <p className={`score-value ${getColorClass()} size-${size}`}>
      {getdisplayScore()}
    </p>
  );
};

export default ColoredNumber;
