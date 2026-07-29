import { createContext, useContext } from "react";
import type { User } from "../types/users";

// the signed-in user is never carried around the app with its password on it
export type AuthUser = Omit<User, "password">;

export interface AuthContextValue {
  user: AuthUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// exported only so AuthProvider can supply it — components consume useAuth
export const AuthContext = createContext<AuthContextValue | null>(null);

// the guard lives in the hook, so no consumer can forget it and no consumer
// has to deal with a nullable context value
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
};
