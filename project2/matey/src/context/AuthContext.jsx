import React, { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext(null);

const parseTokenPayload = (token) => {
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload;
  } catch (error) {
    console.error("토큰 파싱 실패:", error);
    return null;
  }
};

const createMockToken = (payload) => {
  const header = { alg: "HS256", typ: "JWT" };

  const encode = (obj) => {
    return btoa(JSON.stringify(obj));
  };

  return `${encode(header)}.${encode(payload)}.matey-signature`;
};

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || ""
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refreshToken") || ""
  );
  const [user, setUser] = useState(parseTokenPayload(localStorage.getItem("accessToken")));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    } else {
      localStorage.removeItem("accessToken");
    }

    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      localStorage.removeItem("refreshToken");
    }

    setUser(parseTokenPayload(accessToken));
  }, [accessToken, refreshToken]);

  useEffect(() => {
    const syncAuthState = () => {
      const token = localStorage.getItem("accessToken") || "";
      const refresh = localStorage.getItem("refreshToken") || "";

      setAccessToken(token);
      setRefreshToken(refresh);
      setUser(parseTokenPayload(token));
    };

    window.addEventListener("storage", syncAuthState);
    return () => window.removeEventListener("storage", syncAuthState);
  }, []);

  const login = async ({ email, password }) => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const isAdmin =
          email?.toLowerCase().includes("admin") ||
          email?.toLowerCase().includes("superadmin");

        const payload = {
          email,
          role: isAdmin ? "ADMIN" : "USER",
          nickname: (email?.split("@")[0] || "matey_user").replace(/[^a-zA-Z0-9_]/g, ""),
          name: (email?.split("@")[0] || "matey_user").replace(/[^a-zA-Z0-9_]/g, ""),
        };

        const newAccessToken = createMockToken(payload);
        const newRefreshToken = `refresh-${Date.now()}`;

        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);
        setUser(payload);
        setLoading(false);

        resolve({
          success: true,
          user: payload,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      }, 600);
    });
  };

  const signup = async ({ name, nickname, email, password }) => {
    setLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const normalizedName =
          (name || email?.split("@")[0] || "matey_user").replace(/[^a-zA-Z0-9가-힣_]/g, "");
        const normalizedNickname =
          (nickname || email?.split("@")[0] || "matey_user").replace(/[^a-zA-Z0-9가-힣_]/g, "");

        const payload = {
          email,
          role: "USER",
          nickname: normalizedNickname || "matey_user",
          name: normalizedName || "matey_user",
        };

        const newAccessToken = createMockToken(payload);
        const newRefreshToken = `refresh-${Date.now()}`;

        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);
        setUser(payload);
        setLoading(false);

        resolve({
          success: true,
          user: payload,
          accessToken: newAccessToken,
          refreshToken: newRefreshToken,
        });
      }, 700);
    });
  };

  const logout = () => {
    setAccessToken("");
    setRefreshToken("");
    setUser(null);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const updateUser = (nextUser) => {
    if (!nextUser) return;

    const mergedUser = {
      ...(user || {}),
      ...nextUser,
    };

    const nextAccessToken = createMockToken(mergedUser);

    setUser(mergedUser);
    setAccessToken(nextAccessToken);
    localStorage.setItem("accessToken", nextAccessToken);
  };

  const value = useMemo(
    () => ({
      accessToken,
      refreshToken,
      user,
      loading,
      isAuthenticated: !!accessToken,
      isAdmin: user?.role === "ADMIN" || user?.role === "SUPERADMIN",
      login,
      signup,
      logout,
      updateUser,
    }),
    [accessToken, refreshToken, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
