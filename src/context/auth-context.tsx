import { createContext, useContext } from "react";
import type { User } from "../types/users";

// Public-facing user shape. We strip "password" here instead of trusting
// every call site to remember not to store it.
export type SessionUser = Omit<User, "password">;

export type AuthContextShape = {
  currentUser: SessionUser | null;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextShape | undefined>(
  undefined,
);

export function useAuth(): AuthContextShape {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth() was called outside of an AuthProvider tree");
  }
  return context;
}
