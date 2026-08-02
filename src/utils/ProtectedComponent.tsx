import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/auth-context";

export default function ProtectedRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Wait until session restoration finishes before deciding to redirect
  if (isLoading) {
    return null; // Or render a spinner/loading fallback
  }

  if (!user) {
    // Pass the current location in state so login can redirect back
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}