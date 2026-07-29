import Card from "../../Atoms/Card/Card";
import Title from "../../Atoms/Title/Title";
import "./CardInfo.css";

type CardInfoProps = {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactNode;
};

export default function CardInfo({ children, title, icon }: CardInfoProps) {
  return (
    <Card>
      <div className="card-info-title">
        {icon && <span className="card-info-icon">{icon}</span>}
        <Title type="large" variant="primary">
          {title}
        </Title>
      </div>
      {children}
    </Card>
  );
}
