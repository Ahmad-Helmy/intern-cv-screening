export const getColorClass = (
  score?: number | string | null,
  level?: "high" | "mid" | "low" | null,
) => {
  if (score === null || score === undefined) {
    return "score--none";
  }
  return `score--${level}`;
};

export const getdisplayScore = (
  score?: number | string | null,
  percent = false,
) => {
  if (score === null || score === undefined) {
    return "—";
  }
  if (percent) {
    return `${score}/100`;
  }
  return `${score}`;
};
