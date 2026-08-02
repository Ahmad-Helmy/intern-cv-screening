import { useMemo, useState, type ReactNode } from "react";
import { AuthContext, type SessionUser } from "../context/auth-context";

function buildDisplayName(email: string): string {
  return email.split("@")[0];
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<SessionUser | null>(null);

  const contextValue = useMemo(
    () => ({
      currentUser,

      // No backend yet: any non-empty email/password is accepted.
      // Password itself is never stored.
      signIn: (email: string, password: string): boolean => {
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
          return false;
        }

        setCurrentUser({
          id: trimmedEmail,
          email: trimmedEmail,
          name: buildDisplayName(trimmedEmail),
        });
        return true;
      },

      signOut: () => setCurrentUser(null),
    }),
    [currentUser],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
