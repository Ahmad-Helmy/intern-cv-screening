import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types/users";
import { users } from "../utils/mockUsers";
import { useNavigate } from "react-router";

type PublicUser = Omit<User, "password">;

interface AuthContextValue {
  user: PublicUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<PublicUser | null>(null);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    email = email.toLowerCase().trim();
    password = password.trim();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      setUser({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      });
    } else {
      setUser({
        id: "",
        email: "",
        name: "",
      });
    }
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: foundUser?.id,
        name: foundUser?.name,
        email: foundUser?.email,
      }),
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/login");
  };

  const value: AuthContextValue = { user, login, logout };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
