import React, { useEffect, useMemo, useRef, useState } from 'react';
import './ChatPage.css';

const modeList = [
  {
    id: 'comfort',
    label: '다정한 대화',
    hint: '공감 중심',
    mood: 'warm',
    presence: '편안하게 듣는 중',
  },
  {
    id: 'focus',
    label: '정리 도우미',
    hint: '생각 정리',
    mood: 'focus',
    presence: '차분히 정리 중',
  },
  {
    id: 'cheer',
    label: '응원 모드',
    hint: '에너지 업',
    mood: 'happy',
    presence: '밝게 반응하는 중',
  },
  {
    id: 'reflect',
    label: '감정 돌아보기',
    hint: '내면 탐색',
    mood: 'calm',
    presence: '감정 흐름 살펴보는 중',
  },
];

const quickActions = [
  { id: 'q1', text: '오늘 하루가 좀 지쳤어', mode: 'comfort' },
  { id: 'q2', text: '내 감정을 정리해줘', mode: 'focus' },
  { id: 'q3', text: '조금 응원이 필요해', mode: 'cheer' },
  { id: 'q4', text: '이번 주 감정 흐름이 궁금해', mode: 'reflect' },
];

const stageTools = [
  { label: '체크인', desc: '오늘 상태 입력', tone: 'yellow' },
  { label: '감정 달력', desc: '패턴 확인', tone: 'blue' },
  { label: '봇 일기', desc: '대화 요약 저장', tone: 'mint' },
  { label: '리포트', desc: '주간 인사이트', tone: 'pink' },
];

const initialMessages = [
  {
    id: 1,
    role: 'assistant',
    text: '안녕하세요. 오늘은 어떤 마음으로 저를 만나러 왔나요? 편하게 한마디부터 시작해도 괜찮아요.',
    time: '방금 전',
  },
  {
    id: 2,
    role: 'assistant',
    text: '원하면 제가 다정하게 들어줄 수도 있고, 생각을 정리하는 방향으로 도와줄 수도 있어요.',
    time: '방금 전',
  },
];

function buildAssistantReply(mode, userText) {
  const normalized = userText.trim();

  if (mode === 'comfort') {
    if (normalized.includes('지쳤') || normalized.includes('힘들')) {
      return '많이 애썼네요. 지금은 잘 버티고 있다는 사실만으로도 충분히 의미 있어요. 오늘 가장 버거웠던 순간 하나만 천천히 말해줄래요?';
    }
    return '그 마음을 너무 급하게 정리하지 않아도 괜찮아요. 저는 지금 당신의 속도를 맞춰서 천천히 들어줄게요.';
  }

  if (mode === 'focus') {
    return '좋아요. 지금 상태를 짧게 정리해보면 “무엇 때문에 그런지 완전히 모르겠지만 마음이 조금 복잡한 상태”에 가까워 보여요. 가장 크게 영향을 준 사건 하나를 골라볼까요?';
  }

  if (mode === 'cheer') {
    return '좋아요, 오늘은 조금 더 밝은 톤으로 함께 가볼게요. 지금까지도 충분히 잘해오고 있고, 오늘 안에 해낼 수 있는 아주 작은 한 가지부터 같이 잡아보면 어때요?';
  }

  return '감정의 흐름을 천천히 돌아보면, 지금 마음은 단순히 하나의 감정보다 여러 감정이 겹쳐 있는 상태일 수 있어요. 최근 며칠 중 가장 기억에 남는 순간을 하나 떠올려볼까요?';
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.7v4.6l3.2 1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 11.5L19 4l-3.8 16-4.1-5-4.9-1.1L4 11.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function ChatPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [activeMode, setActiveMode] = useState('comfort');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [presence, setPresence] = useState('편안하게 듣는 중');
  const [characterMood, setCharacterMood] = useState('warm');
  const bottomRef = useRef(null);
  const timersRef = useRef([]);

  const activeModeData = useMemo(
    () => modeList.find((item) => item.id === activeMode) || modeList[0],
    [activeMode]
  );

  useEffect(() => {
    setPresence(activeModeData.presence);
    setCharacterMood(activeModeData.mood);
  }, [activeModeData]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const pushAssistantMessage = (text) => {
    setIsTyping(true);
    setPresence('생각을 정리하는 중');

    const timer = setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: 'assistant',
          text,
          time: '지금',
        },
      ]);
      setIsTyping(false);
      setPresence(activeModeData.presence);
    }, 760);

    timersRef.current.push(timer);
  };

  const handleModeChange = (modeId) => {
    setActiveMode(modeId);
  };

  const handleSend = (presetText) => {
    const nextText = typeof presetText === 'string' ? presetText : input.trim();
    if (!nextText) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: 'user',
        text: nextText,
        time: '지금',
      },
    ]);

    setInput('');
    const reply = buildAssistantReply(activeMode, nextText);
    pushAssistantMessage(reply);
  };

  const handleQuickAction = (item) => {
    setActiveMode(item.mode);
    handleSend(item.text);
  };

  return (
    <section className="virtualchat-page">
      <div className="virtualchat-shell">
        <div className="virtualchat-layout">
          <aside className="virtualchat-stage-panel">
            <div className="virtualchat-stage-card">
              <div className="virtualchat-stage-card__top">
                <span className="virtualchat-badge">Virtual Companion</span>
                <span className="virtualchat-status">
                  <span className="dot" />
                  {presence}
                </span>
              </div>

              <div className={`virtualchat-stage virtualchat-stage--${characterMood}`}>
                <div className="virtualchat-stage__glow virtualchat-stage__glow--one" />
                <div className="virtualchat-stage__glow virtualchat-stage__glow--two" />
                <div className="virtualchat-stage__glow virtualchat-stage__glow--three" />

                <div className="virtualchat-orbital virtualchat-orbital--left">
                  <span>감정 인식</span>
                </div>
                <div className="virtualchat-orbital virtualchat-orbital--right">
                  <span>표정 반응</span>
                </div>
                <div className="virtualchat-orbital virtualchat-orbital--bottom">
                  <span>루틴 제안</span>
                </div>

                <div className={`virtualchat-character virtualchat-character--${characterMood}`}>
                  <div className="virtualchat-character__halo" />
                  <div className="virtualchat-character__shadow" />
                  <div className="virtualchat-character__body">
                    <div className="virtualchat-character__head">
                      <span className="eye left" />
                      <span className="eye right" />
                      <span className={`mouth mood-${characterMood}`} />
                      <span className="cheek left" />
                      <span className="cheek right" />
                    </div>

                    <div className="virtualchat-character__torso">
                      <span className="torso-core" />
                    </div>

                    <div className="virtualchat-character__arm virtualchat-character__arm--left" />
                    <div className="virtualchat-character__arm virtualchat-character__arm--right" />
                  </div>
                </div>

                <div className="virtualchat-bubble">
                  <strong>{activeModeData.label}</strong>
                  <p>
                    {activeMode === 'comfort' && '오늘 마음을 천천히 들어드릴게요.'}
                    {activeMode === 'focus' && '흐트러진 생각을 차분하게 정리해볼까요?'}
                    {activeMode === 'cheer' && '좋아요, 조금 더 밝은 에너지로 함께 가볼게요.'}
                    {activeMode === 'reflect' && '감정의 흐름을 같이 살펴보면 힌트가 보여요.'}
                  </p>
                </div>
              </div>

              <div className="virtualchat-modes">
                {modeList.map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    className={`virtualchat-mode-chip ${activeMode === mode.id ? 'is-active' : ''}`}
                    onClick={() => handleModeChange(mode.id)}
                  >
                    <strong>{mode.label}</strong>
                    <small>{mode.hint}</small>
                  </button>
                ))}
              </div>

              <div className="virtualchat-tools">
                {stageTools.map((tool) => (
                  <div
                    key={tool.label}
                    className={`virtualchat-tool-card virtualchat-tool-card--${tool.tone}`}
                  >
                    <strong>{tool.label}</strong>
                    <span>{tool.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <section className="virtualchat-conversation-panel">
            <div className="virtualchat-conversation-card">
              <div className="virtualchat-conversation__header">
                <div>
                  <span className="virtualchat-badge virtualchat-badge--soft">실시간 대화</span>
                  <h1>버추얼 캐릭터와 직접 대화하기</h1>
                  <p>왼쪽 캐릭터의 표정과 상태가 대화 분위기에 맞춰 자연스럽게 반응해요.</p>
                </div>

                <div className="virtualchat-meta">
                  <div className="virtualchat-meta__item">
                    <ClockIcon />
                    <span>대화 지속 중</span>
                  </div>
                  <div className="virtualchat-meta__item">
                    <span className="mini-dot" />
                    <span>{activeModeData.hint}</span>
                  </div>
                </div>
              </div>

              <div className="virtualchat-quick-row">
                {quickActions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="virtualchat-quick-pill"
                    onClick={() => handleQuickAction(item)}
                  >
                    {item.text}
                  </button>
                ))}
              </div>

              <div className="virtualchat-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`virtualchat-message virtualchat-message--${message.role}`}
                  >
                    <div className="virtualchat-message__avatar">
                      {message.role === 'assistant' ? 'AI' : 'ME'}
                    </div>

                    <div className="virtualchat-message__body">
                      <div className="virtualchat-message__meta">
                        <strong>{message.role === 'assistant' ? 'AI Companion' : '나'}</strong>
                        <span>{message.time}</span>
                      </div>
                      <div className="virtualchat-message__bubble">
                        <p>{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="virtualchat-message virtualchat-message--assistant">
                    <div className="virtualchat-message__avatar">AI</div>
                    <div className="virtualchat-message__body">
                      <div className="virtualchat-message__meta">
                        <strong>AI Companion</strong>
                        <span>응답 준비 중</span>
                      </div>
                      <div className="virtualchat-message__bubble virtualchat-message__bubble--typing">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              <form
                className="virtualchat-composer"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
              >
                <div className="virtualchat-composer__box">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="지금 마음이나 생각을 편하게 입력해보세요."
                    rows={1}
                  />
                </div>

                <button type="submit" className="virtualchat-send-btn" aria-label="메시지 전송">
                  <SendIcon />
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
