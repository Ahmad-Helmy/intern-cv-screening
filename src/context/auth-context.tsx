import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router";
import {
  clearToken,
  getCurrentUser,
  getStoredToken,
  postLogin,
  storeToken,
} from "../services/auth";

import type { AuthUser, LoginRequest } from "../types/api/auth";
interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  // Restores session on mount if valid token exists in localStorage
  useEffect(() => {
    const initAuth = async () => {
      const token = getStoredToken();
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        // Clear stale token if session check fails (e.g., 401 Unauthorized)
        clearToken();
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  // Signs in user via API call, stores token, and updates user state
  const login = async (credentials: LoginRequest) => {
    const auth = await postLogin(credentials);

    storeToken(auth.token);
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  };

  const logout = () => {
    clearToken();
    setUser(null);
    navigate("/login");
  };

  const value: AuthContextValue = { user, isLoading, login, logout };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
};
