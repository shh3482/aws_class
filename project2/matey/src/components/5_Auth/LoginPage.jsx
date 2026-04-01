import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: true,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // 여기에 기존 로그인 API / AuthContext / useAuth 로직 연결
    // 예:
    // await login(form.email, form.password);

    console.log('login form:', form);
  };

  return (
    <section className="auth-shell auth-shell--login">
      <div className="auth-shell__blur auth-shell__blur--one" />
      <div className="auth-shell__blur auth-shell__blur--two" />
      <div className="auth-shell__blur auth-shell__blur--three" />

      <div className="container auth-grid">
        <div className="auth-showcase glass-card">
          <div className="auth-showcase__badge">Welcome Back to Matey</div>

          <h1 className="auth-showcase__title">
            다시,
            <br />
            <span className="gradient-text">나의 AI 펫 친구와 연결하기</span>
          </h1>

          <p className="auth-showcase__desc">
            메이티는 차가운 로그인 화면 대신, 다시 돌아온 사용자를
            작은 펫 친구가 반겨주는 느낌으로 시작합니다.
            오늘의 감정, 지난 대화, 맞춤 리포트가 이 계정에 이어집니다.
          </p>

          <div className="auth-showcase__pet-card">
            <div className="auth-showcase__pet-copy">
              <span className="auth-mini-badge">오늘의 메이트</span>
              <strong>하루가 기다리고 있어요</strong>
              <p>
                “오늘도 와줘서 고마워요.
                무슨 마음이든 천천히 얘기해도 괜찮아요.”
              </p>

              <div className="auth-chip-row">
                <span>감정 기록 이어보기</span>
                <span>데스크톱 펫 연결</span>
                <span>개인화 반응 유지</span>
              </div>
            </div>

            <div className="auth-showcase__pet-visual">
              <img src="/images/rabbit.png" alt="하루" />
              <div className="auth-floating-bubble">
                좋은 아침이에요 ☁️
              </div>
            </div>
          </div>

          <div className="auth-proof-grid">
            <div className="auth-proof-card">
              <strong>Desktop Sync</strong>
              <span>웹과 데스크톱 상태 연동</span>
            </div>
            <div className="auth-proof-card">
              <strong>Gentle UX</strong>
              <span>부담 적은 감정형 인터페이스</span>
            </div>
            <div className="auth-proof-card">
              <strong>Privacy First</strong>
              <span>통제 가능한 모니터링과 기록</span>
            </div>
          </div>
        </div>

        <div className="auth-form-card glass-card">
          <div className="auth-form-card__top">
            <div>
              <span className="auth-form-card__eyebrow">Log In</span>
              <h2>메이티와 다시 만나기</h2>
              <p>이전에 연결한 계정으로 로그인하고, 이어서 대화를 시작해보세요.</p>
            </div>

            <div className="auth-form-card__avatar">
              <img src="/images/cat.png" alt="루미" />
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="login-email">이메일</label>
              <input
                id="login-email"
                type="email"
                className="input"
                placeholder="matey@example.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="login-password">비밀번호</label>
              <input
                id="login-password"
                type="password"
                className="input"
                placeholder="비밀번호를 입력해주세요"
                value={form.password}
                onChange={(e) => handleChange('password', e.target.value)}
              />
            </div>

            <div className="auth-form__row">
              <label className="auth-check">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={(e) => handleChange('remember', e.target.checked)}
                />
                <span>로그인 상태 유지</span>
              </label>

              <button type="button" className="auth-text-btn">
                비밀번호 찾기
              </button>
            </div>

            <button type="submit" className="btn btn-primary auth-submit-btn">
              다시 연결하기
            </button>
          </form>

          <div className="auth-divider">
            <span>또는</span>
          </div>

          <div className="auth-alt-actions">
            <button type="button" className="auth-social-btn">
              Google로 계속하기
            </button>
            <button type="button" className="auth-social-btn">
              Apple로 계속하기
            </button>
          </div>

          <div className="auth-bottom-note">
            아직 메이티가 없다면?
            <Link to="/signup"> AI 친구 연결하러 가기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
