import React, { useMemo, useState } from 'react';
import './Hero.css';

const companions = [
  {
    id: 'rabbit',
    name: '하루',
    image: '/images/rabbit.png',
    mood: '차분하고 다정한 공감형',
    greeting: '좋은 아침입니다. 오늘 기분은 어떠신가요? ☁️😊',
    detail:
      '메이티는 사용자가 먼저 도움을 요청하지 않아도, 부담스럽지 않은 방식으로 먼저 안부를 묻는 AI 펫 상담사예요.',
    chips: ['아침 인사', '감정 체크', '부드러운 시작'],
  },
  {
    id: 'cat',
    name: '루미',
    image: '/images/cat.png',
    mood: '밝고 귀여운 에너지형',
    greeting: '오늘 하루에서 제일 먼저 떠오르는 감정 하나만 말해볼래요? ✨',
    detail:
      '귀엽고 가벼운 톤으로 먼저 다가오고, 말 걸기 부담을 줄여주는 컴패니언형 캐릭터입니다.',
    chips: ['공감 시작', '짧은 대화', '친구 같은 톤'],
  },
];

const heroStats = [
  { label: '대화 시작 부담', value: '낮춤' },
  { label: '상황 인식 기반', value: 'Proactive' },
  { label: '웹 · 데스크톱 연결', value: 'Seamless' },
];

function Hero() {
  const [activeId, setActiveId] = useState('rabbit');

  const active = useMemo(
    () => companions.find((item) => item.id === activeId) || companions[0],
    [activeId]
  );

  return (
    <section className="home-hero" id="home">
      <div className="home-hero__blur home-hero__blur--one" />
      <div className="home-hero__blur home-hero__blur--two" />
      <div className="home-hero__blur home-hero__blur--three" />

      <div className="container home-hero__grid">
        <div className="home-hero__copy">
          <div className="section-badge">Desktop Pet Companion Counseling</div>

          <h1 className="home-hero__title">
            힘들다고 말하기 전에
            <br />
            <span className="gradient-text">먼저 다가오는 AI 펫 상담사</span>
          </h1>

          <p className="home-hero__desc">
            메이티는 흔한 상담 챗봇처럼 입력창 앞에서 기다리지 않습니다.
            바탕화면과 웹에서 함께 머물며, 사용자의 흐름을 가볍게 읽고
            먼저 안부를 묻는 작은 친구 같은 서비스예요.
          </p>

          <div className="home-hero__actions">
            <a href="/signup" className="btn btn-primary">
              메이티 시작하기
            </a>
            <a href="/#character-hub" className="btn btn-secondary">
              캐릭터 체험 보기
            </a>
          </div>

          <div className="home-hero__switch">
            {companions.map((companion) => (
              <button
                key={companion.id}
                type="button"
                className={`home-hero__switch-btn ${
                  activeId === companion.id ? 'is-active' : ''
                }`}
                onClick={() => setActiveId(companion.id)}
              >
                <span className="home-hero__switch-thumb">
                  <img src={companion.image} alt={companion.name} />
                </span>
                <span className="home-hero__switch-copy">
                  <strong>{companion.name}</strong>
                  <small>{companion.mood}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="home-hero__trust">
            {active.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="home-hero__visual">
          <div className="home-hero__card glass-card">
            <div className="home-hero__top">
              <div className="home-hero__live">
                <span className="dot" />
                Matey Live Companion
              </div>

              <div className="home-hero__tabs">
                <span className="active">Desktop</span>
                <span>Emotion</span>
                <span>Care</span>
              </div>
            </div>

            <div className="home-hero__scene">
              <div className="home-hero__bubble">
                <span>{active.name}</span>
                <p>{active.greeting}</p>
              </div>

              <div className="home-hero__desktop">
                <div className="home-hero__desktop-window">
                  <div className="window-top">
                    <div className="window-dots">
                      <span className="red" />
                      <span className="yellow" />
                      <span className="green" />
                    </div>
                    <div className="window-title">Matey Companion</div>
                  </div>

                  <div className="window-body">
                    <div className="chat-line ai">오늘도 오래 버텼죠. 천천히 말해도 괜찮아요.</div>
                    <div className="chat-line user">조금 지치긴 했어요.</div>
                    <div className="chat-line ai">그럴 때는 무리해서 괜찮은 척 안 해도 돼요.</div>
                  </div>
                </div>
              </div>

              <div className="home-hero__pet-shadow" />
              <div className="home-hero__pet">
                <img src={active.image} alt={active.name} />
                <span className="spark spark-1" />
                <span className="spark spark-2" />
                <span className="spark spark-3" />
              </div>
            </div>

            <div className="home-hero__bottom">
              <div className="home-hero__note">
                <strong>{active.name}</strong>
                <p>{active.detail}</p>
              </div>

              <div className="home-hero__stats">
                {heroStats.map((item) => (
                  <div className="home-hero__stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
