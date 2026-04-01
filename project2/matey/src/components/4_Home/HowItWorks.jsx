import React, { useMemo, useState } from 'react';
import './HowItWorks.css';

const steps = [
  {
    step: '01',
    title: '웹에서 캐릭터와 연결',
    desc: '로그인 후 나에게 맞는 메이티 펫 상담사의 성격과 분위기를 고릅니다.',
  },
  {
    step: '02',
    title: '데스크톱에서 상주 시작',
    desc: '앱을 설치하면 메이티가 화면 한쪽에 자연스럽게 머무르며 함께 있어줍니다.',
  },
  {
    step: '03',
    title: '상황 기반 선제 대화',
    desc: '지친 흐름이나 특정 맥락에서 부담 없이 먼저 안부를 묻습니다.',
  },
  {
    step: '04',
    title: '감정 패턴과 기록 연결',
    desc: '웹 대시보드에서 기록, 리포트, 보안 설정까지 한 번에 확인합니다.',
  },
];

const panels = [
  {
    id: 'desktop',
    title: '데스크톱 상주형 AI 친구',
    tag: 'Desktop Companion',
    image: '/images/rabbit.png',
    heading: '바탕화면에 작은 펫처럼 머무는 메이티',
    desc: '클리피처럼 과하게 방해하지 않고, 눈치 있게 먼저 다가오는 감성형 컴패니언 경험을 목표로 합니다.',
    bullets: ['조용한 상주형 UI', '상황 기반 안부 인사', '부담 적은 대화 시작'],
  },
  {
    id: 'custom',
    title: '외형 · 성격 커스터마이징',
    tag: 'Pet Persona',
    image: '/images/cat.png',
    heading: '나만의 메이티로 설정하는 재미',
    desc: '친한 친구 같은 톤, 차분한 공감형 톤처럼 캐릭터의 분위기와 반응 강도를 취향에 맞게 조정합니다.',
    bullets: ['말투 설정', '성격 무드 조절', '브랜드 캐릭터화'],
  },
  {
    id: 'privacy',
    title: '프라이버시 중심 설계',
    tag: 'Safe by Design',
    image: '/images/rabbit-duo.png',
    heading: '감시 느낌은 줄이고 통제권은 높게',
    desc: '모니터링 토글, 최소 수집, 삭제 기능 같은 요소를 전면에 드러내 심리적 거부감을 줄이는 구조입니다.',
    bullets: ['모니터링 ON/OFF', '최소 수집 원칙', '삭제 / 보관 설정'],
  },
];

function HowItWorks() {
  const [activeId, setActiveId] = useState('desktop');

  const active = useMemo(
    () => panels.find((item) => item.id === activeId) || panels[0],
    [activeId]
  );

  return (
    <section className="matey-how page-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Service Flow</div>
          <h2 className="section-title">
            메이티는 이렇게
            <br />
            <span className="gradient-text">웹과 데스크톱을 연결합니다</span>
          </h2>
          <p className="section-subtitle">
            단순한 상담 페이지를 넘어서, 홈 · 데스크톱 · 설정 · 리포트가 하나의
            작은 펫 서비스처럼 느껴지도록 흐름을 설계했습니다.
          </p>
        </div>

        <div className="matey-how__steps">
          {steps.map((item) => (
            <article key={item.step} className="matey-how__step-card">
              <div className="matey-how__step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="matey-how__showcase">
          <div className="matey-how__left">
            <div className="section-badge">Main Scenario</div>
            <h3 className="matey-how__title">
              상담봇이 아니라
              <br />
              <span className="gradient-text">“나의 작은 펫 상담사”처럼</span>
            </h3>
            <p className="matey-how__desc">
              메이티의 핵심은 채팅창 자체보다, 사용자가 먼저 도움을 요청하지 않아도
              옆에 머물며 부드럽게 먼저 다가오는 경험이에요.
            </p>

            <div className="matey-how__tabs">
              {panels.map((panel) => (
                <button
                  key={panel.id}
                  type="button"
                  className={`matey-how__tab ${activeId === panel.id ? 'is-active' : ''}`}
                  onClick={() => setActiveId(panel.id)}
                >
                  <span>{panel.tag}</span>
                  <strong>{panel.title}</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="matey-how__preview glass-card">
            <div className="matey-how__preview-top">
              <div className="dots">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
              </div>
              <div className="label">{active.tag}</div>
            </div>

            <div className="matey-how__preview-body">
              <div className="matey-how__preview-bubble">
                <span>Matey Note</span>
                <p>{active.heading}</p>
              </div>

              <div className="matey-how__preview-avatar">
                <img src={active.image} alt={active.title} />
              </div>

              <div className="matey-how__preview-content">
                <strong>{active.title}</strong>
                <p>{active.desc}</p>

                <ul>
                  {active.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
