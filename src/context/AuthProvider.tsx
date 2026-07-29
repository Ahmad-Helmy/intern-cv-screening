import { useMemo, useState, type ReactNode } from "react";
import {
  AuthContext,
  type AuthContextValue,
  type AuthUser,
} from "./auth-context";

const nameFromEmail = (email: string) =>
  email
    .split("@")[0]
    .split(".")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  // memoised so every consumer does not re-render whenever a parent does —
  // the value is a new object literal otherwise
  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      // NOTE: there is no backend yet, so any non-empty pair signs in and the
      // password is deliberately never stored. Real auth verifies on a server
      // and returns a token — do not take this as a model for that.
      login: (email, password) => {
        if (!email.trim() || !password.trim()) return;
        setUser({ id: email, email, name: nameFromEmail(email) });
      },
      logout: () => setUser(null),
    }),
    [user],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
};

export default AuthProvider;
