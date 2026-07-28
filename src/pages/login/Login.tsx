import Button from "../../UI/Atoms/Buttons/Button";
import Card from "../../UI/Atoms/Card/Card";
import InputField from "../../UI/Atoms/InputField/InputField";
import Logo from "../../UI/Atoms/Logo/Logo";
import Title from "../../UI/Atoms/Title/Title";
import "./login.css";
export default function Login() {
  return (
    <div className="login-card">
      <Card>
        <div className="login-header">
          <Title type="small" variant="muted">
            Celfخcus
          </Title>
          <Logo type="login" size="xl" />
          <Title type="small" variant="muted">
            Sign in to your admin account
          </Title>
        </div>
        <div className="login-body">
          <InputField
            name="Email Address"
            placeholder="Enter your email address"
          />
          <InputField name="Password" placeholder="Enter your password" />
          <Button
            text="Sign in"
            onClick={() => console.log("sign in clicked!")}
          />
        </div>
      </Card>
    </div>
  );
}
