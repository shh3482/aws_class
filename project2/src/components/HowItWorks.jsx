import React, { useState, useEffect } from 'react';
import './HowItWorks.css';

const steps = [
  {
    step: '01', icon: '💻', color: '#6C9EFF',
    title: '앱 설치',
    desc: '마음친구 데스크톱 앱을 설치하세요. Windows와 macOS를 모두 지원합니다.',
    detail: 'Electron.js 기반으로 가볍게 동작하며, 설치 후 바탕화면에서 바로 실행됩니다.'
  },
  {
    step: '02', icon: '🔑', color: '#FF8FAB',
    title: '회원가입 & 로그인',
    desc: '웹사이트에서 계정을 만들고, 앱과 자동으로 연동됩니다.',
    detail: 'WebSocket으로 실시간 동기화되어 웹과 앱 어디서든 이어서 대화할 수 있어요.'
  },
  {
    step: '03', icon: '🎨', color: '#9B7FFF',
    title: '내 AI 친구 꾸미기',
    desc: '토끼 하루 또는 고양이 루미를 선택하고 성격과 외형을 커스터마이징하세요.',
    detail: '공감 레벨, 대화 스타일, 적극성을 조절해 나만의 상담 파트너를 만들어요.'
  },
  {
    step: '04', icon: '🤖', color: '#FFB347',
    title: '마음친구가 먼저 다가와요',
    desc: '이제부터는 마음친구가 바탕화면에 상주하며 당신의 상태를 감지합니다.',
    detail: '화면을 인식해 맞춤형 말을 걸고, 필요하면 깊은 대화로 이어집니다.'
  }
];

const scenarios = [
  {
    icon: '😤',
    context: '에러 화면 발생',
    bgApp: '💻 VS Code — main.js',
    message: '계속 안 풀리는 거 있어? 잠깐 같이 볼까요? 🛠️',
    choices: ['도움받고 싶어요', '괜찮아요 혼자 할게요'],
    time: '오후 11:32',
    color: '#6C9EFF',
    char: 'rabbit'
  },
  {
    icon: '😔',
    context: '채용 사이트 장시간 접속',
    bgApp: '🌐 사람인 — 채용공고',
    message: '취업 준비 많이 힘들지? 잠깐 쉬면서 얘기할래요? 💙',
    choices: ['힘들어요 얘기할게요', '괜찮아요 계속 볼게요'],
    time: '오후 2:18',
    color: '#FF8FAB',
    char: 'cat'
  },
  {
    icon: '😴',
    context: '새벽 2시 장시간 작업',
    bgApp: '📝 Notion — 보고서 작성',
    message: '벌써 새벽 2시네요... 오늘 많이 수고했어요. 좀 쉬어요 🌙',
    choices: ['조금만 더 할게요', '그럴게요 고마워요 🌙'],
    time: '오전 2:07',
    color: '#9B7FFF',
    char: 'rabbit'
  }
];

function HowItWorks() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showChoices, setShowChoices] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const sc = scenarios[activeScenario];

  // 시나리오 변경 시 타이핑 효과 재실행
  useEffect(() => {
    setDisplayText('');
    setShowChoices(false);
    setAnimKey(k => k + 1);

    const text = sc.message;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowChoices(true), 300);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [activeScenario]);

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="section-header container">
        <div className="section-badge">🚀 시작 방법</div>
        <h2 className="section-title">
          4단계로 <span className="gradient-text">시작하세요</span>
        </h2>
        <p className="section-subtitle">
          설치부터 첫 대화까지 단 5분이면 충분합니다
        </p>
      </div>

      {/* 스텝 카드 */}
      <div className="steps-container container">
        {steps.map((s, i) => (
          <div
            key={i}
            className="step-card"
            style={{ '--step-color': s.color, '--step-delay': `${i * 0.15}s` }}
          >
            <div className="step-number" style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}10` }}>
              {s.step}
            </div>
            <div className="step-icon-wrap" style={{ background: `${s.color}15` }}>
              <span>{s.icon}</span>
            </div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
            <p className="step-detail">{s.detail}</p>
          </div>
        ))}
      </div>

      {/* 시나리오 시연 */}
      <div className="scenario-section container">
        <div className="scenario-text">
          <div className="section-badge" style={{ display: 'inline-flex', marginBottom: '16px' }}>💬 실제 시나리오</div>
          <h3 className="scenario-title">이런 순간에<br /><span className="gradient-text">먼저 다가와요</span></h3>
          <p className="scenario-desc">
            마음친구는 GPT-4o Vision으로 현재 화면 맥락을 이해하고,
            당신에게 가장 필요한 말을 먼저 건네요.
          </p>
          <div className="scenario-tabs">
            {scenarios.map((s, i) => (
              <button
                key={i}
                className={`scenario-tab ${activeScenario === i ? 'active' : ''}`}
                style={{ '--tab-color': s.color }}
                onClick={() => setActiveScenario(i)}
              >
                <span className="tab-icon">{s.icon}</span>
                <span>{s.context}</span>
                {activeScenario === i && <span className="tab-active-dot" style={{ background: s.color }}></span>}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ 리디자인된 데스크톱 시뮬레이터 */}
        <div className="scenario-preview">
          <div className="desktop-simulator">
            {/* 상단 타이틀바 */}
            <div className="simulator-bar">
              <div className="sim-dots">
                <span className="sim-dot red"></span>
                <span className="sim-dot yellow"></span>
                <span className="sim-dot green"></span>
              </div>
              <span className="sim-title">🖥️ 내 바탕화면</span>
              <span className="sim-time">{sc.time}</span>
            </div>

            {/* 화면 */}
            <div className="simulator-screen">
              {/* 배경 앱 창 */}
              <div className="bg-code-window">
                <div className="bcw-bar">
                  <span className="bcw-dot"></span>
                  <span className="bcw-dot"></span>
                  <span className="bcw-dot"></span>
                  <span className="bcw-label">{sc.bgApp}</span>
                </div>
                <div className="bcw-content">
                  <div className="bcw-line"><span className="ln">1</span><span className="lc kw">import</span><span className="lc"> React </span><span className="lc kw">from</span><span className="lc str"> 'react'</span></div>
                  <div className="bcw-line"><span className="ln">2</span><span className="lc kw">const</span><span className="lc fn"> App</span><span className="lc"> = () =&gt; {'{'}</span></div>
                  <div className="bcw-line"><span className="ln">3</span><span className="lc">  <span className="kw">return</span> &lt;<span className="fn">div</span>&gt;...&lt;/<span className="fn">div</span>&gt;</span></div>
                  <div className="bcw-line"><span className="ln">4</span><span className="lc">{'}'}</span></div>
                </div>
              </div>

              {/* ✅ 캐릭터 팝업 — ChatDemo와 동일한 스타일 */}
              <div className="hw-character-popup" key={animKey} style={{ '--char-color': sc.color }}>

                {/* 말풍선 */}
                <div className="hw-speech-bubble" style={{ borderColor: `${sc.color}30` }}>
                  <p className="hw-bubble-text">
                    {displayText}
                    {displayText.length < sc.message.length && (
                      <span className="hw-typing-cursor" style={{ color: sc.color }}>▌</span>
                    )}
                  </p>
                </div>

                {/* 선택지 버튼들 */}
                {showChoices && (
                  <div className="hw-choices">
                    {sc.choices.map((choice, i) => (
                      <button
                        key={i}
                        className="hw-choice-btn"
                        style={{
                          '--btn-color': sc.color,
                          animationDelay: `${i * 0.08}s`
                        }}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                )}

                {/* 캐릭터 이미지 */}
                <div className="hw-char-img-wrap">
                  <img
                    src={sc.char === 'rabbit' ? '/images/rabbit.png' : '/images/cat.png'}
                    alt={sc.char === 'rabbit' ? '하루' : '루미'}
                    className="hw-char-img"
                  />
                  <div className="hw-sparkle s1">✦</div>
                  <div className="hw-sparkle s2">✦</div>
                </div>
              </div>

              {/* 태스크바 */}
              <div className="sim-taskbar">
                <span className="sim-tb-icon">🪟</span>
                <div className="sim-tb-apps">
                  <span className="sim-tb-app active">📝 프로젝트</span>
                  <span className="sim-tb-app">🌐 Chrome</span>
                </div>
                <span className="sim-tb-time">{sc.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
