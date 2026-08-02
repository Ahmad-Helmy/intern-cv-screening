import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/auth-context";

export default function ProtectedRoute() {
  const { currentUser } = useAuth();
  const { pathname } = useLocation();

  if (currentUser === null) {
    return <Navigate to="/login" replace state={{ redirectTo: pathname }} />;
  }

  return <Outlet />;
}
