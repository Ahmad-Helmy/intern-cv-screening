import "./Card.css";

const Card = ({
  children,
  table = false,
}: {
  children: React.ReactNode;
  table?: boolean;
}) => {
  return <div className={`card ${table ? "table-card" : ""}`}>{children}</div>;
};

export default Card;
