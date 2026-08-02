import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/auth-context";
export default function ProtectedRoute() {
  const { user } = useAuth();
  console.log("Protected Route" + user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
