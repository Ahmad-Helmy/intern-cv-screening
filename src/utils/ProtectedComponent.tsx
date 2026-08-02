import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/auth-context";
export default function ProtectedRoute() {
  const { user } = useAuth();

  if (!user && !localStorage.getItem("user")) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
