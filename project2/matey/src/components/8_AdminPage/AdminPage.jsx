import React, { useMemo, useState } from 'react';
import './AdminPage.css';

const adminGuides = [
  {
    id: 'rabbit',
    name: '하루 매니저',
    role: '온화한 월드 운영자',
    image: '/images/rabbit.png',
    accentClass: 'is-lavender',
    bubble: '안녕하세요 관리자님. 오늘은 보호가 필요한 유저와 공지 흐름을 먼저 확인해볼까요?',
    intro: '신고 큐, 공지, 세계관 분위기를 다정하게 정리해드릴게요.',
    suggestions: ['신고 대기 검토', '오늘 공지 작성', '캐릭터 정책 보기', '고위험 계정 먼저 보기'],
  },
  {
    id: 'cat',
    name: '루미 감독관',
    role: '차분한 정책 감시자',
    image: '/images/cat.png',
    accentClass: 'is-peach',
    bubble: '오늘 운영 흐름은 안정적이에요. 다만 대화 안전 정책과 신고 응답 시간을 같이 보면 좋겠어요.',
    intro: '위험도 높은 항목과 세부 설정을 정확하게 정리해드릴게요.',
    suggestions: ['정책 위반 로그 보기', '응답 시간 확인', '공지 문안 다듬기', '유저 보호 설정 점검'],
  },
];

const overviewCards = [
  {
    label: '오늘 신규 연결',
    value: '184',
    desc: '새로 AI 친구와 연결된 사용자 수',
    tone: 'lavender',
  },
  {
    label: '신고 대기 건수',
    value: '12',
    desc: '아직 운영자 검토가 필요한 항목',
    tone: 'pink',
  },
  {
    label: '자동 보호 처리율',
    value: '91%',
    desc: '위험 문맥을 자동 완충한 비율',
    tone: 'blue',
  },
  {
    label: '공지 열람 반응',
    value: '76%',
    desc: '최근 3개 공지 평균 확인율',
    tone: 'mint',
  },
];

const reportQueue = [
  {
    id: 'REP-2401',
    severity: 'high',
    user: 'momo_22',
    issue: '공격적 표현 반복',
    detail: '최근 10분 내 반복적으로 강한 부정 표현 사용. 완충 응답 강도 상향 권장.',
    tags: ['대화안전', '즉시검토'],
  },
  {
    id: 'REP-2402',
    severity: 'medium',
    user: 'mintday',
    issue: '야간 과몰입 대화',
    detail: '심야 시간대 장시간 사용 패턴. 휴식 유도 메시지 테스트 적용 가능.',
    tags: ['사용패턴', '가이드추천'],
  },
  {
    id: 'REP-2403',
    severity: 'low',
    user: 'berry.zip',
    issue: '프로필 문구 신고',
    detail: '자기소개 문구 내 자극적 단어 포함. 수정 권고 알림 전송 대기.',
    tags: ['프로필', '완화조치'],
  },
];

const policyCards = [
  {
    title: '컴패니언 선제 멘트 톤',
    status: '안정',
    desc: '첫 인사 문구는 “부드럽게 먼저 말 걸기” 규칙을 유지하고 있어요.',
  },
  {
    title: '유저 보호 응답 레벨',
    status: '조정 필요',
    desc: '심야 과몰입 유형에 대한 휴식 권고 빈도를 조금 높이는 것이 좋아요.',
  },
  {
    title: '프로필 공개 범위 기본값',
    status: '정상',
    desc: '신규 계정은 친구 공개 제한값으로 안전하게 시작하도록 유지 중이에요.',
  },
];

const recentNotices = [
  {
    title: '봄 시즌 테마 업데이트 안내',
    audience: '전체 사용자',
    time: '오늘 09:30',
  },
  {
    title: '야간 보호 응답 정책 미세 조정',
    audience: '운영팀 전용',
    time: '어제 21:10',
  },
  {
    title: '프로필 문구 필터링 문안 개선',
    audience: '테스트 그룹',
    time: '어제 14:20',
  },
];

const audienceOptions = [
  { id: 'all', label: '전체 사용자' },
  { id: 'ops', label: '운영팀 전용' },
  { id: 'beta', label: '테스트 그룹' },
];

function AdminPage() {
  const [selectedGuideId, setSelectedGuideId] = useState('rabbit');
  const [hoveredSpeech, setHoveredSpeech] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [commandInput, setCommandInput] = useState('');
  const [noticeDraft, setNoticeDraft] = useState(
    '오늘의 월드 공지: 컴패니언이 먼저 안부를 묻는 흐름을 더 부드럽게 조정했어요.'
  );
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [imageErrorMap, setImageErrorMap] = useState({});

  const selectedGuide = useMemo(
    () => adminGuides.find((item) => item.id === selectedGuideId) || adminGuides[0],
    [selectedGuideId]
  );

  const handleImageError = (key) => {
    setImageErrorMap((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setCommandInput(suggestion);
  };

  const handleApplyCommand = () => {
    if (!commandInput.trim()) return;
    setSelectedSuggestion(commandInput.trim());
    // TODO: 기존 관리자 검색/필터/명령 처리 로직 연결
  };

  const handleSaveNotice = () => {
    // TODO: 기존 공지 저장 API 연결
    // 예: saveNotice({ audience: selectedAudience, content: noticeDraft })
  };

  const assistantPreview =
    selectedSuggestion || commandInput || '예: 오늘 고위험 신고만 우선 정렬해서 보여줘';

  return (
    <section className="petadmin">
      <div className="petadmin__bg petadmin__bg--lavender" />
      <div className="petadmin__bg petadmin__bg--pink" />
      <div className="petadmin__bg petadmin__bg--blue" />

      <div className="petadmin__container">
        <header className="petadmin__hero glass-card">
          <div className="petadmin__hero-copy">
            <span className="petadmin__eyebrow">Pet Companion World Admin</span>
            <h1>
              펫 컴패니언 세계관을
              <br />
              다정하게 운영하는 관리자 페이지
            </h1>
            <p>
              유저 보호, 신고 검토, 공지 작성, 대화 톤 정책을 하나의 흐름으로 관리하세요.
              관리자도 차가운 콘솔 대신, 캐릭터와 함께 월드 분위기를 조정하는 경험으로 바뀝니다.
            </p>

            <div className="petadmin__hero-tags">
              <span>신고 큐 관리</span>
              <span>공지 스튜디오</span>
              <span>대화 안전 정책</span>
              <span>유저 보호 흐름</span>
            </div>
          </div>

          <div className="petadmin__hero-panel">
            <div
              className="petadmin__speech-zone"
              onMouseEnter={() => setHoveredSpeech(true)}
              onMouseLeave={() => setHoveredSpeech(false)}
            >
              <div className="petadmin__speech glass-bubble">
                <strong>{selectedGuide.name}</strong>
                <p>{selectedGuide.bubble}</p>
              </div>

              <div className={`petadmin__quick-actions ${hoveredSpeech ? 'is-visible' : ''}`}>
                {selectedGuide.suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`petadmin__quick-chip ${selectedSuggestion === item ? 'is-active' : ''}`}
                    onClick={() => handleSuggestionClick(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className={`petadmin__guide-card glass-card ${selectedGuide.accentClass}`}>
              {!imageErrorMap[selectedGuide.id] ? (
                <img
                  src={selectedGuide.image}
                  alt={selectedGuide.name}
                  className="petadmin__guide-image"
                  onError={() => handleImageError(selectedGuide.id)}
                />
              ) : (
                <div className="petadmin__image-fallback">
                  <strong>{selectedGuide.name}</strong>
                  <span>이미지를 불러오지 못했어요</span>
                  <small>{selectedGuide.image}</small>
                </div>
              )}

              <div className="petadmin__guide-meta">
                <strong>{selectedGuide.name}</strong>
                <span>{selectedGuide.role}</span>
                <p>{selectedGuide.intro}</p>
              </div>
            </div>
          </div>
        </header>

        <section className="petadmin__overview">
          <div className="petadmin__overview-grid">
            {overviewCards.map((card) => (
              <article key={card.label} className={`petadmin__overview-card glass-card tone-${card.tone}`}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="petadmin__main-grid">
          <section className="petadmin__panel glass-card">
            <div className="petadmin__section-head">
              <div>
                <span className="petadmin__mini-label">Moderation Queue</span>
                <h2>신고 및 보호 검토 대기열</h2>
              </div>
              <button type="button" className="petadmin__ghost-btn">
                전체 보기
              </button>
            </div>

            <div className="petadmin__queue-list">
              {reportQueue.map((item) => (
                <article key={item.id} className="petadmin__queue-card">
                  <div className="petadmin__queue-top">
                    <div className="petadmin__queue-id-wrap">
                      <strong>{item.id}</strong>
                      <span>@{item.user}</span>
                    </div>
                    <span className={`petadmin__severity petadmin__severity--${item.severity}`}>
                      {item.severity === 'high'
                        ? '높음'
                        : item.severity === 'medium'
                        ? '보통'
                        : '낮음'}
                    </span>
                  </div>

                  <h3>{item.issue}</h3>
                  <p>{item.detail}</p>

                  <div className="petadmin__tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="petadmin__card-actions">
                    <button type="button" className="petadmin__primary-btn">
                      보호 우선 처리
                    </button>
                    <button type="button" className="petadmin__secondary-btn">
                      검토 완료 표시
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="petadmin__panel glass-card">
            <div className="petadmin__section-head">
              <div>
                <span className="petadmin__mini-label">Companion Command</span>
                <h2>운영 명령 입력</h2>
              </div>
            </div>

            <div className="petadmin__assistant-bubble">
              <strong>{selectedGuide.name}</strong>
              <p>{assistantPreview}</p>
            </div>

            <div className="petadmin__command-box">
              <label className="petadmin__field-label">직접 명령하기</label>
              <div className="petadmin__command-row">
                <input
                  type="text"
                  value={commandInput}
                  onChange={(event) => setCommandInput(event.target.value)}
                  placeholder="예: 오늘 고위험 신고만 먼저 보여줘"
                />
                <button type="button" className="petadmin__command-btn" onClick={handleApplyCommand}>
                  적용
                </button>
              </div>
            </div>

            <div className="petadmin__guide-switcher">
              {adminGuides.map((guide) => {
                const broken = imageErrorMap[`switch-${guide.id}`];
                return (
                  <button
                    key={guide.id}
                    type="button"
                    className={`petadmin__switch-btn ${selectedGuideId === guide.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedGuideId(guide.id)}
                  >
                    <div className="petadmin__switch-thumb">
                      {!broken ? (
                        <img
                          src={guide.image}
                          alt={guide.name}
                          onError={() => handleImageError(`switch-${guide.id}`)}
                        />
                      ) : (
                        <span>{guide.name}</span>
                      )}
                    </div>
                    <div className="petadmin__switch-text">
                      <strong>{guide.name}</strong>
                      <span>{guide.role}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>

        <div className="petadmin__bottom-grid">
          <section className="petadmin__panel glass-card">
            <div className="petadmin__section-head">
              <div>
                <span className="petadmin__mini-label">World Policies</span>
                <h2>펫 세계관 운영 정책</h2>
              </div>
              <button type="button" className="petadmin__ghost-btn">
                정책 수정
              </button>
            </div>

            <div className="petadmin__policy-grid">
              {policyCards.map((policy) => (
                <article key={policy.title} className="petadmin__policy-card">
                  <div className="petadmin__policy-top">
                    <strong>{policy.title}</strong>
                    <span>{policy.status}</span>
                  </div>
                  <p>{policy.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="petadmin__panel glass-card">
            <div className="petadmin__section-head">
              <div>
                <span className="petadmin__mini-label">Notice Studio</span>
                <h2>월드 공지 스튜디오</h2>
              </div>
            </div>

            <div className="petadmin__notice-hero">
              {!imageErrorMap.duo ? (
                <img
                  src="/images/rabbit-duo.png"
                  alt="토끼와 고양이 듀오"
                  className="petadmin__duo-image"
                  onError={() => handleImageError('duo')}
                />
              ) : (
                <div className="petadmin__image-fallback petadmin__image-fallback--duo">
                  <strong>듀오 이미지 로딩 실패</strong>
                  <small>/images/rabbit-duo.png</small>
                </div>
              )}

              <div className="petadmin__notice-copy">
                <strong>오늘의 공지 작성</strong>
                <p>
                  전체 사용자/운영팀/테스트 그룹별로 다른 톤의 공지를 작성하고,
                  펫 컴패니언의 말투를 유지한 채 배포할 수 있어요.
                </p>
              </div>
            </div>

            <div className="petadmin__audience-row">
              {audienceOptions.map((audience) => (
                <button
                  key={audience.id}
                  type="button"
                  className={`petadmin__audience-chip ${
                    selectedAudience === audience.id ? 'is-selected' : ''
                  }`}
                  onClick={() => setSelectedAudience(audience.id)}
                >
                  {audience.label}
                </button>
              ))}
            </div>

            <label className="petadmin__field-label">공지 문안</label>
            <textarea
              className="petadmin__textarea"
              value={noticeDraft}
              onChange={(event) => setNoticeDraft(event.target.value)}
              placeholder="공지 내용을 입력하세요"
            />

            <div className="petadmin__card-actions">
              <button type="button" className="petadmin__primary-btn" onClick={handleSaveNotice}>
                공지 저장
              </button>
              <button type="button" className="petadmin__secondary-btn">
                미리보기
              </button>
            </div>

            <div className="petadmin__notice-list">
              {recentNotices.map((notice) => (
                <div key={`${notice.title}-${notice.time}`} className="petadmin__notice-item">
                  <div>
                    <strong>{notice.title}</strong>
                    <span>{notice.audience}</span>
                  </div>
                  <time>{notice.time}</time>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
