import Title from "../../Atoms/Title/Title";
import "./InfoTitle.css";

type InfoTitleProps = {
  label: string;
  value: string;
};

function InfoTitle({ label, value }: InfoTitleProps) {
  return (
    <>
      <div className="info-title">
        <Title type="large" variant="primary">
          {label}
        </Title>
        <Title type="medium" variant="secondary">
          {value}
        </Title>
      </div>
    </>
  );
}

export default InfoTitle;
