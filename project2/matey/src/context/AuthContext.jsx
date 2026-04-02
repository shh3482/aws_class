import React, { createContext, useState, useCallback, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    accessToken: null,
    refreshToken: null,
    user: null,
    isLoading: true,
    error: null,
  });

  // 앱 시작 시 localStorage에서 인증 정보 복원
  useEffect(() => {
    const initAuth = () => {
      try {
        const storedToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');
        const storedUser = localStorage.getItem('user');

        if (storedToken && storedUser) {
          setAuthState({
            accessToken: storedToken,
            refreshToken: storedRefreshToken,
            user: JSON.parse(storedUser),
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (err) {
        console.error('인증 초기화 오류:', err);
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    initAuth();
  }, []);

  // 로그인 함수
  const login = useCallback(async (email, password) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // 테스트 계정
      if (email === 'test@matey.com' && password === 'test1234') {
        const mockUser = {
          id: '1',
          name: '테스트 사용자',
          email: email,
          role: 'USER',
          character: '하루',
          createdAt: new Date().toISOString(),
        };
        
        const mockToken = 'mock-jwt-token-' + Date.now();
        const mockRefreshToken = 'mock-refresh-token-' + Date.now();

        localStorage.setItem('accessToken', mockToken);
        localStorage.setItem('refreshToken', mockRefreshToken);
        localStorage.setItem('user', JSON.stringify(mockUser));

        setAuthState({
          accessToken: mockToken,
          refreshToken: mockRefreshToken,
          user: mockUser,
          isLoading: false,
          error: null,
        });

        return { success: true, user: mockUser };
      }

      // 관리자 계정
      if (email === 'admin@matey.com' && password === 'admin1234') {
        const mockAdminUser = {
          id: 'admin-1',
          name: '관리자',
          email: email,
          role: 'ADMIN',
          character: '루미',
          createdAt: new Date().toISOString(),
        };
        
        const mockToken = 'mock-jwt-token-admin-' + Date.now();
        const mockRefreshToken = 'mock-refresh-token-admin-' + Date.now();

        localStorage.setItem('accessToken', mockToken);
        localStorage.setItem('refreshToken', mockRefreshToken);
        localStorage.setItem('user', JSON.stringify(mockAdminUser));

        setAuthState({
          accessToken: mockToken,
          refreshToken: mockRefreshToken,
          user: mockAdminUser,
          isLoading: false,
          error: null,
        });

        return { success: true, user: mockAdminUser };
      }

      throw new Error('이메일 또는 비밀번호가 올바르지 않습니다.');
    } catch (err) {
      const errorMsg = err.message || '로그인 중 오류가 발생했습니다.';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMsg,
      }));
      return { success: false, error: errorMsg };
    }
  }, []);

  // 회원가입 함수
  const signup = useCallback(async (formData) => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const mockUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: formData.name,
        email: formData.email,
        role: 'USER',
        character: formData.character || '하루',
        createdAt: new Date().toISOString(),
      };

      const mockToken = 'mock-jwt-token-' + Date.now();
      const mockRefreshToken = 'mock-refresh-token-' + Date.now();

      localStorage.setItem('accessToken', mockToken);
      localStorage.setItem('refreshToken', mockRefreshToken);
      localStorage.setItem('user', JSON.stringify(mockUser));

      setAuthState({
        accessToken: mockToken,
        refreshToken: mockRefreshToken,
        user: mockUser,
        isLoading: false,
        error: null,
      });

      return { success: true, user: mockUser };
    } catch (err) {
      const errorMsg = err.message || '회원가입 중 오류가 발생했습니다.';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMsg,
      }));
      return { success: false, error: errorMsg };
    }
  }, []);

  // 로그아웃 함수
  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setAuthState({
      accessToken: null,
      refreshToken: null,
      user: null,
      isLoading: false,
      error: null,
    });
  }, []);

  // 토큰 갱신 함수
  const refreshAccessToken = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('갱신 토큰 없음');
      return refreshToken;
    } catch (err) {
      logout();
      return null;
    }
  }, [logout]);

  const value = {
    ...authState,
    login,
    signup,
    logout,
    refreshAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
