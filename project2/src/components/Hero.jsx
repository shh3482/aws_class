import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      {/* 배경 장식 요소들 */}
      <div className="hero-bg">
        <div className="bg-blob blob1"></div>
        <div className="bg-blob blob2"></div>
        <div className="bg-blob blob3"></div>
        <div className="stars">
          <span className="star s1">✦</span>
          <span className="star s2">✦</span>
          <span className="star s3">✦</span>
          <span className="star s4">✦</span>
          <span className="star s5">✦</span>
        </div>
      </div>

      <div className="hero-inner container">
        {/* 텍스트 영역 */}
        <div className="hero-text">
          <div className="hero-badge">
            <span>🤖</span>
            <span>AI 기반 정서 지원 서비스</span>
          </div>

          <h1 className="hero-title">
            먼저 다가가는<br />
            <span className="gradient-text">AI 친구</span>
          </h1>

          <p className="hero-subtitle">
            당신이 힘들다고 말하기 전에, 이미 눈치채고 있어요.<br />
            바탕화면에 상주하며 당신의 마음을 먼저 알아채는 상담 파트너
          </p>

          {/* 특징 뱃지 */}
          <div className="hero-features">
            <div className="feature-badge">
              <span>💬</span>
              <span>24/7 실시간 대화</span>
            </div>
            <div className="feature-badge">
              <span>🧠</span>
              <span>AI 감정 분석</span>
            </div>
            <div className="feature-badge">
              <span>🔒</span>
              <span>완벽한 비밀 보장</span>
            </div>
          </div>

          {/* CTA 버튼들 */}
          <div className="hero-cta">
            <button className="btn-primary-hero">
              <span>무료로 시작하기</span>
              <span className="btn-arrow">→</span>
            </button>
            <div className="download-group">
              <span className="download-label">데스크톱 앱</span>
              <button className="btn-download">
                <span>🪟</span>
                <span>Windows</span>
              </button>
              <button className="btn-download">
                <span>🍎</span>
                <span>macOS</span>
              </button>
            </div>
          </div>

          {/* 신뢰 지표 */}
          <div className="hero-trust">
            <div className="trust-avatars">
              <div className="avatar">🐰</div>
              <div className="avatar">🐱</div>
              <div className="avatar">🌟</div>
              <div className="avatar">💙</div>
            </div>
            <p className="trust-text"><strong>2,400+</strong> 명이 매일 마음친구와 대화 중</p>
          </div>
        </div>

        {/* 캐릭터 & 미리보기 영역 */}
        <div className="hero-visual">
          {/* 메인 캐릭터 카드 */}
          <div className="character-card">
            {/* 배경 링 */}
            <div className="character-glow"></div>

            {/* ✅ 실제 이미지 사용 */}
            <img
              src="/images/rabbit-duo.png"
              alt="마음친구 캐릭터 하루와 루미"
              className="character-duo-img"
            />

            {/* 캐릭터 이름 태그 */}
            <div className="char-names">
              <span className="char-name-tag rabbit-tag">🐰 하루</span>
              <span className="char-name-tag cat-tag">🐱 루미</span>
            </div>

            {/* 말풍선 */}
            <div className="chat-bubble bubble1">
              <span>지금 많이 힘들어 보여요 🥺</span>
            </div>
            <div className="chat-bubble bubble2">
              <span>에러가 계속 나네, 같이 볼까요? 💙</span>
            </div>
          </div>

          {/* 미니 상태 카드 */}
          <div className="status-card card1">
            <span className="status-icon">💚</span>
            <div>
              <div className="status-title">오늘 기분</div>
              <div className="status-value">많이 호전되었어요</div>
            </div>
          </div>
          <div className="status-card card2">
            <span className="status-icon">📊</span>
            <div>
              <div className="status-title">감정 패턴</div>
              <div className="status-value">분석 중...</div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span>아래로 스크롤</span>
      </div>
    </section>
  );
}

export default Hero;
