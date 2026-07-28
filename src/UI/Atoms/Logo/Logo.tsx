import "./Logo.css";

type LogoType = "login" | "sidebar";

type LogoSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

interface LogoProps {
  type: LogoType;
  size?: LogoSize;
}

const Logo = ({ type, size = "xl" }: LogoProps) => {
  return (
    <h1
      className={`logo logo--${type}`}
      style={{
        fontSize: `var(--font-size-${size})`,
      }}
    >
      Intern<span>Screen</span>
    </h1>
  );
};

export default Logo;
