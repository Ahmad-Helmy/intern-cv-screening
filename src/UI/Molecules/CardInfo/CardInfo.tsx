import Card from "../../Atoms/Card/Card";
import Title from "../../Atoms/Title/Title";
import "./CardInfo.css";

type CardInfoProps = {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
  isTable?: boolean;
};

export default function CardInfo({
  children,
  title,
  icon,
  isTable = false,
}: CardInfoProps) {
  return (
    <Card isTable={isTable}>
      <div className="card-info-title">
        {icon && <span className="card-info-icon">{icon}</span>}
        <Title type="medium" variant="primary">
          {title}
        </Title>
      </div>
      {children}
    </Card>
  );
}
