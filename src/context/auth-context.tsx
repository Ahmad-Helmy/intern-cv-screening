import {
  useMemo,
  useEffect,
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router";

import type { User } from "../types/users";

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    console.log("User changed:", user);
  }, [user]);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    console.log("login called", email, password);
    if (email === "demo@celfocus.com" && password === "demo123") {
      console.log("credentials correct");
      setUser({
        id: "temp-id",
        email: "demo@celfocus.com",
        name: "Demo Recruiter",
        password: "demo123",
      });
      navigate("/");
    } else {
      console.log("credentials incorrect");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
