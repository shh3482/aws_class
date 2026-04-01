import React, { useMemo, useState } from 'react';
import './MyPage.css';

const companionOptions = [
  {
    id: 'rabbit',
    name: '하루',
    role: '포근한 토끼 컴패니언',
    image: '/images/rabbit.png',
    intro: '좋은 하루예요. 오늘은 내 프로필과 분위기를 같이 다듬어볼까요?',
    bubble: '좋은 아침이에요. 오늘 프로필에서 어떤 부분을 먼저 정리해볼까요?',
    suggestions: ['닉네임 바꾸기', '분위기 톤 바꾸기', '대화 스타일 조정', '프로필 공개 범위 보기'],
    accentClass: 'is-lavender',
  },
  {
    id: 'cat',
    name: '루미',
    role: '세심한 고양이 컴패니언',
    image: '/images/cat.png',
    intro: '차분하게 하나씩 정리해드릴게요. 원하는 스타일을 말해주셔도 좋아요.',
    bubble: '안녕하세요. 프로필을 더 예쁘고 편하게 바꿔볼까요?',
    suggestions: ['소개 문구 수정', '알림 설정 확인', '보안/개인정보 점검', '캐릭터 바꾸기'],
    accentClass: 'is-peach',
  },
];

const initialProfile = {
  nickname: '마테이',
  statusMessage: '오늘도 천천히, 다정하게.',
  email: 'matey@example.com',
  mbtiTone: '다정한 공감형',
  birthMood: '봄 라벤더 무드',
};

const moodThemes = [
  { id: 'soft-lavender', label: 'Soft Lavender', desc: '은은한 라벤더와 핑크' },
  { id: 'peach-cloud', label: 'Peach Cloud', desc: '복숭아빛 크림 톤' },
  { id: 'sky-mint', label: 'Sky Mint', desc: '하늘빛과 민트의 산뜻함' },
  { id: 'berry-glow', label: 'Berry Glow', desc: '베리 핑크 포인트' },
];

const privacyItems = [
  { title: '프로필 공개 범위', value: '친구만 보기' },
  { title: '대화 기록 표시', value: '나만 보기' },
  { title: '푸시 알림', value: '부드럽게 받기' },
];

const activityCards = [
  {
    title: '이번 주 교감 온도',
    value: '87%',
    desc: '최근 대화 반응과 설정 사용량을 바탕으로 측정했어요.',
  },
  {
    title: '가장 자주 쓰는 말투',
    value: '차분한 공감형',
    desc: '부드러운 톤의 안내와 위로형 응답을 선호하고 있어요.',
  },
  {
    title: '마지막 프로필 정리',
    value: '오늘 오전',
    desc: '상태 메시지와 테마 컬러가 최근에 업데이트되었어요.',
  },
];

function MyPage() {
  const [selectedCompanionId, setSelectedCompanionId] = useState('rabbit');
  const [profile, setProfile] = useState(initialProfile);
  const [selectedTheme, setSelectedTheme] = useState('soft-lavender');
  const [manualMessage, setManualMessage] = useState('');
  const [imageErrorMap, setImageErrorMap] = useState({});
  const [hoveredSuggestionArea, setHoveredSuggestionArea] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const selectedCompanion = useMemo(
    () => companionOptions.find((item) => item.id === selectedCompanionId) || companionOptions[0],
    [selectedCompanionId]
  );

  const handleImageError = (key) => {
    setImageErrorMap((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSuggestionClick = (text) => {
    setSelectedSuggestion(text);
    setManualMessage(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing(false);
    // TODO: 기존 저장 API / 상태관리 로직 연결
    // 예: onSaveProfile?.({ profile, selectedTheme, selectedCompanionId, manualMessage })
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const profilePreviewText = selectedSuggestion || manualMessage || '원하는 분위기나 수정 방향을 자유롭게 적어보세요.';

  return (
    <section className="mypage-pet">
      <div className="mypage-pet__bg mypage-pet__bg--lavender" />
      <div className="mypage-pet__bg mypage-pet__bg--pink" />
      <div className="mypage-pet__bg mypage-pet__bg--blue" />

      <div className="mypage-pet__container">
        <header className="mypage-pet__hero glass-card">
          <div className="mypage-pet__hero-copy">
            <span className="mypage-pet__eyebrow">Pet Companion Profile</span>
            <h1>
              나와 AI 친구의 분위기를
              <br />
              더 다정하게 관리하는 마이페이지
            </h1>
            <p>
              프로필 정보, 대화 말투, 공개 범위, 감정 톤을 한 곳에서 정리해보세요.
              펫 컴패니언이 먼저 말을 걸고, 원하는 방향을 같이 골라주는 구조예요.
            </p>

            <div className="mypage-pet__hero-tags">
              <span>프로필 관리</span>
              <span>대화 톤 조정</span>
              <span>감성 테마</span>
              <span>공개 범위</span>
            </div>
          </div>

          <div className="mypage-pet__hero-visual">
            <div
              className="mypage-pet__speech-wrap"
              onMouseEnter={() => setHoveredSuggestionArea(true)}
              onMouseLeave={() => setHoveredSuggestionArea(false)}
            >
              <div className="mypage-pet__speech glass-bubble">
                <strong>{selectedCompanion.name}</strong>
                <p>{selectedCompanion.bubble}</p>
              </div>

              <div className={`mypage-pet__reply-list ${hoveredSuggestionArea ? 'is-visible' : ''}`}>
                {selectedCompanion.suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`mypage-pet__reply-chip ${selectedSuggestion === item ? 'is-active' : ''}`}
                    onClick={() => handleSuggestionClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className={`mypage-pet__pet-card glass-card ${selectedCompanion.accentClass}`}>
              {!imageErrorMap[selectedCompanion.id] ? (
                <img
                  src={selectedCompanion.image}
                  alt={selectedCompanion.name}
                  className="mypage-pet__pet-image"
                  onError={() => handleImageError(selectedCompanion.id)}
                />
              ) : (
                <div className="mypage-pet__pet-fallback">
                  <strong>{selectedCompanion.name}</strong>
                  <span>이미지를 불러오지 못했어요</span>
                  <small>{selectedCompanion.image}</small>
                </div>
              )}

              <div className="mypage-pet__pet-meta">
                <strong>{selectedCompanion.name}</strong>
                <span>{selectedCompanion.role}</span>
                <p>{selectedCompanion.intro}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mypage-pet__switcher-row">
          <div className="mypage-pet__switcher glass-card">
            <div className="mypage-pet__switcher-head">
              <h2>현재 함께하는 컴패니언</h2>
              <p>프로필 관리 화면에서 기본 응답 스타일을 결정해요.</p>
            </div>

            <div className="mypage-pet__switcher-list">
              {companionOptions.map((companion) => {
                const isBroken = imageErrorMap[`switcher-${companion.id}`];
                return (
                  <button
                    key={companion.id}
                    type="button"
                    className={`mypage-pet__switcher-btn ${
                      selectedCompanionId === companion.id ? 'is-selected' : ''
                    }`}
                    onClick={() => setSelectedCompanionId(companion.id)}
                  >
                    <div className="mypage-pet__switcher-thumb">
                      {!isBroken ? (
                        <img
                          src={companion.image}
                          alt={companion.name}
                          onError={() => handleImageError(`switcher-${companion.id}`)}
                        />
                      ) : (
                        <span>{companion.name}</span>
                      )}
                    </div>
                    <div className="mypage-pet__switcher-text">
                      <strong>{companion.name}</strong>
                      <span>{companion.role}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mypage-pet__duo-card glass-card">
            <div className="mypage-pet__duo-copy">
              <span className="mypage-pet__mini-label">Together Mode</span>
              <h3>토끼와 고양이의 듀얼 케어 무드</h3>
              <p>
                한 명은 다정하게 공감하고, 다른 한 명은 차분하게 정리해주는 식의
                프로필 경험을 연출할 수 있어요.
              </p>
            </div>

            {!imageErrorMap.duo ? (
              <img
                src="/images/rabbit-duo.png"
                alt="토끼와 고양이 듀오"
                className="mypage-pet__duo-image"
                onError={() => handleImageError('duo')}
              />
            ) : (
              <div className="mypage-pet__duo-fallback">
                <strong>듀오 이미지 로딩 실패</strong>
                <span>/images/rabbit-duo.png</span>
              </div>
            )}
          </div>
        </div>

        <div className="mypage-pet__content-grid">
          <form className="mypage-pet__profile glass-card" onSubmit={handleSubmit}>
            <div className="mypage-pet__section-head">
              <div>
                <span className="mypage-pet__mini-label">Profile Edit</span>
                <h2>프로필 기본 정보</h2>
              </div>
              <button type="button" className="mypage-pet__ghost-btn" onClick={handleStartEdit}>
                수정 시작
              </button>
            </div>

            <div className="mypage-pet__form-grid">
              <label className="mypage-pet__field">
                <span>닉네임</span>
                <input
                  type="text"
                  name="nickname"
                  value={profile.nickname}
                  onChange={handleProfileChange}
                  placeholder="닉네임 입력"
                  disabled={!isEditing}
                />
              </label>

              <label className="mypage-pet__field">
                <span>이메일</span>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  placeholder="이메일 입력"
                  disabled={!isEditing}
                />
              </label>

              <label className="mypage-pet__field mypage-pet__field--full">
                <span>상태 메시지</span>
                <input
                  type="text"
                  name="statusMessage"
                  value={profile.statusMessage}
                  onChange={handleProfileChange}
                  placeholder="오늘의 기분이나 소개 문구를 적어보세요"
                  disabled={!isEditing}
                />
              </label>

              <label className="mypage-pet__field">
                <span>대화 톤</span>
                <input
                  type="text"
                  name="mbtiTone"
                  value={profile.mbtiTone}
                  onChange={handleProfileChange}
                  placeholder="예: 다정한 공감형"
                  disabled={!isEditing}
                />
              </label>

              <label className="mypage-pet__field">
                <span>무드 키워드</span>
                <input
                  type="text"
                  name="birthMood"
                  value={profile.birthMood}
                  onChange={handleProfileChange}
                  placeholder="예: 봄 라벤더 무드"
                  disabled={!isEditing}
                />
              </label>
            </div>

            <div className="mypage-pet__section-head mypage-pet__section-head--sub">
              <div>
                <span className="mypage-pet__mini-label">Theme Mood</span>
                <h3>감성 테마 선택</h3>
              </div>
            </div>

            <div className="mypage-pet__theme-grid">
              {moodThemes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className={`mypage-pet__theme-card ${selectedTheme === theme.id ? 'is-selected' : ''}`}
                  onClick={() => setSelectedTheme(theme.id)}
                >
                  <strong>{theme.label}</strong>
                  <span>{theme.desc}</span>
                </button>
              ))}
            </div>

            <div className="mypage-pet__form-actions">
              <button type="submit" className="mypage-pet__primary-btn">
                프로필 저장하기
              </button>
              <button
                type="button"
                className="mypage-pet__secondary-btn"
                onClick={() => {
                  setProfile(initialProfile);
                  setSelectedTheme('soft-lavender');
                  setManualMessage('');
                  setSelectedSuggestion('');
                  setIsEditing(false);
                }}
              >
                기본값으로 되돌리기
              </button>
            </div>
          </form>

          <aside className="mypage-pet__assistant glass-card">
            <div className="mypage-pet__section-head">
              <div>
                <span className="mypage-pet__mini-label">Companion Chat</span>
                <h2>프로필 조정 대화</h2>
              </div>
            </div>

            <div className="mypage-pet__assistant-preview">
              <div className="mypage-pet__assistant-bubble">
                <strong>{selectedCompanion.name}</strong>
                <p>{profilePreviewText}</p>
              </div>
            </div>

            <label className="mypage-pet__chat-input-wrap">
              <span>직접 요청하기</span>
              <div className="mypage-pet__chat-input-row">
                <input
                  type="text"
                  value={manualMessage}
                  onChange={(event) => setManualMessage(event.target.value)}
                  placeholder="예: 소개 문구를 더 부드럽게 바꿔줘"
                />
                <button
                  type="button"
                  className="mypage-pet__chat-send"
                  onClick={() => setSelectedSuggestion(manualMessage)}
                >
                  적용
                </button>
              </div>
            </label>

            <div className="mypage-pet__privacy-list">
              {privacyItems.map((item) => (
                <div key={item.title} className="mypage-pet__privacy-item">
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mypage-pet__insights">
          <div className="mypage-pet__section-head">
            <div>
              <span className="mypage-pet__mini-label">Profile Insights</span>
              <h2>내 프로필 관리 요약</h2>
            </div>
          </div>

          <div className="mypage-pet__insight-grid">
            {activityCards.map((card) => (
              <article key={card.title} className="mypage-pet__insight-card glass-card">
                <span className="mypage-pet__insight-title">{card.title}</span>
                <strong className="mypage-pet__insight-value">{card.value}</strong>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default MyPage;
