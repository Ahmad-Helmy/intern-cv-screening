import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../context/auth-context";

// A route that conditionally renders its own children: with no signed-in user
// it renders a redirect instead of an Outlet, so nothing below it ever mounts.
const ProtectedRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // remember where they were headed so login can send them back there
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
