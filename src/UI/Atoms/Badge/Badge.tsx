import "./Badge.css";

type BadgeType =
  | "imported"
  | "processing"
  | "evaluated"
  | "nominated"
  | "rejected"
  | "skill"
  | "default";

const getBadgeClass = (type: BadgeType): string => {
  switch (type) {
    case "imported":
      return "badge--imported";
    case "processing":
      return "badge--processing";
    case "evaluated":
      return "badge--evaluated";
    case "nominated":
      return "badge--nominated";
    case "rejected":
      return "badge--rejected";
    case "skill":
      return "badge--skill";
    case "default":
    default:
      return "badge--default";
  }
};

export const Badge = ({
  text,
  type = "default",
}: {
  text?: string | null;
  type?: BadgeType;
}) => {
  if (!text) return null;

  const badgeClass = getBadgeClass(type);

  return <span className={`badge ${badgeClass}`}>{text}</span>;
};

export default Badge;
