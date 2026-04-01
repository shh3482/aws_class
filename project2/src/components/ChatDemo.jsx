import React, { useMemo, useState } from 'react';
import './ChatDemo.css';

const modes = [
  {
    id: 'checkin',
    name: '체크인',
    emoji: '☀️',
    title: '가볍게 오늘 기분을 열어보는 시작',
    desc: '사용자가 먼저 길게 입력하지 않아도, 메이티가 짧은 선택지를 띄워 대화를 쉽게 시작하게 도와줍니다.',
    image: '/images/rabbit.png',
    bubble: '좋은 아침입니다. 오늘 기분은 어떠신가요?',
    replies: ['괜찮아요', '조금 피곤해요', '마음이 복잡해요', '그냥 이야기할래요'],
    accent: 'lavender',
  },
  {
    id: 'comfort',
    name: '공감',
    emoji: '💗',
    title: '상황에 맞는 부드러운 위로 한마디',
    desc: '막막한 화면 앞에서 메이티가 먼저 다정하게 말을 걸며, 혼자 버티는 시간을 줄여줍니다.',
    image: '/images/cat.png',
    bubble: '오늘 좀 지쳐 보이는데, 잠깐만 쉬면서 얘기해볼까요?',
    replies: ['그래요', '아직 괜찮아요', '위로만 해줘요', '조언도 원해요'],
    accent: 'pink',
  },
  {
    id: 'custom',
    name: '꾸미기',
    emoji: '🎀',
    title: '펫처럼 나에게 맞게 성격과 무드 설정',
    desc: '친한 친구 같은 톤, 차분한 멘토형 톤처럼 캐릭터의 반응을 취향에 맞춰 바꿀 수 있어요.',
    image: '/images/rabbit-duo.png',
    bubble: '오늘은 어떤 친구처럼 옆에 있어주면 좋을까요?',
    replies: ['차분한 톤', '조금 더 밝게', '친구처럼', '정리 중심으로'],
    accent: 'mint',
  },
];

function ChatDemo() {
  const [activeId, setActiveId] = useState('checkin');
  const [hovered, setHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const active = useMemo(
    () => modes.find((item) => item.id === activeId) || modes[0],
    [activeId]
  );

  return (
    <section className="matey-chatdemo page-section" id="character-hub">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Interactive Companion Demo</div>
          <h2 className="section-title">
            말 걸기 전에 망설이게 하지 않는
            <br />
            <span className="gradient-text">작은 펫 같은 상담 경험</span>
          </h2>
          <p className="section-subtitle">
            캐릭터가 먼저 말풍선을 띄우고, 마우스를 올리면 답변 선택지가 주변에 떠오르며,
            마음에 안 들면 바로 입력창으로 넘어갈 수 있게 만들었습니다.
          </p>
        </div>

        <div className="matey-chatdemo__card glass-card">
          <div className="matey-chatdemo__grid">
            <div className="matey-chatdemo__left">
              <div
                className={`matey-chatdemo__stage matey-chatdemo__stage--${active.accent}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="matey-chatdemo__phone-frame" />

                <div className="matey-chatdemo__hub-ring" />

                <div className="matey-chatdemo__bubble">
                  <span>
                    {active.emoji} {active.name}
                  </span>
                  <p>{active.bubble}</p>
                </div>

                <div className="matey-chatdemo__pet-shadow" />
                <div className="matey-chatdemo__pet">
                  <img src={active.image} alt={active.name} />
                </div>

                <div className={`matey-chatdemo__orbit ${hovered ? 'is-visible' : ''}`}>
                  {active.replies.map((reply, index) => (
                    <button
                      key={reply}
                      type="button"
                      className={`matey-chatdemo__reply matey-chatdemo__reply--${index + 1}`}
                      onClick={() => setInputValue(reply)}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              <div className="matey-chatdemo__modes">
                {modes.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    className={`matey-chatdemo__mode-btn ${
                      activeId === mode.id ? 'is-active' : ''
                    }`}
                    onClick={() => setActiveId(mode.id)}
                  >
                    <span className="emoji">{mode.emoji}</span>
                    <div>
                      <strong>{mode.name}</strong>
                      <small>{mode.title}</small>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <aside className="matey-chatdemo__panel">
              <div className="matey-chatdemo__panel-badge">{active.name} Preview</div>

              <h3>{active.title}</h3>
              <p>{active.desc}</p>

              <div className="matey-chatdemo__input-card">
                <label htmlFor="matey-home-message">직접 말 걸기</label>

                <div className="matey-chatdemo__input-row">
                  <input
                    id="matey-home-message"
                    type="text"
                    className="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="예: 오늘은 조금 무기력한 것 같아요."
                  />
                  <button type="button" className="btn btn-primary">
                    보내기
                  </button>
                </div>

                <small>
                  선택지가 마음에 안 들면 직접 입력해도 자연스럽게 이어지도록 설계합니다.
                </small>
              </div>

              <div className="matey-chatdemo__mini-list">
                <div className="mini-card">
                  <strong>Hover Reply</strong>
                  <span>캐릭터 주변에 3~4개 답변 노출</span>
                </div>
                <div className="mini-card">
                  <strong>Glass Mood</strong>
                  <span>유리 같은 카드와 파스텔 광택</span>
                </div>
                <div className="mini-card">
                  <strong>Pet Companion</strong>
                  <span>상담봇보다 작은 친구 같은 인상</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChatDemo;
