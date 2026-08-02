import { useState } from "react";
import { Navigate, useLocation } from "react-router";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Logo from "../../UI/Atoms/Logo/Logo";
import Title from "../../UI/Atoms/Title/Title";
import Button from "../../UI/Atoms/Buttons/Button";
import InputField from "../../UI/Atoms/InputField/InputField";
import { useAuth } from "../../context/auth-context";
import "./Login.css";

const DEFAULT_LANDING = "/candidates";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { currentUser, signIn } = useAuth();
  const location = useLocation();

  const redirectTarget =
    (location.state as { redirectTo?: string } | null)?.redirectTo ??
    DEFAULT_LANDING;

  if (currentUser !== null) {
    return <Navigate to={redirectTarget} replace />;
  }

  const handleSignIn = () => {
    const success = signIn(email, password);
    if (!success) {
      setErrorMessage("Please enter both an email and a password.");
      return;
    }
    setErrorMessage(null);
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

            {errorMessage && (
              <Title type="x-small" variant="muted">
                {errorMessage}
              </Title>
            )}

            <Button text="Sign in" variant="primary" onClick={handleSignIn} />
          </div>
        </CardInfo>
      </div>
    </div>
  );
}
