import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";

interface AuthTokens {
  accessToken: string | null;
  refreshToken: string | null;
  expiresIn: number | null;
}

const AuthContext = createContext<{
  authTokens: AuthTokens;
  setAuthTokens: React.Dispatch<React.SetStateAction<AuthTokens>> | null;
}>({
  authTokens: { accessToken: null, refreshToken: null, expiresIn: null },
  setAuthTokens: null,
});

export const useToken = () => {
  return useContext(AuthContext);
};

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const query = useQuery();
  const [authTokens, setAuthTokens] = useState<AuthTokens>({
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
  });

  useEffect(() => {
    const accessToken = query.get("access_token");
    const refreshToken = query.get("refresh_token");
    const expiresIn = query.get("expires_in");
    if (accessToken && refreshToken && expiresIn) {
      setAuthTokens({
        accessToken,
        refreshToken,
        expiresIn: parseInt(expiresIn),
      });
      window.history.pushState({}, "", "/featured");
    }
  }, [query]);

  return (
    <AuthContext.Provider
      value={{
        authTokens,
        setAuthTokens,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
