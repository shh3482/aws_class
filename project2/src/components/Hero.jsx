import React from 'react';
import './Hero.css';

const Hero = ({ onStartChat }) => {
  return (
    <section className="hero" id="hero">
      {/* 배경 Blob */}
      <div className="hero__bg">
        <div className="blob blob--1" />
        <div className="blob blob--2" />
        <div className="blob blob--3" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero__content">
        {/* 상단 배지 */}
        <div className="hero__badge">
          <span className="badge-dot" />
          AI 기반 심리 상담 서비스 오픈 🎉
        </div>

        {/* 메인 타이틀 */}
        <h1 className="hero__title">
          혼자 고민하지 마세요<br />
          <span className="gradient-text">AI가 함께</span> 들어드릴게요
        </h1>

        {/* 서브 텍스트 */}
        <p className="hero__desc">
          24시간 언제든지, 판단 없이 고민을 털어놓으세요.<br />
          마음AI는 당신의 이야기를 진심으로 들어드립니다.
        </p>

        {/* CTA 버튼 */}
        <div className="hero__cta">
          <button className="cta-main" onClick={onStartChat}>
            <span>지금 바로 시작하기</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="cta-sub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            서비스 소개 영상
          </button>
        </div>

        {/* 신뢰 지표 */}
        <div className="hero__stats">
          {[
            { num: '12,000+', label: '누적 상담 수' },
            { num: '98%', label: '사용자 만족도' },
            { num: '24/7', label: '언제든지 이용' },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <strong>{stat.num}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 플로팅 채팅 미리보기 */}
      <div className="hero__preview">
        <div className="chat-preview">
          <div className="chat-preview__header">
            <div className="ai-avatar">🤖</div>
            <div>
              <p className="ai-name">마음AI</p>
              <p className="ai-status"><span className="online-dot"/>온라인</p>
            </div>
          </div>
          <div className="chat-preview__messages">
            <div className="msg msg--ai">
              안녕하세요! 오늘 어떤 고민이 있으신가요? 편하게 말씀해 주세요 😊
            </div>
            <div className="msg msg--user">
              요즘 취업 준비가 너무 힘들어요...
            </div>
            <div className="msg msg--ai typing">
              <span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
