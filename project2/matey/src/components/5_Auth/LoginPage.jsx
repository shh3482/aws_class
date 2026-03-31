import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (email && password.length >= 6) {
        const mockUser = {
          id: '1',
          email,
          name: email.split('@')[0],
          role: email.includes('admin') ? 'admin' : 'user',
          profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        const mockToken = 'mock-token-' + Date.now();

        login(mockUser, mockToken);
        navigate('/dashboard');
      } else {
        setError('올바른 이메일과 비밀번호(6자 이상)를 입력하세요');
      }
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h1>메이티에 로그인</h1>
            <p>당신의 마음 친구를 만나세요</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="auth-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                placeholder="••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="auth-btn"
              disabled={loading}
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>

          <div className="auth-footer">
            <p>계정이 없으신가요? <a href="/signup">회원가입</a></p>
          </div>

          <div className="auth-demo-info">
            <p>🧪 테스트용: admin@test.com / password123 (관리자)</p>
            <p>👤 테스트용: user@test.com / password123 (일반 사용자)</p>
          </div>
        </div>

        <div className="auth-visual">
          <div className="auth-visual-blob blob1"></div>
          <div className="auth-visual-blob blob2"></div>
          <div className="auth-visual-content">
            <h2>메이티와 함께하는 감정 여정</h2>
            <ul className="auth-benefits">
              <li>🤖 24/7 AI 상담 파트너</li>
              <li>📊 감정 패턴 분석</li>
              <li>🔒 완벽한 프라이버시</li>
              <li>💙 당신을 먼저 이해하는 AI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
