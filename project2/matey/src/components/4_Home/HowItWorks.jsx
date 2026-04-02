// src/components/4_Home/HowItWorks.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HowItWorks.css';

const STEPS = [
  {
    number: '01',
    icon: '✨',
    title: '가입하고 바로 시작해요',
    description:
      '복잡한 설치나 긴 설정 없이 계정만 만들면 바로 메이티를 경험할 수 있어요.',
    note: '설정은 최소로',
  },
  {
    number: '02',
    icon: '🐰',
    title: '나와 맞는 메이트를 골라요',
    description:
      '하루, 루미처럼 분위기가 다른 캐릭터 중 지금 내 상태에 더 편한 메이트를 선택해요.',
    note: '분위기부터 맞추기',
  },
  {
    number: '03',
    icon: '💬',
    title: '필요한 순간 자연스럽게 대화해요',
    description:
      '메이티가 먼저 말을 걸어오기도 하고, 내가 먼저 마음 상태를 말해도 부드럽게 이어져요.',
    note: '부담 없이 대화',
  },
  {
    number: '04',
    icon: '📘',
    title: '기록을 다시 보며 정리해요',
    description:
      '웹에서 대화 흐름과 감정 기록을 다시 보면서 내 상태를 조금 더 편하게 돌아볼 수 있어요.',
    note: '흐름을 다시 보기',
  },
];

const HIGHLIGHTS = [
  '복잡한 설정 없이 바로 시작',
  '캐릭터 선택형 대화 경험',
  '부담 없는 공감형 인터페이스',
  '웹에서 기록과 흐름 다시 보기',
];

const PREVIEW_ITEMS = [
  {
    label: '가입',
    copy: '시작 장벽을 낮춰서 바로 경험할 수 있어요.',
  },
  {
    label: '메이트 선택',
    copy: '지금 나와 더 잘 맞는 분위기의 캐릭터를 고를 수 있어요.',
  },
  {
    label: '대화 시작',
    copy: '먼저 다가오거나 내가 먼저 말을 걸 수 있어요.',
  },
  {
    label: '기록 확인',
    copy: '지나간 대화 흐름과 감정 정리를 나중에 다시 볼 수 있어요.',
  },
];

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="matey-how" id="how-it-works">
      <div className="matey-how__ambient matey-how__ambient--one" aria-hidden="true" />
      <div className="matey-how__ambient matey-how__ambient--two" aria-hidden="true" />

      <div className="matey-how__inner">
        <div className="matey-how__header">
          <span className="matey-how__badge">🫶 이용 방법</span>

          <h2 className="matey-how__title">
            메이티는 어렵지 않아요.
            <br />
            <span>처음부터 끝까지 흐름이 아주 자연스러워요</span>
          </h2>

          <p className="matey-how__subtitle">
            설치나 학습보다 경험이 먼저 와닿도록,
            메이티는 시작부터 기록까지 한 번에 이해되는 구조로 만들었어요.
          </p>
        </div>

        <div className="matey-how__journey">
          <div className="matey-how__journey-line" aria-hidden="true" />

          {STEPS.map((step, index) => (
            <article
              className={`matey-how__step matey-how__step--${index + 1}`}
              key={step.number}
            >
              <div className="matey-how__step-head">
                <span className="matey-how__step-badge">STEP {step.number}</span>
                <span className="matey-how__step-icon" aria-hidden="true">
                  {step.icon}
                </span>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <div className="matey-how__step-foot">
                <span className="matey-how__step-note">{step.note}</span>
                {index < STEPS.length - 1 ? (
                  <span className="matey-how__step-arrow" aria-hidden="true">
                    →
                  </span>
                ) : (
                  <span className="matey-how__step-dot" aria-hidden="true" />
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="matey-how__feature-board">
          <div className="matey-how__feature-copy">
            <span className="matey-how__summary-label">한눈에 보는 시작 흐름</span>

            <h3>기능 설명보다, 직접 써보면 바로 감이 오는 구조예요</h3>

            <p>
              메이티는 복잡한 기능을 길게 익혀야 하는 서비스가 아니라,
              가입하고 메이트를 고르고 대화를 시작하는 순간
              자연스럽게 사용 흐름이 이해되도록 설계했어요.
              시작은 가볍고, 대화는 부드럽고, 기록은 다시 보기 쉽게 이어져요.
            </p>

            <div className="matey-how__chips">
              {HIGHLIGHTS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="matey-how__metrics">
              <div className="matey-how__metric">
                <strong>4-step</strong>
                <span>시작부터 다시 보기까지 한 번에</span>
              </div>
              <div className="matey-how__metric">
                <strong>2 mates</strong>
                <span>분위기가 다른 캐릭터 선택</span>
              </div>
              <div className="matey-how__metric">
                <strong>Web recap</strong>
                <span>대화 기록과 흐름을 편하게 확인</span>
              </div>
            </div>

            <div className="matey-how__actions">
              <button
                type="button"
                className="matey-how__button matey-how__button--primary"
                onClick={() => navigate('/signup')}
              >
                무료로 시작하기
              </button>

              <button
                type="button"
                className="matey-how__button matey-how__button--secondary"
                onClick={() => navigate('/download')}
              >
                다운로드
              </button>
            </div>
          </div>

          <div className="matey-how__feature-visual" aria-hidden="true">
            <div className="matey-how__visual-card">
              <div className="matey-how__visual-top">
                <div className="matey-how__visual-traffic">
                  <span />
                  <span />
                  <span />
                </div>
                <strong>Matey Journey Preview</strong>
              </div>

              <div className="matey-how__visual-body">
                <div className="matey-how__visual-pill-row">
                  {STEPS.map((step) => (
                    <span key={step.number}>{step.title}</span>
                  ))}
                </div>

                <div className="matey-how__visual-bubble">
                  처음엔 가볍게 시작하고, 대화는 자연스럽게 이어지고,
                  나중엔 흐름을 다시 돌아볼 수 있어요.
                </div>

                <div className="matey-how__visual-list">
                  {PREVIEW_ITEMS.map((item, index) => (
                    <div className="matey-how__visual-item" key={item.label}>
                      <strong>{String(index + 1).padStart(2, '0')}</strong>
                      <div>
                        <span>{item.label}</span>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="matey-how__floating matey-how__floating--one">
              처음 써도 바로 이해되는 흐름
            </div>
            <div className="matey-how__floating matey-how__floating--two">
              설정은 줄이고 경험은 바로
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
