import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './AuthPage.css';

function SignupPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    agreeTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password || !formData.name) {
      setError('모든 필드를 입력하세요');
      return;
    }

    if (formData.password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다');
      return;
    }

    if (!formData.agreeTerms) {
      setError('약관에 동의해주세요');
      return;
    }

    setLoading(true);

    try {
      const mockUser = {
        id: Date.now().toString(),
        email: formData.email,
        name: formData.name,
        role: 'user',
        createdAt: new Date().toISOString(),
        profileImage: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.email}`
      };
      const mockToken = 'mock-token-' + Date.now();

      login(mockUser, mockToken);
      navigate('/dashboard');
    } catch (err) {
      setError('회원가입 중 오류가 발생했습니다');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-visual">
          <div className="auth-visual-blob blob1"></div>
          <div className="auth-visual-blob blob2"></div>
          <div className="auth-visual-content">
            <h2>메이티와 시작하는 변화</h2>
            <ul className="auth-benefits">
              <li>🎯 맞춤형 감정 상담</li>
              <li>💬 자유로운 표현</li>
              <li>🌟 성장의 기록</li>
              <li>🔐 비밀 보호</li>
            </ul>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-header">
            <h1>메이티 회원가입</h1>
            <p>당신의 마음 친구를 만나보세요</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="auth-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                id="name"
                type="text"
                placeholder="홍길동"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                placeholder="••••••"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group checkbox">
              <input
                id="agreeTerms"
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                disabled={loading}
              />
              <label htmlFor="agreeTerms">
                <a href="#terms">이용약관</a>과 <a href="#privacy">개인정보 처리방침</a>에 동의합니다
              </label>
            </div>

            <button
              type="submit"
              className="auth-btn"
              disabled={loading}
            >
              {loading ? '가입 중...' : '회원가입'}
            </button>
          </form>

          <div className="auth-footer">
            <p>이미 계정이 있으신가요? <a href="/login">로그인</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
