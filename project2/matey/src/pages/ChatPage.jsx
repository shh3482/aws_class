import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ChatPage.css';

const mascotProfiles = {
  duo: {
    id: 'duo',
    name: '토끼 & 고양이',
    image: '/images/rabbit-duo.png',
    accent: '#5ea2ff',
    accentSoft: '#eaf4ff',
    intro:
      '오늘 마음은 어떤 속도로 흘러가고 있나요? 토끼와 고양이가 함께 천천히 들어드릴게요.',
    switchMessage:
      '좋아요. 이제부터는 토끼와 고양이가 함께 균형 잡힌 톤으로 대화를 이어갈게요.',
    quickReplies: ['오늘 너무 지쳤어요', '마음이 답답해요', '지금은 그냥 들어줘'],
    vibe: 'balanced',
  },
  rabbit: {
    id: 'rabbit',
    name: '토끼',
    image: '/images/rabbit.png',
    accent: '#6cb6ff',
    accentSoft: '#eef7ff',
    intro:
      '괜찮아요. 서두르지 않아도 돼요. 지금 마음을 가장 부드럽게 느낄 수 있는 단어부터 꺼내볼까요?',
    switchMessage:
      '토끼 모드로 전환했어요. 조금 더 따뜻하고 다정한 말투로 곁에 있어드릴게요.',
    quickReplies: ['위로가 필요해요', '불안해요', '조금 쉬고 싶어요'],
    vibe: 'gentle',
  },
  cat: {
    id: 'cat',
    name: '고양이',
    image: '/images/cat.png',
    accent: '#ffb38a',
    accentSoft: '#fff3ea',
    intro:
      '좋아요. 감정을 너무 크게 설명하지 않아도 괜찮아요. 지금 가장 불편한 지점을 하나만 말해봐요.',
    switchMessage:
      '고양이 모드로 바꿨어요. 조금 더 담백하고 안정적인 톤으로 정리해드릴게요.',
    quickReplies: ['생각이 많아졌어요', '정리가 필요해요', '조용히 대화하고 싶어요'],
    vibe: 'calm',
  },
};

const moodThemes = {
  work: {
    label: 'Work Stress',
    title: '하루 하루 오래 버텼네요',
    prompt: '오늘 제일 무거웠던 순간은 언제였나요?',
    insight: '피로 누적 + 정서적 소진',
    choices: ['피곤함이 커요', '마음이 답답해요', '아무것도 하기 싫어요'],
    guide: '일 이야기부터, 몸의 피로부터, 아니면 사람 관계부터 시작할 수 있어요.',
  },
  rest: {
    label: 'Rest Needed',
    title: '조금 쉬어도 되는 하루예요',
    prompt: '지금 몸이 먼저 쉬고 싶다고 말하고 있나요?',
    insight: '에너지 저하 + 회복 욕구 증가',
    choices: ['누워만 있고 싶어요', '잠이 부족해요', '아무 생각 하기 싫어요'],
    guide: '휴식 리듬을 만드는 대화로 이어갈게요.',
  },
  heart: {
    label: 'Heart Check',
    title: '마음이 복잡하게 얽혀 있네요',
    prompt: '지금 가장 크게 남아 있는 감정 하나만 골라볼까요?',
    insight: '답답함 + 관계 긴장감',
    choices: ['서운함이 남아요', '혼자라는 느낌이에요', '말하고 싶지만 어렵네요'],
    guide: '감정을 이름 붙이는 것부터 차분히 해볼 수 있어요.',
  },
  sleep: {
    label: 'Night Reset',
    title: '오늘 밤은 마음의 속도를 낮춰봐요',
    prompt: '잠들기 전에 머릿속에서 제일 크게 남는 생각은 뭔가요?',
    insight: '과각성 + 반복 사고',
    choices: ['생각이 멈추지 않아요', '불안해서 잠이 안 와요', '몸은 피곤한데 깨어 있어요'],
    guide: '호흡, 정리, 짧은 기록 중 하나를 골라볼 수 있어요.',
  },
};

const stageActions = [
  {
    title: '오늘 감정 정리',
    description: '짧은 문장으로 지금 기분을 정리해보세요.',
    to: '/dashboard',
  },
  {
    title: '대화 기록 보기',
    description: '이전 대화 흐름을 다시 돌아볼 수 있어요.',
    to: '/dashboard/history',
  },
  {
    title: '개인 설정',
    description: '알림 강도와 대화 템포를 조절해보세요.',
    to: '/dashboard/settings',
  },
];

const formatTime = () =>
  new Date().toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });

const createAssistantMessage = (profile, text) => ({
  id: `${Date.now()}-${Math.random()}`,
  sender: 'assistant',
  senderName: profile.name,
  avatar: profile.image,
  text,
  time: formatTime(),
});

const createUserMessage = (text) => ({
  id: `${Date.now()}-${Math.random()}`,
  sender: 'user',
  senderName: '나',
  text,
  time: formatTime(),
});

const buildAssistantReply = (text, profile, activeMood) => {
  const normalized = text.trim().toLowerCase();

  if (
    normalized.includes('지쳐') ||
    normalized.includes('힘들') ||
    normalized.includes('피곤')
  ) {
    return {
      emotion: 'soft',
      text:
        profile.id === 'cat'
          ? `많이 버텼네요. ${activeMood.label} 흐름이 강하게 보여요. 지금은 해결보다 회복이 먼저예요. 오늘 당신을 가장 빨리 지치게 만든 장면 하나만 말해줄래요?`
          : `오늘 정말 오래 버텼네요. 몸과 마음이 같이 지친 느낌이에요. 지금은 잘 해내는 것보다 잠깐 기대어 숨 고르는 게 더 중요해요. 제일 먼저 떠오르는 피곤함의 장면을 하나만 말해볼까요?`,
    };
  }

  if (
    normalized.includes('답답') ||
    normalized.includes('막막') ||
    normalized.includes('불안')
  ) {
    return {
      emotion: 'alert',
      text:
        profile.id === 'rabbit'
          ? `답답함이 꽤 크게 올라와 있네요. 괜찮아요, 지금 바로 정답을 찾지 않아도 돼요. 가슴이 답답한지, 생각이 복잡한지, 사람 때문에 흔들리는지부터 같이 나눠볼게요.`
          : `지금 마음의 압력이 높은 상태예요. 한 번에 다 풀려고 하지 말고, 불안의 원인을 하나만 고르면 더 정리가 쉬워져요. 업무, 관계, 미래 걱정 중 어디에 가까운가요?`,
    };
  }

  if (
    normalized.includes('외로') ||
    normalized.includes('혼자') ||
    normalized.includes('서운')
  ) {
    return {
      emotion: 'warm',
      text:
        profile.id === 'duo'
          ? `혼자 버티는 느낌이 들면 마음이 더 빨리 지쳐요. 지금은 누가 옆에 없다는 사실보다, 어떤 순간이 가장 서운했는지 말해주는 게 도움이 될 수 있어요. 그 장면을 같이 봐볼까요?`
          : `관계에서 남는 감정은 오래 머물죠. 서운함인지, 아쉬움인지, 외로움인지 이름을 붙이면 마음의 결이 조금 선명해져요. 가장 가까운 단어 하나를 골라볼래요?`,
    };
  }

  if (
    normalized.includes('잠') ||
    normalized.includes('새벽') ||
    normalized.includes('밤')
  ) {
    return {
      emotion: 'sleepy',
      text:
        profile.id === 'cat'
          ? `지금은 몸보다 머리가 먼저 깨어 있는 느낌이네요. 잠들기 전 반복되는 생각이 있다면, 그것을 짧게 한 줄로 적는 것만으로도 긴장이 조금 내려갈 수 있어요. 어떤 생각이 맴도나요?`
          : `밤이 되면 감정이 더 크게 들릴 때가 있어요. 괜찮아요. 오늘 밤은 잘 자야 한다는 압박보다, 마음의 소음을 조금 낮추는 데 집중해봐요. 가장 반복되는 생각을 한 문장으로 말해줄래요?`,
    };
  }

  if (normalized.length <= 8) {
    return {
      emotion: 'calm',
      text:
        profile.id === 'rabbit'
          ? `짧게 말해줘도 충분해요. 그 한마디 안에도 오늘의 마음이 들어 있으니까요. 조금만 더 이어서 말해볼까요?`
          : `좋아요. 짧은 표현도 괜찮아요. 지금 감정의 강도를 1에서 10 사이로 말해주면 다음 질문을 더 정확히 고를 수 있어요.`,
    };
  }

  return {
    emotion: 'calm',
    text:
      profile.id === 'duo'
        ? `들려줘서 고마워요. 지금 이야기에는 "${activeMood.insight}" 흐름이 함께 보여요. 당장 해결책을 찾기보다, 먼저 감정을 정리하고 다음으로 필요한 돌봄을 고르는 순서가 좋겠어요. 지금 가장 먼저 다루고 싶은 건 감정, 상황, 사람 중 무엇인가요?`
        : `좋아요. 지금 마음의 결이 조금 보이기 시작했어요. 바로 바꾸려 하기보다 지금 상태를 정확히 이해하는 게 더 중요해요. 다음으로는 감정의 이유를 함께 정리해볼까요?`,
  };
};

function ChatPage() {
  const navigate = useNavigate();
  const [selectedMascot, setSelectedMascot] = useState('duo');
  const [selectedMood, setSelectedMood] = useState('work');
  const [inputValue, setInputValue] = useState('');
  const [typing, setTyping] = useState(false);
  const [stageEmotion, setStageEmotion] = useState('calm');
  const [messages, setMessages] = useState([
    createAssistantMessage(mascotProfiles.duo, mascotProfiles.duo.intro),
  ]);

  const profile = useMemo(
    () => mascotProfiles[selectedMascot],
    [selectedMascot]
  );
  const activeMood = useMemo(() => moodThemes[selectedMood], [selectedMood]);

  const listRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, typing]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    setMessages((prev) => [
      ...prev,
      createAssistantMessage(profile, profile.switchMessage),
    ]);

    setStageEmotion('warm');
    const timer = setTimeout(() => setStageEmotion('calm'), 1200);
    return () => clearTimeout(timer);
  }, [profile]);

  const handleSendMessage = (rawText) => {
    const text = typeof rawText === 'string' ? rawText : inputValue;
    const trimmed = text.trim();

    if (!trimmed || typing) return;

    const userMessage = createUserMessage(trimmed);
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setTyping(true);

    const reply = buildAssistantReply(trimmed, profile, activeMood);
    setStageEmotion(reply.emotion);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        createAssistantMessage(profile, reply.text),
      ]);
      setTyping(false);

      const coolDown = setTimeout(() => setStageEmotion('calm'), 1500);
      return () => clearTimeout(coolDown);
    }, 900);
  };

  const stageCards = [
    {
      label: '선택된 시작 감정',
      value: activeMood.label,
      tone: 'blue',
    },
    {
      label: '감지된 인사이트',
      value: activeMood.insight,
      tone: 'peach',
    },
    {
      label: '대화 가이드',
      value: activeMood.guide,
      tone: 'mint',
    },
  ];

  const suggestionPills = [...activeMood.choices, ...profile.quickReplies].slice(
    0,
    6
  );

  return (
    <div className="chat-page">
      <div className="chat-page__backdrop chat-page__backdrop--one" />
      <div className="chat-page__backdrop chat-page__backdrop--two" />

      <div className="chat-page__container">
        <div className="chat-page__topbar">
          <div className="chat-page__headline">
            <span className="chat-page__eyebrow">Virtual Companion Chat</span>
            <h1>버추얼 캐릭터와 교감하는 대화 공간</h1>
            <p>
              왼쪽 스테이지에서 토끼·고양이 캐릭터와 감정 흐름을 확인하고,
              오른쪽 패널에서 실제 대화를 이어갈 수 있도록 구성했어요.
            </p>
          </div>

          <div className="chat-page__topbar-actions">
            <Link to="/" className="chat-page__ghost-link">
              홈으로
            </Link>
            <Link to="/download" className="chat-page__primary-link">
              앱 다운로드
            </Link>
          </div>
        </div>

        <div className="chat-page__shell">
          <section className="chat-page__stage">
            <div className="chat-page__stage-header">
              <div>
                <span className="chat-page__section-kicker">Character Stage</span>
                <h2>{profile.name} 스테이지</h2>
              </div>
              <span className="chat-page__status-pill">LIVE</span>
            </div>

            <div className={`chat-page__character-frame is-${stageEmotion}`}>
              <div className="chat-page__character-glow" />
              <div className="chat-page__character-ring chat-page__character-ring--one" />
              <div className="chat-page__character-ring chat-page__character-ring--two" />
              <img
                src={profile.image}
                alt={profile.name}
                className="chat-page__character-image"
              />
            </div>

            <div className="chat-page__speech-bubble">
              <span className="chat-page__speech-tag">{activeMood.title}</span>
              <p>{activeMood.prompt}</p>

              <div className="chat-page__speech-choices">
                {activeMood.choices.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    className="chat-page__choice-chip"
                    onClick={() => handleSendMessage(choice)}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </div>

            <div className="chat-page__mascot-switch">
              {Object.values(mascotProfiles).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`chat-page__mascot-chip ${
                    selectedMascot === item.id ? 'is-active' : ''
                  }`}
                  onClick={() => setSelectedMascot(item.id)}
                >
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            <div className="chat-page__mood-switch">
              {Object.entries(moodThemes).map(([key, mood]) => (
                <button
                  key={key}
                  type="button"
                  className={`chat-page__mood-pill ${
                    selectedMood === key ? 'is-active' : ''
                  }`}
                  onClick={() => setSelectedMood(key)}
                >
                  {mood.label}
                </button>
              ))}
            </div>

            <div className="chat-page__stage-cards">
              {stageCards.map((card) => (
                <article
                  key={card.label}
                  className={`chat-page__mini-card tone-${card.tone}`}
                >
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                </article>
              ))}
            </div>

            <div className="chat-page__stage-actions">
              {stageActions.map((action) => (
                <button
                  key={action.title}
                  type="button"
                  className="chat-page__stage-action"
                  onClick={() => navigate(action.to)}
                >
                  <strong>{action.title}</strong>
                  <span>{action.description}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="chat-page__panel">
            <div className="chat-page__panel-header">
              <div>
                <span className="chat-page__section-kicker">Conversation Panel</span>
                <h2>{profile.name}와 대화 중</h2>
              </div>

              <div className="chat-page__panel-badge">
                <img src={profile.image} alt={profile.name} />
                <span>{profile.vibe}</span>
              </div>
            </div>

            <div className="chat-page__starter-row">
              {profile.quickReplies.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="chat-page__starter-pill"
                  onClick={() => handleSendMessage(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="chat-page__message-list" ref={listRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`chat-page__message chat-page__message--${message.sender}`}
                >
                  {message.sender === 'assistant' && (
                    <div className="chat-page__avatar">
                      <img src={message.avatar} alt={message.senderName} />
                    </div>
                  )}

                  <div className="chat-page__message-body">
                    <div className="chat-page__message-meta">
                      <strong>{message.senderName}</strong>
                      <span>{message.time}</span>
                    </div>
                    <div className="chat-page__bubble">{message.text}</div>
                  </div>
                </div>
              ))}

              {typing && (
                <div className="chat-page__message chat-page__message--assistant">
                  <div className="chat-page__avatar">
                    <img src={profile.image} alt={profile.name} />
                  </div>

                  <div className="chat-page__message-body">
                    <div className="chat-page__message-meta">
                      <strong>{profile.name}</strong>
                      <span>{formatTime()}</span>
                    </div>
                    <div className="chat-page__bubble chat-page__bubble--typing">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="chat-page__suggestion-row">
              {suggestionPills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  className="chat-page__suggestion-pill"
                  onClick={() => handleSendMessage(pill)}
                >
                  {pill}
                </button>
              ))}
            </div>

            <form
              className="chat-page__composer"
              onSubmit={(event) => {
                event.preventDefault();
                handleSendMessage(inputValue);
              }}
            >
              <div className="chat-page__composer-input">
                <input
                  type="text"
                  placeholder="지금 마음을 한 문장으로 적어보세요."
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
              </div>

              <button
                type="submit"
                className="chat-page__send-button"
                disabled={!inputValue.trim() || typing}
              >
                보내기
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
