import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="matey-hero">
      <div className="matey-hero__bg blob-1" />
      <div className="matey-hero__bg blob-2" />
      <div className="matey-hero__inner">
        <div className="matey-hero__left">
          <div className="hero-badge">Desktop AI Companion · Web/App Sync</div>

          <h1 className="hero-title">
            힘든 날에도,<br />
            <span>먼저 말을 걸어주는 AI 친구</span>
          </h1>

          <p className="hero-desc">
            메이티는 단순한 상담 챗봇이 아니에요.
            바탕화면에서 조용히 함께 머물며,
            당신의 패턴과 맥락을 이해하고 먼저 다가오는 동반자예요.
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary">무료 체험 시작하기</button>
            <button className="hero-btn secondary">앱 다운로드</button>
          </div>

          <div className="hero-highlights">
            <div className="highlight-card">
              <strong>능동형 대화</strong>
              <span>사용자를 기다리지 않고 먼저 관심을 보여줘요</span>
            </div>
            <div className="highlight-card">
              <strong>상황 인식</strong>
              <span>오래 머문 화면 맥락을 읽고 맞춤형 반응을 해요</span>
            </div>
            <div className="highlight-card">
              <strong>감정 리포트</strong>
              <span>하루의 고민과 감정 패턴을 웹에서 정리해줘요</span>
            </div>
          </div>
        </div>

        <div className="matey-hero__right">
          <div className="companion-card">
            <div className="companion-card__top">
              <img src="/images/rabbit-duo.png" alt="메이티 캐릭터" />
            </div>

            <div className="bubble bubble-main">
              계속 같은 화면에서 멈춰 있었네.
              <br />
              오늘 조금 버거운 날이야?
            </div>

            <div className="bubble bubble-sub">
              잠깐 숨 고르고, 같이 정리해볼까?
            </div>

            <div className="status-pills">
              <span>화면 맥락 인식</span>
              <span>실시간 상호작용</span>
              <span>감정 패턴 분석</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
