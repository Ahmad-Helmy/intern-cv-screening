import CardInfo from "../../Molecules/CardInfo/CardInfo";
import Logo from "../../Atoms/Logo/Logo";
import Title from "../../Atoms/Title/Title";
import Button from "../../Atoms/Button/Button";
import "./LoginPage.css";

export default function LoginPage() {
  const handleSignIn = () => {
    // TODO: wire up auth logic
  };

  return (
    <div className="login-page">
      <CardInfo title="CELFOCUS">
        <Logo type="login" size="xl" />
        <Title type="small" variant="secondary">
          Sign in to your admin account
        </Title>

        <Button text="Sign in" variant="primary" onClick={handleSignIn} />
      </CardInfo>
    </div>
  );
}
