import { useState } from "react";
import { Navigate } from "react-router";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Logo from "../../UI/Atoms/Logo/Logo";
import Title from "../../UI/Atoms/Title/Title";
import Button from "../../UI/Atoms/Buttons/Button";
import InputField from "../../UI/Atoms/InputField/InputField";
import { useAuth } from "../../context/auth-context";
import "./Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, login } = useAuth();

  // already signed in — nothing to do on this page
  if (user) return <Navigate to="/candidates" replace />;

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      setError("Enter an email address and a password.");
      return;
    }
    setError("");
    login(email, password);
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

            {error && (
              <Title type="x-small" variant="muted">
                {error}
              </Title>
            )}

            <Button text="Sign in" variant="primary" onClick={handleSignIn} />
          </div>
        </CardInfo>
      </div>
    </div>
  );
}
