import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types/users";

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    setUser({
      id: "temp-id",
      email,
      name: "Demo User",
      password,
    });
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
