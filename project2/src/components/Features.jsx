import React from 'react';
import './Features.css';

const featureList = [
  {
    icon: '🧠',
    title: '심층 공감 AI',
    desc: '단순한 답변이 아닌, 감정을 이해하고 공감하는 대화를 제공합니다.',
    color: '#7C3AED',
  },
  {
    icon: '🔒',
    title: '완전한 익명 보장',
    desc: '모든 대화는 암호화되어 저장되며 개인정보는 절대 공유되지 않습니다.',
    color: '#EC4899',
  },
  {
    icon: '⏰',
    title: '24시간 상시 운영',
    desc: '새벽 3시에도, 주말에도 언제든지 고민을 털어놓을 수 있습니다.',
    color: '#06B6D4',
  },
  {
    icon: '📊',
    title: '감정 흐름 분석',
    desc: '상담 기록을 분석하여 나의 감정 패턴과 변화를 시각화해드립니다.',
    color: '#10B981',
  },
  {
    icon: '🎯',
    title: '맞춤형 솔루션',
    desc: '연애, 취업, 가족, 인간관계 등 카테고리별 전문 상담을 제공합니다.',
    color: '#F59E0B',
  },
  {
    icon: '💬',
    title: '다중 채널 지원',
    desc: '텍스트는 물론 음성 상담도 지원하여 더 편한 방식으로 이용하세요.',
    color: '#8B5CF6',
  },
];

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        {/* 헤더 */}
        <div className="features__header">
          <span className="section-tag">✨ 주요 기능</span>
          <h2 className="section-title">
            왜 <span className="gradient-text">마음AI</span>인가요?
          </h2>
          <p className="section-desc">
            최신 AI 기술과 심리 상담 기법을 결합하여<br />
            가장 따뜻한 디지털 상담 경험을 제공합니다.
          </p>
        </div>

        {/* 카드 그리드 */}
        <div className="features__grid">
          {featureList.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{ '--card-color': f.color }}
            >
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
              <div className="feature-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
