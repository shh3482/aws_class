import React, { useState, useEffect, useRef } from 'react';
import './ChatDemo.css';

// ──────────────────────────────────────────────
//  🔧 GPT 연결 설정
//  프로젝트 루트에 .env 파일 만들고 아래 한 줄만 추가하면 실제 AI 동작!
//  REACT_APP_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
//  없으면 자동으로 더미 모드로 fallback
// ──────────────────────────────────────────────
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY || null;
const USE_AI = Boolean(API_KEY);

// GPT에게 "응답 + 선택지 JSON"을 요청하는 함수
async function fetchAIResponse(history, charName, charPersonality) {
  const systemPrompt = `
당신은 "${charName}"이라는 AI 감정 상담 캐릭터입니다.
성격: ${charPersonality}

규칙:
1. 항상 따뜻하고 공감하는 톤으로 응답하세요.
2. 응답은 반드시 아래 JSON 형식으로만 반환하세요. 다른 텍스트는 절대 포함하지 마세요.
3. choices는 사용자가 이어서 할 말로 예상되는 2~3개의 짧은 선택지입니다. (각 15자 이내)

반환 형식:
{
  "message": "AI의 응답 메시지",
  "choices": ["선택지1", "선택지2", "선택지3"]
}
`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...history,
      ],
      temperature: 0.8,
      max_tokens: 400,
      response_format: { type: 'json_object' }, // ✅ 순수 JSON만 반환 강제
    }),
  });

  const data = await response.json();
  const content = data.choices[0].message.content;

  // JSON 파싱 (```json ... ``` 블록 포함 처리)
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : content);
  return parsed; // { message: "...", choices: [...] }
}

// ──────────────────────────────────────────────
//  더미 모드 (API 키 없을 때)
// ──────────────────────────────────────────────
const DUMMY_RESPONSES = [
  {
    message: '오늘 많이 힘들었겠다... 어떤 부분이 제일 힘들었어요? 🥺',
    choices: ['취업 준비가 힘들어요', '관계가 힘들어요', '그냥 다 지쳤어요']
  },
  {
    message: '그렇구나, 많이 쌓인 게 있겠다 😔 언제부터 그런 것 같아요?',
    choices: ['최근 들어서요', '꽤 오래됐어요', '잘 모르겠어요']
  },
  {
    message: '그 감정 충분히 느껴도 괜찮아요 🩷 지금 나한테 말해줘서 고마워요.',
    choices: ['들어줘서 고마워요', '어떻게 해야 할까요?', '그냥 힘들어요']
  },
  {
    message: '포기하지 않는 게 정말 대단한 거예요 💪 잠깐 쉬어도 괜찮아요.',
    choices: ['조금 쉬어볼게요', '근데 불안해요', '고마워요 😊']
  },
  {
    message: '얘기 들어줘서 좋았어요! 🌸 언제든 또 말 걸어줘요~',
    choices: ['응, 또 올게요!', '한 가지만 더요', '고마워요 🐰']
  },
];

const CHAR_CONFIG = {
  rabbit: {
    name: '하루',
    personality: '차분하고 따뜻한 성격. 공감을 잘하고 천천히 말하며 상대방의 감정을 먼저 헤아린다.',
    color: '#6C9EFF',
    img: '/images/rabbit.png',
    initialMessage: '안녕하세요! 저는 하루예요 🐰 오늘 어떠세요?',
    initialChoices: ['힘든 일이 있어요 😔', '괜찮아요! 😊', '그냥 심심해서요 😄'],
  },
  cat: {
    name: '루미',
    personality: '밝고 활발한 성격. 유머 감각이 있고 긍정적인 에너지로 상대방을 북돋아 준다.',
    color: '#FF8FAB',
    img: '/images/cat.png',
    initialMessage: '야옹~ 안녕하세요! 루미예요 🐱 오늘 뭔가 재밌는 일 있었어요?',
    initialChoices: ['별로였어요 😅', '있었어요! ✨', '그냥 평범했어요'],
  },
};

export default function ChatDemo() {
  const [charKey, setCharKey] = useState('rabbit');
  const char = CHAR_CONFIG[charKey];

  const [currentMsg, setCurrentMsg] = useState(char.initialMessage);
  const [currentChoices, setCurrentChoices] = useState(char.initialChoices);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isHovered, setIsHovered] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [choiceAnim, setChoiceAnim] = useState(false);

  // ✅ 직접 입력 - 항상 노출 (토글 없음)
  const [inputText, setInputText] = useState('');

  const [charBounce, setCharBounce] = useState(false);

  const [history, setHistory] = useState([
    { role: 'assistant', content: char.initialMessage }
  ]);

  const typingRef = useRef(null);
  const inputRef = useRef(null);

  // 타이핑 효과
  const startTyping = (text, choices) => {
    setDisplayText('');
    setShowChoices(false);
    setChoiceAnim(false);
    setIsTyping(true);
    let i = 0;
    if (typingRef.current) clearInterval(typingRef.current);
    typingRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingRef.current);
        setIsTyping(false);
        setTimeout(() => {
          setCurrentChoices(choices);
          setShowChoices(true);
          setTimeout(() => setChoiceAnim(true), 50);
        }, 350);
      }
    }, 30);
  };

  useEffect(() => {
    startTyping(char.initialMessage, char.initialChoices);
    setHistory([{ role: 'assistant', content: char.initialMessage }]);
    setInputText('');
  }, [charKey]);

  useEffect(() => () => clearInterval(typingRef.current), []);

  // 메시지 전송 (선택지 클릭 or 직접 입력)
  const sendMessage = async (userText) => {
    if (!userText.trim() || isLoading) return;
    setInputText('');
    setShowChoices(false);
    setChoiceAnim(false);
    setCharBounce(true);
    setTimeout(() => setCharBounce(false), 500);

    const newHistory = [
      ...history,
      { role: 'user', content: userText }
    ];
    setHistory(newHistory);

    if (USE_AI) {
      // ✅ 실제 GPT 모드
      setIsLoading(true);
      try {
        const result = await fetchAIResponse(newHistory, char.name, char.personality);
        setHistory([...newHistory, { role: 'assistant', content: result.message }]);
        setCurrentMsg(result.message);
        startTyping(result.message, result.choices || []);
      } catch (err) {
        console.error('GPT 오류:', err);
        const dummy = DUMMY_RESPONSES[Math.floor(Math.random() * DUMMY_RESPONSES.length)];
        setCurrentMsg(dummy.message);
        startTyping(dummy.message, dummy.choices);
      } finally {
        setIsLoading(false);
      }
    } else {
      // 🔧 더미 모드 - 800ms 딜레이 후 랜덤 응답
      setIsLoading(true);
      setTimeout(() => {
        const dummy = DUMMY_RESPONSES[Math.floor(Math.random() * DUMMY_RESPONSES.length)];
        setCurrentMsg(dummy.message);
        startTyping(dummy.message, dummy.choices);
        setIsLoading(false);
      }, 800);
    }
  };

  const switchChar = (key) => {
    if (key === charKey) return;
    setCharKey(key);
    setInputText('');
  };

  return (
    <section className="pet-demo" id="chat-demo">
      <div className="section-header container">
        <div className="section-badge">🐾 바탕화면 AI 친구 체험</div>
        <h2 className="section-title">
          화면 속 <span className="gradient-text">나의 반려 AI</span>
        </h2>
        <p className="section-subtitle">
          {USE_AI
            ? '실제 AI와 대화해보세요! 선택하거나 직접 입력할 수 있어요 🌸'
            : '캐릭터가 먼저 말을 걸어요. 선택하거나 직접 입력해보세요 🌸'}
        </p>
        {USE_AI && (
          <div className="ai-live-badge">✨ 실제 GPT-4o-mini 연결됨</div>
        )}
      </div>

      <div className="pet-layout container">
        {/* 좌측 사이드바 */}
        <div className="pet-sidebar">
          <div className="pet-info-card">
            <h3 className="pet-info-title">누구와 대화할까요?</h3>
            <div className="char-switch-btns">
              {Object.entries(CHAR_CONFIG).map(([key, cfg]) => (
                <button
                  key={key}
                  className={`char-switch-btn ${charKey === key ? 'active' : ''}`}
                  onClick={() => switchChar(key)}
                  style={{ '--sw-color': cfg.color }}
                >
                  <img src={cfg.img} alt={cfg.name} className="switch-img" />
                  <div className="switch-info">
                    <span className="switch-name">{cfg.name}</span>
                    <span className="switch-desc">
                      {key === 'rabbit' ? '🐰 차분하고 따뜻함' : '🐱 밝고 활발함'}
                    </span>
                  </div>
                  {charKey === key && <span className="switch-active-dot"></span>}
                </button>
              ))}
            </div>
          </div>

          <div className="pet-tip-card">
            <div className="tip-icon">💡</div>
            <p className="tip-text">
              {USE_AI
                ? 'AI가 대화 내용에 맞는 선택지를 실시간으로 만들어줘요!'
                : '캐릭터에 마우스를 올리면 대화 선택지가 나타나요!'}
            </p>
            <div className="tip-steps">
              <div className="tip-step"><span>1</span> 캐릭터가 먼저 말을 걸어요</div>
              <div className="tip-step"><span>2</span> 선택지 클릭 or 직접 입력</div>
              <div className="tip-step"><span>3</span> {USE_AI ? 'AI가 실시간 응답!' : '대화가 이어져요'}</div>
            </div>
            {!USE_AI && (
              <div className="ai-connect-hint">
                <span>🔑</span>
                <span>.env에 <code>REACT_APP_OPENAI_API_KEY</code> 넣으면 실제 AI 연결!</span>
              </div>
            )}
          </div>
        </div>

        {/* 데스크톱 시뮬레이터 */}
        <div className="desktop-frame">
          <div className="frame-bar">
            <div className="frame-dots">
              <span className="fd red"></span>
              <span className="fd yellow"></span>
              <span className="fd green"></span>
            </div>
            <span className="frame-title">🖥️ 내 바탕화면</span>
          </div>

          <div className="frame-screen">
            <div className="desktop-bg">
              <div className="desk-icon">📁 <span>프로젝트</span></div>
              <div className="desk-icon">💻 <span>VS Code</span></div>
              <div className="desk-icon">🌐 <span>Chrome</span></div>
              <div className="desk-icon">📝 <span>노트</span></div>
            </div>

            <div className="bg-window">
              <div className="bw-bar">
                <span className="bw-dot"></span><span className="bw-dot"></span><span className="bw-dot"></span>
                <span className="bw-title">App.jsx — 마음친구 프로젝트</span>
              </div>
              <div className="bw-content">
                <div className="code-line"><span className="cl-num">1</span><span className="cl-code kw">import</span><span className="cl-code"> React </span><span className="cl-code kw">from</span><span className="cl-code str"> 'react'</span></div>
                <div className="code-line"><span className="cl-num">2</span><span className="cl-code kw">import</span><span className="cl-code"> {'{ useState }'} </span><span className="cl-code kw">from</span><span className="cl-code str"> 'react'</span></div>
                <div className="code-line"><span className="cl-num">3</span></div>
                <div className="code-line"><span className="cl-num">4</span><span className="cl-code kw">function </span><span className="cl-code fn">App</span><span className="cl-code">() {'{'}</span></div>
                <div className="code-line"><span className="cl-num">5</span><span className="cl-code">  <span className="kw">return</span> (</span></div>
                <div className="code-line"><span className="cl-num">6</span><span className="cl-code">    &lt;<span className="fn">div</span>&gt;...&lt;/<span className="fn">div</span>&gt;</span></div>
                <div className="code-line code-cursor"><span className="cl-num">7</span><span className="cl-code">  )</span><span className="cursor-blink">|</span></div>
              </div>
            </div>

            {/* ✅ 캐릭터 팝업 */}
            <div
              className={`character-popup ${isHovered ? 'hovered' : ''} ${charBounce ? 'bounce' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ '--char-color': char.color }}
            >
              {/* 말풍선 */}
              <div className={`speech-bubble ${charKey}`}>
                <p className="bubble-text">
                  {isLoading ? '생각 중이에요...' : displayText}
                  {(isTyping || isLoading) && <span className="typing-cursor">▌</span>}
                </p>
              </div>

              {/* hover 힌트 (선택지 없을 때만) */}
              {!showChoices && !isTyping && !isLoading && (
                <div className="hover-hint">마우스를 올려보세요 👆</div>
              )}

              {/* ✅ 선택지 + 직접입력 통합 패널 */}
              {showChoices && (
                <div className={`choice-panel ${choiceAnim ? 'visible' : ''}`}>
                  {/* AI 예상 선택지 버튼들 */}
                  {currentChoices.map((choice, i) => (
                    <button
                      key={i}
                      className="choice-btn"
                      style={{ '--choice-color': char.color, '--choice-delay': `${i * 0.07}s` }}
                      onClick={() => sendMessage(choice)}
                      disabled={isLoading}
                    >
                      {choice}
                    </button>
                  ))}

                  {/* ✅ 직접 입력 - 항상 표시 (별도 버튼 없음) */}
                  <div
                    className="direct-input-wrap always-visible"
                    style={{ '--choice-delay': `${currentChoices.length * 0.07}s` }}
                  >
                    <input
                      ref={inputRef}
                      className="direct-input"
                      type="text"
                      placeholder="직접 입력..."
                      value={inputText}
                      onChange={e => setInputText(e.target.value)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') sendMessage(inputText);
                      }}
                      style={{ '--input-color': char.color }}
                      disabled={isLoading}
                    />
                    <button
                      className="direct-send-btn"
                      onClick={() => sendMessage(inputText)}
                      disabled={!inputText.trim() || isLoading}
                      style={{ background: char.color }}
                    >
                      →
                    </button>
                  </div>
                </div>
              )}

              {/* 캐릭터 이미지 */}
              <div className="char-img-wrap">
                <img src={char.img} alt={char.name} className="char-img" />
                <div className="char-sparkle sp1">✦</div>
                <div className="char-sparkle sp2">✦</div>
                <div className="char-sparkle sp3">✦</div>
              </div>
            </div>

            {/* 태스크바 */}
            <div className="taskbar">
              <div className="taskbar-left"><div className="tb-icon">🪟</div></div>
              <div className="taskbar-center">
                <div className="tb-app active">📝 App.jsx</div>
                <div className="tb-app">🌐 Chrome</div>
              </div>
              <div className="taskbar-right"><span className="tb-time">11:32</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
