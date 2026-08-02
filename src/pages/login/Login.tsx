import "./Login.css";
import { useState } from "react";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Logo from "../../UI/Atoms/Logo/Logo";
import Title from "../../UI/Atoms/Title/Title";
import Button from "../../UI/Atoms/Buttons/Button";
import InputField from "../../UI/Atoms/InputField/InputField";
import { useAuth } from "../../context/auth-context";
import { Navigate } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, login } = useAuth();
  if (user) return <Navigate to="/candidates" replace />;

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }
    if (!user) {
      setError("Invalid email or password.");
    }
    login({ email, password }).catch(() => {
      setError("Invalid email or password.");
    });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <CardInfo title="CELFOCUS">
          <div className="login-branding">
            <Logo type="login" size="xl" />
            <Title type="small" variant="secondary">
              Sign in to your admin account
            </Title>
          </div>
          <div className="login-form">
            <div className="login-fields">
              <InputField
                name="Email address"
                placeholder="demo@celfocus.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="login-password-field">
                <InputField
                  name="Password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {error && <div className="login-error">{error}</div>}
            <Button text="Sign in" variant="primary" onClick={handleSignIn} />
          </div>
        </CardInfo>
      </div>
    </div>
  );
}
