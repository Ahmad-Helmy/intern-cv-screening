import Title from "../../Atoms/Title/Title";
import ProgressBar from "../../Atoms/Bar/Bar";

type BarTitleProps = {
  label: string;
  percentage: number;
  type?: "xxlarge" | "xlarge" | "large" | "medium" | "small" | "x-small";
  variant?: "primary" | "secondary" | "muted";
};

export default function BarTitle({
  label,
  percentage,
  type = "medium",
  variant = "primary",
}: BarTitleProps) {
  return (
    <div className="bar-title">
      <Title type={type} variant={variant}>
        {label}
      </Title>
      <ProgressBar percentage={percentage} />
    </div>
  );
}
