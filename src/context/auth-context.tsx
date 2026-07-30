import { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router"

import type { User } from "../types/users";


interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();


  const login = (email: string, password: string) => {
    
    if (email === "demo@celfocus.com" && password === "demo123") {
      setUser({
        id: "temp-id",
        email: "demo@celfocus.com",
        name: "Demo Recruiter",
        password: "demo123",
      });
      console.log({["Auth-context"] : user});
      navigate("/");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextValue = { user, login, logout };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
