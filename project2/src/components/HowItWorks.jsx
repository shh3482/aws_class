import React, { useState } from 'react';
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
    message: '계속 안 풀리는 거 있어? 잠깐 같이 볼까요? 🛠️',
    time: '오후 11:32',
    color: '#6C9EFF'
  },
  {
    icon: '😔',
    context: '채용 사이트 장시간 접속',
    message: '취업 준비 많이 힘들지? 잠깐 쉬면서 얘기할래요? 💙',
    time: '오후 2:18',
    color: '#FF8FAB'
  },
  {
    icon: '😴',
    context: '새벽 2시 장시간 작업',
    message: '벌써 새벽 2시네요... 오늘 많이 수고했어요. 좀 쉬어요 🌙',
    time: '오전 2:07',
    color: '#9B7FFF'
  }
];

function HowItWorks() {
  const [activeScenario, setActiveScenario] = useState(0);

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
            {scenarios.map((sc, i) => (
              <button
                key={i}
                className={`scenario-tab ${activeScenario === i ? 'active' : ''}`}
                style={{ '--tab-color': sc.color }}
                onClick={() => setActiveScenario(i)}
              >
                <span>{sc.icon}</span>
                <span>{sc.context}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="scenario-preview">
          {/* 바탕화면 시뮬레이터 */}
          <div className="desktop-simulator">
            <div className="simulator-bar">
              <div className="sim-dots">
                <span className="sim-dot red"></span>
                <span className="sim-dot yellow"></span>
                <span className="sim-dot green"></span>
              </div>
              <span className="sim-title">바탕화면</span>
            </div>
            <div className="simulator-screen">
              <div className="bg-app app1">📝 코드 에디터</div>
              <div className="bg-app app2">🌐 {scenarios[activeScenario].context}</div>

              {/* ✅ 마음친구 팝업 - 실제 이미지 사용 */}
              <div className="maum-popup" key={activeScenario}>
                <div className="popup-header">
                  {/* 실제 캐릭터 이미지 */}
                  <div className="popup-char-wrap">
                    <img
                      src="/images/rabbit.png"
                      alt="하루"
                      className="popup-char-img"
                    />
                  </div>
                  <div className="popup-info">
                    <span className="popup-name">하루</span>
                    <span className="popup-status">● 온라인</span>
                  </div>
                  <span className="popup-time">{scenarios[activeScenario].time}</span>
                </div>
                <p className="popup-msg">{scenarios[activeScenario].message}</p>
                <div className="popup-actions">
                  <button className="popup-btn primary" style={{ background: scenarios[activeScenario].color }}>대화하기</button>
                  <button className="popup-btn secondary">나중에</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
