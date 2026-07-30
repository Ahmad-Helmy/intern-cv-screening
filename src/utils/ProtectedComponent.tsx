import { Navigate } from "react-router";
import { useAuth } from "../context/auth-context";
import PageTemplate from "../UI/DefaultTemplates/DefaultTemplate";
export default function ProtectedRoute() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <PageTemplate />;
}
