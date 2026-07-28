import Card from "../../Atoms/Card/Card";
import Title from "../../Atoms/Title/Title";
import "./CardInfo.css";

type CardInfoProps = {
  children: React.ReactNode;
  title: string;
};

export default function CardInfo({ children, title }: CardInfoProps) {
  return (
    <Card>
      <div className="card-info-title">
        <Title type="medium" variant="primary">
          {title}
        </Title>
      </div>
      {children}
    </Card>
  );
}
