import "./Card.css";

const Card = ({
  children,
  isTable = false,
}: {
  children: React.ReactNode;
  isTable?: boolean;
}) => {
  return (
    <div className={`card ${isTable ? "table-card" : ""}`}>{children}</div>
  );
};

export default Card;
