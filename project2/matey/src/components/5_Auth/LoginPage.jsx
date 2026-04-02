import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading, error: authError } = useAuth();
  
  const [formData, setFormData] = useState({
    email: 'test@matey.com',
    password: 'test1234',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setLocalError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setLocalError('이메일과 비밀번호를 입력하세요.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setLocalError('올바른 이메일 형식을 입력하세요.');
      return;
    }

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setLocalError(result.error || '로그인에 실패했습니다.');
    }
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">메이티에 로그인</h1>
          <p className="auth-subtitle">당신의 AI 친구를 만나세요</p>

          {(localError || authError) && (
            <div style={{
              padding: '12px 16px',
              background: '#FFE4F0',
              color: '#C53030',
              borderRadius: '8px',
              marginBottom: '20px',
              fontSize: '0.9rem',
            }}>
              {localError || authError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}>
                이메일
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                disabled={isLoading}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-family)',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: 'var(--text-primary)',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}>
                비밀번호
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    paddingRight: '45px',
                    border: '1.5px solid var(--border-color)',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-family)',
                    transition: 'all 0.3s ease',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                  }}
                >
                  {showPassword ? '숨기기' : '보기'}
                </button>
              </div>
            </div>

            <div style={{
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={isLoading}
                style={{
                  cursor: 'pointer',
                }}
              />
              <label htmlFor="rememberMe" style={{
                cursor: 'pointer',
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
              }}>
                로그인 정보 저장
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '14px 20px',
                background: isLoading 
                  ? 'var(--border-color)' 
                  : 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isLoading ? 'none' : 'var(--shadow-md)',
              }}
              onMouseEnter={(e) => !isLoading && (e.target.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>

          <p style={{
            marginTop: '24px',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
          }}>
            아직 계정이 없으신가요?{' '}
            <a 
              onClick={() => navigate('/signup')}
              style={{
                color: 'var(--primary-blue)',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              회원가입
            </a>
          </p>

          <div style={{
            marginTop: '20px',
            padding: '16px',
            background: 'var(--bg-lighter)',
            borderRadius: '10px',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>테스트 계정:</strong>
            <div>일반: test@matey.com / test1234</div>
            <div>관리자: admin@matey.com / admin1234</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
