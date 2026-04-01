import React from 'react';
import './Features.css';

const featureList = [
  {
    title: '먼저 다가오는 상담 시작',
    desc: '직접 도움을 요청하기 어려운 순간에도, 메이티가 먼저 가볍게 안부를 묻는 구조예요.',
    tag: 'Proactive Care',
    accent: 'lavender',
    image: '/images/rabbit.png',
  },
  {
    title: '화면 맥락을 읽는 공감',
    desc: '에러 화면, 취업 사이트, 늦은 밤 작업 같은 맥락에서 더 맞는 말로 반응할 수 있어요.',
    tag: 'Context Aware',
    accent: 'blue',
    image: '/images/cat.png',
  },
  {
    title: '웹과 데스크톱이 이어지는 경험',
    desc: '홈페이지, 기록, 감정 리포트, 데스크톱 컴패니언이 하나의 서비스처럼 연결됩니다.',
    tag: 'Connected Flow',
    accent: 'pink',
    image: '/images/rabbit-duo.png',
  },
  {
    title: '캐릭터 외형과 성격 설정',
    desc: '말투, 분위기, 반응 강도와 같은 요소를 부드럽고 귀엽게 커스터마이징할 수 있어요.',
    tag: 'Custom Pet Persona',
    accent: 'mint',
    image: '/images/rabbit.png',
  },
  {
    title: '부담 적은 감정 리포트',
    desc: '상담 내용을 너무 무겁지 않게 정리해서, 내 감정 흐름을 한눈에 확인할 수 있어요.',
    tag: 'Soft Insight',
    accent: 'peach',
    image: '/images/cat.png',
  },
  {
    title: '상담사보다 컴패니언 같은 톤',
    desc: '전문가를 흉내내기보다, 편한 친구처럼 조심스럽게 곁에 머무는 AI를 지향합니다.',
    tag: 'Gentle Companion',
    accent: 'lavender',
    image: '/images/rabbit-duo.png',
  },
];

function Features() {
  return (
    <section className="matey-features page-section" id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Why Matey Feels Different</div>
          <h2 className="section-title">
            단순 챗봇이 아니라
            <br />
            <span className="gradient-text">귀엽고 예쁜 AI 펫 컴패니언</span>
          </h2>
          <p className="section-subtitle">
            대화 기술만 강조하는 서비스보다, 먼저 다가오는 감정형 동반자 경험을
            화면 전반에 자연스럽게 녹여냈습니다.
          </p>
        </div>

        <div className="matey-features__grid">
          {featureList.map((feature) => (
            <article
              key={feature.title}
              className={`matey-feature-card matey-feature-card--${feature.accent}`}
            >
              <div className="matey-feature-card__glow" />

              <div className="matey-feature-card__top">
                <span className="matey-feature-card__tag">{feature.tag}</span>
                <div className="matey-feature-card__thumb">
                  <img src={feature.image} alt={feature.title} />
                </div>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>

              <div className="matey-feature-card__bottom">
                <span>Matey Design System</span>
                <span className="arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
