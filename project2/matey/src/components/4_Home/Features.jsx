import React, { useMemo, useState } from 'react';
import './Features.css';

const FEATURES = [
  {
    id: 'emotion',
    label: '감정 공감',
    icon: '💗',
    title: '지금 마음 상태를 부드럽게 읽어줘요',
    description:
      '짧은 한마디 속 감정 흐름까지 살펴보고, 지금 필요한 반응을 너무 부담스럽지 않게 건네줘요.',
    points: ['감정 흐름 파악', '공감형 응답', '부드러운 피드백'],
  },
  {
    id: 'character',
    label: '캐릭터 대화',
    icon: '🐰',
    title: '내 취향에 맞는 메이트와 이야기할 수 있어요',
    description:
      '차분한 타입, 밝은 타입처럼 성격이 다른 캐릭터와 대화하며 더 편한 분위기를 만들 수 있어요.',
    points: ['성격별 말투', '분위기 선택', '더 편한 대화감'],
  },
  {
    id: 'screen',
    label: '화면 기반 도움',
    icon: '🖥️',
    title: '설명이 어려운 순간엔 화면을 함께 보며 도와줘요',
    description:
      '에러 화면, 과제 화면, 문서 내용처럼 말로 풀기 어려운 상황도 더 빠르게 이해할 수 있어요.',
    points: ['설명 부담 감소', '빠른 상황 파악', '실행 가능한 안내'],
  },
  {
    id: 'record',
    label: '기록 정리',
    icon: '📘',
    title: '대화 흐름과 기록을 나중에 다시 볼 수 있어요',
    description:
      '도움이 됐던 대화, 감정 변화, 기억하고 싶은 포인트를 정리해두고 나중에 다시 꺼내볼 수 있어요.',
    points: ['대화 기록 확인', '감정 흐름 정리', '다시 보기 쉬움'],
  },
];

function Features() {
  const [activeId, setActiveId] = useState(FEATURES[0].id);

  const activeFeature = useMemo(
    () => FEATURES.find((item) => item.id === activeId) || FEATURES[0],
    [activeId]
  );

  return (
    <section className="matey-features" id="features">
      <div className="matey-features__inner">
        <div className="matey-features__header">
          <span className="matey-features__badge">✨ 메이티 핵심 기능</span>
          <h2 className="matey-features__title">
            어렵지 않고,
            <br />
            <span>바로 이해되는 기능만 담았어요</span>
          </h2>
          <p className="matey-features__subtitle">
            메이티는 복잡한 설명보다, 실제로 써봤을 때 편한 경험을 만드는 데 집중했어요.
          </p>
        </div>

        <div className="matey-features__grid">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              type="button"
              className={`matey-features__card ${activeId === feature.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveId(feature.id)}
              onFocus={() => setActiveId(feature.id)}
              onClick={() => setActiveId(feature.id)}
            >
              <span className="matey-features__card-icon">{feature.icon}</span>
              <strong className="matey-features__card-label">{feature.label}</strong>
              <p className="matey-features__card-desc">{feature.description}</p>
            </button>
          ))}
        </div>

        <div className="matey-features__preview">
          <div className="matey-features__preview-main">
            <span className="matey-features__preview-icon">{activeFeature.icon}</span>
            <div>
              <h3>{activeFeature.title}</h3>
              <p>{activeFeature.description}</p>
            </div>
          </div>

          <div className="matey-features__preview-points">
            {activeFeature.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
