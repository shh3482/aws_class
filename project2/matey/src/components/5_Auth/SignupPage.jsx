import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const companions = [
  {
    id: 'rabbit',
    name: '하루',
    desc: '차분하고 다정한 공감형',
    image: '/images/rabbit.png',
  },
  {
    id: 'cat',
    name: '루미',
    desc: '밝고 귀여운 에너지형',
    image: '/images/cat.png',
  },
];

function SignupPage() {
  const [form, setForm] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    companion: 'rabbit',
    agree: true,
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
    // 여기에 기존 회원가입 API / AuthContext / useAuth 로직 연결
    // 예:
    // await signup({ ...form });

    console.log('signup form:', form);
  };

  return (
    <section className="auth-shell auth-shell--signup">
      <div className="auth-shell__blur auth-shell__blur--one" />
      <div className="auth-shell__blur auth-shell__blur--two" />
      <div className="auth-shell__blur auth-shell__blur--three" />

      <div className="container auth-grid">
        <div className="auth-showcase glass-card">
          <div className="auth-showcase__badge">First Connection with Matey</div>

          <h1 className="auth-showcase__title">
            나만의
            <br />
            <span className="gradient-text">AI 펫 친구와 첫 연결 시작</span>
          </h1>

          <p className="auth-showcase__desc">
            회원가입은 단순 계정 생성이 아니라,
            메이티 안에서 나와 가장 잘 맞는 작은 AI 친구를 처음 연결하는 과정입니다.
            가볍고 예쁜 온보딩 경험으로 시작해보세요.
          </p>

          <div className="auth-showcase__duo-card">
            <div className="auth-showcase__duo-copy">
              <span className="auth-mini-badge">Matey Companions</span>
              <strong>하루와 루미 중 나에게 더 맞는 친구를 골라보세요</strong>
              <p>
                차분한 공감형, 밝은 에너지형처럼
                캐릭터의 분위기를 고르고 나면 이후 대시보드와 대화 경험도
                더 자연스럽게 이어집니다.
              </p>
            </div>

            <div className="auth-showcase__duo-visual">
              <img src="/images/rabbit-duo.png" alt="Matey companions" />
            </div>
          </div>

          <div className="auth-highlight-list">
            <div className="auth-highlight-item">
              <strong>부담 적은 AI 친구</strong>
              <span>상담사보다 편한 동반자 톤</span>
            </div>
            <div className="auth-highlight-item">
              <strong>데스크톱 상주형 경험</strong>
              <span>웹과 앱을 자연스럽게 연결</span>
            </div>
            <div className="auth-highlight-item">
              <strong>프라이버시 중심 구조</strong>
              <span>통제 가능한 감정 기록과 설정</span>
            </div>
          </div>
        </div>

        <div className="auth-form-card glass-card">
          <div className="auth-form-card__top">
            <div>
              <span className="auth-form-card__eyebrow">Sign Up</span>
              <h2>첫 AI 친구 연결하기</h2>
              <p>계정을 만들고, 메이티 안에서 나와 가장 잘 맞는 친구를 골라보세요.</p>
            </div>

            <div className="auth-form-card__avatar auth-form-card__avatar--large">
              <img src="/images/rabbit-duo.png" alt="Matey duo" />
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="signup-nickname">닉네임</label>
              <input
                id="signup-nickname"
                type="text"
                className="input"
                placeholder="메이티에서 불리고 싶은 이름"
                value={form.nickname}
                onChange={(e) => handleChange('nickname', e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="signup-email">이메일</label>
              <input
                id="signup-email"
                type="email"
                className="input"
                placeholder="matey@example.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>

            <div className="auth-two-grid">
              <div className="auth-field">
                <label htmlFor="signup-password">비밀번호</label>
                <input
                  id="signup-password"
                  type="password"
                  className="input"
                  placeholder="8자 이상 입력"
                  value={form.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                />
              </div>

              <div className="auth-field">
                <label htmlFor="signup-password-confirm">비밀번호 확인</label>
                <input
                  id="signup-password-confirm"
                  type="password"
                  className="input"
                  placeholder="한 번 더 입력"
                  value={form.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                />
              </div>
            </div>

            <div className="auth-field">
              <label>처음 연결할 메이티 친구</label>

              <div className="auth-companion-grid">
                {companions.map((companion) => (
                  <button
                    key={companion.id}
                    type="button"
                    className={`auth-companion-card ${
                      form.companion === companion.id ? 'is-active' : ''
                    }`}
                    onClick={() => handleChange('companion', companion.id)}
                  >
                    <div className="auth-companion-card__thumb">
                      <img src={companion.image} alt={companion.name} />
                    </div>

                    <div className="auth-companion-card__copy">
                      <strong>{companion.name}</strong>
                      <span>{companion.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <label className="auth-check auth-check--agree">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => handleChange('agree', e.target.checked)}
              />
              <span>개인정보 처리 및 메이티 이용약관에 동의합니다.</span>
            </label>

            <button type="submit" className="btn btn-primary auth-submit-btn">
              AI 친구 연결 시작하기
            </button>
          </form>

          <div className="auth-bottom-note">
            이미 계정이 있다면?
            <Link to="/login"> 다시 연결하러 가기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
