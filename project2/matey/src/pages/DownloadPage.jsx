import React from 'react';
import { Link } from 'react-router-dom';

const downloadTargets = [
  {
    key: 'windows',
    title: 'Windows Desktop',
    badge: '권장 환경',
    image: '/images/rabbit.png',
    accent: 'blue',
    description:
      '가장 안정적으로 사용할 수 있는 기본 데스크톱 버전이에요. 대화 기록, 감정 리포트, 알림 기능을 넓은 화면에서 편하게 사용할 수 있어요.',
    status: '설치 파일 연결 준비',
  },
  {
    key: 'mac',
    title: 'macOS Desktop',
    badge: '곧 연결',
    image: '/images/cat.png',
    accent: 'peach',
    description:
      '맥 환경에 맞춘 부드러운 사용 흐름으로 준비 중이에요. 토끼·고양이 캐릭터와의 대화를 더 큰 화면에서 자연스럽게 이어갈 수 있어요.',
    status: '출시 알림 신청 가능',
  },
];

const installSteps = [
  {
    title: '설치 버전 선택',
    text: '사용 중인 운영체제에 맞는 버전을 확인하고 다운로드 준비 상태를 먼저 살펴보세요.',
  },
  {
    title: '계정 연결',
    text: '로그인 계정과 연동하면 홈, 채팅, 기록 흐름을 더 자연스럽게 이어갈 수 있어요.',
  },
  {
    title: '대화 환경 시작',
    text: '토끼·고양이 캐릭터를 선택하고 대화 템포와 알림 강도를 취향에 맞게 조절할 수 있어요.',
  },
];

const supportItems = [
  {
    title: '감정 대화 이어쓰기',
    text: '웹에서 나누던 대화를 데스크톱에서도 자연스럽게 이어갈 수 있도록 확장할 수 있어요.',
  },
  {
    title: '리포트 더 크게 보기',
    text: '감정 흐름, 기록, 추천 루틴 같은 내용을 더 넓은 화면에서 편안하게 볼 수 있어요.',
  },
  {
    title: '몰입형 캐릭터 경험',
    text: '토끼와 고양이의 표정, 말풍선, 반응 애니메이션을 데스크톱 환경에 맞게 더 풍부하게 보여줄 수 있어요.',
  },
];

function DownloadPage() {
  return (
    <div className="download-page">
      <style>{`
        .download-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 56px 24px 96px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.92), transparent 28%),
            linear-gradient(180deg, #e8f5ff 0%, #dff0ff 50%, #fff8f1 100%);
        }

        .download-page__glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(18px);
          pointer-events: none;
          opacity: 0.7;
        }

        .download-page__glow--one {
          top: 80px;
          left: -100px;
          width: 320px;
          height: 320px;
          background: rgba(94, 162, 255, 0.18);
        }

        .download-page__glow--two {
          right: -70px;
          bottom: 120px;
          width: 280px;
          height: 280px;
          background: rgba(255, 179, 138, 0.2);
        }

        .download-page__container {
          position: relative;
          z-index: 1;
          max-width: 1240px;
          margin: 0 auto;
        }

        .download-page__hero {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
          gap: 28px;
          align-items: center;
          margin-bottom: 32px;
        }

        .download-page__hero-panel,
        .download-page__visual-panel,
        .download-page__section-card,
        .download-page__bottom-banner {
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.66);
          box-shadow: 0 28px 60px rgba(91, 120, 164, 0.14);
          backdrop-filter: blur(20px);
        }

        .download-page__hero-panel {
          padding: 38px 36px;
        }

        .download-page__visual-panel {
          position: relative;
          min-height: 520px;
          overflow: hidden;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.96), rgba(234,244,255,0.82) 48%, rgba(255,243,234,0.78) 100%);
        }

        .download-page__eyebrow,
        .download-page__section-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          padding: 0 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(94, 162, 255, 0.16);
          color: #4d86d8;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .download-page__title {
          margin: 18px 0 14px;
          font-size: clamp(2.3rem, 4.4vw, 4.2rem);
          line-height: 1.08;
          color: #1f2a44;
          letter-spacing: -0.03em;
        }

        .download-page__description {
          margin: 0;
          font-size: 1rem;
          line-height: 1.85;
          color: #5e6883;
          max-width: 620px;
        }

        .download-page__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .download-page__primary-button,
        .download-page__secondary-button,
        .download-page__inline-link,
        .download-page__mini-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        .download-page__primary-button {
          color: #ffffff;
          background: linear-gradient(135deg, #ffb38a 0%, #ff9f73 100%);
          box-shadow: 0 18px 30px rgba(255, 159, 115, 0.22);
        }

        .download-page__secondary-button {
          color: #315eaa;
          background: rgba(239, 247, 255, 0.94);
          border: 1px solid rgba(94, 162, 255, 0.12);
          box-shadow: 0 12px 20px rgba(94, 162, 255, 0.08);
        }

        .download-page__primary-button:hover,
        .download-page__secondary-button:hover,
        .download-page__inline-link:hover,
        .download-page__mini-link:hover {
          transform: translateY(-2px);
        }

        .download-page__note {
          margin-top: 24px;
          padding: 18px 20px;
          border-radius: 24px;
          background: linear-gradient(180deg, #eef6ff 0%, #f8fbff 100%);
          border: 1px solid rgba(94, 162, 255, 0.1);
        }

        .download-page__note strong {
          display: block;
          margin-bottom: 8px;
          color: #2d4573;
          font-size: 0.95rem;
        }

        .download-page__note p {
          margin: 0;
          color: #61708f;
          font-size: 0.94rem;
          line-height: 1.7;
        }

        .download-page__visual-orbit {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .download-page__visual-ring {
          position: absolute;
          border-radius: 999px;
          border: 1px dashed rgba(94, 162, 255, 0.18);
        }

        .download-page__visual-ring--one {
          width: 240px;
          height: 240px;
          top: 86px;
          left: 50%;
          transform: translateX(-50%);
        }

        .download-page__visual-ring--two {
          width: 340px;
          height: 340px;
          top: 34px;
          left: 50%;
          transform: translateX(-50%);
          border-color: rgba(255, 179, 138, 0.24);
          animation: downloadSpin 18s linear infinite;
        }

        .download-page__visual-core {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .download-page__visual-image {
          width: min(88%, 420px);
          max-height: 360px;
          object-fit: contain;
          filter: drop-shadow(0 24px 34px rgba(94, 162, 255, 0.18));
          animation: downloadFloat 5s ease-in-out infinite;
        }

        .download-page__bubble {
          position: absolute;
          z-index: 2;
          max-width: 240px;
          padding: 16px 18px;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 18px 32px rgba(83, 109, 146, 0.12);
          color: #2d3956;
          font-size: 0.95rem;
          line-height: 1.65;
        }

        .download-page__bubble::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          background: #ffffff;
          transform: rotate(45deg);
          border-radius: 4px;
        }

        .download-page__bubble--top {
          top: 56px;
          right: 24px;
        }

        .download-page__bubble--top::after {
          bottom: -8px;
          left: 28px;
        }

        .download-page__bubble--bottom {
          left: 24px;
          bottom: 42px;
        }

        .download-page__bubble--bottom::after {
          top: -8px;
          right: 32px;
        }

        .download-page__section-card {
          padding: 30px;
          margin-top: 24px;
        }

        .download-page__section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 20px;
        }

        .download-page__section-heading h2 {
          margin: 12px 0 0;
          font-size: 1.9rem;
          color: #24324e;
        }

        .download-page__section-heading p {
          margin: 10px 0 0;
          color: #67748f;
          line-height: 1.7;
        }

        .download-page__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .download-page__download-card {
          border-radius: 28px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(223, 236, 255, 0.9);
          box-shadow: 0 18px 30px rgba(91, 120, 164, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .download-page__download-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 34px rgba(91, 120, 164, 0.12);
        }

        .download-page__download-card-head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .download-page__icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .download-page__icon-wrap--blue {
          background: linear-gradient(135deg, rgba(94, 162, 255, 0.16) 0%, #ffffff 100%);
        }

        .download-page__icon-wrap--peach {
          background: linear-gradient(135deg, rgba(255, 179, 138, 0.2) 0%, #ffffff 100%);
        }

        .download-page__icon-wrap img {
          width: 78%;
          height: 78%;
          object-fit: contain;
        }

        .download-page__badge {
          display: inline-flex;
          min-height: 30px;
          align-items: center;
          justify-content: center;
          padding: 0 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .download-page__badge--blue {
          background: rgba(94, 162, 255, 0.12);
          color: #4a83d9;
        }

        .download-page__badge--peach {
          background: rgba(255, 179, 138, 0.18);
          color: #b86a36;
        }

        .download-page__download-card h3 {
          margin: 10px 0 0;
          font-size: 1.25rem;
          color: #273451;
        }

        .download-page__download-card p {
          margin: 0;
          color: #65728f;
          line-height: 1.75;
        }

        .download-page__status {
          display: inline-flex;
          margin-top: 18px;
          color: #50627f;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .download-page__download-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .download-page__disabled-button {
          min-height: 48px;
          padding: 0 18px;
          border: 0;
          border-radius: 999px;
          background: #e8edf6;
          color: #91a0bb;
          font-weight: 800;
          cursor: not-allowed;
        }

        .download-page__inline-link {
          color: #315eaa;
          background: rgba(239, 247, 255, 0.94);
          border: 1px solid rgba(94, 162, 255, 0.12);
        }

        .download-page__steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .download-page__step-card {
          position: relative;
          padding: 24px;
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,251,255,0.92) 100%);
          border: 1px solid rgba(230, 238, 252, 0.95);
          box-shadow: 0 16px 28px rgba(91, 120, 164, 0.08);
        }

        .download-page__step-number {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(135deg, #5ea2ff 0%, #85bbff 100%);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 900;
          box-shadow: 0 14px 24px rgba(94, 162, 255, 0.2);
        }

        .download-page__step-card h3 {
          margin: 16px 0 10px;
          font-size: 1.08rem;
          color: #283553;
        }

        .download-page__step-card p {
          margin: 0;
          color: #667490;
          line-height: 1.75;
        }

        .download-page__bottom-banner {
          margin-top: 24px;
          padding: 30px;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
          gap: 24px;
          align-items: center;
        }

        .download-page__bottom-banner h2 {
          margin: 12px 0 12px;
          font-size: 1.9rem;
          color: #24324e;
        }

        .download-page__bottom-banner p {
          margin: 0;
          color: #64728e;
          line-height: 1.8;
        }

        .download-page__support-list {
          display: grid;
          gap: 12px;
        }

        .download-page__support-item {
          padding: 18px 18px 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(233, 239, 248, 0.96);
          box-shadow: 0 14px 22px rgba(91, 120, 164, 0.07);
        }

        .download-page__support-item strong {
          display: block;
          color: #2a3653;
          margin-bottom: 6px;
          font-size: 0.98rem;
        }

        .download-page__support-item span {
          display: block;
          color: #697792;
          line-height: 1.65;
          font-size: 0.92rem;
        }

        .download-page__banner-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }

        .download-page__mini-link {
          min-height: 48px;
          padding: 0 18px;
          color: #7c4a26;
          background: rgba(255, 244, 234, 0.96);
          border: 1px solid rgba(255, 179, 138, 0.2);
        }

        @keyframes downloadFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes downloadSpin {
          from {
            transform: translateX(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        @media (max-width: 1100px) {
          .download-page__hero,
          .download-page__bottom-banner {
            grid-template-columns: 1fr;
          }

          .download-page__steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 860px) {
          .download-page {
            padding: 36px 16px 72px;
          }

          .download-page__hero-panel,
          .download-page__visual-panel,
          .download-page__section-card,
          .download-page__bottom-banner {
            border-radius: 24px;
          }

          .download-page__hero-panel,
          .download-page__section-card,
          .download-page__bottom-banner {
            padding: 22px;
          }

          .download-page__visual-panel {
            min-height: 420px;
          }

          .download-page__grid {
            grid-template-columns: 1fr;
          }

          .download-page__section-heading {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .download-page__title {
            font-size: 2.2rem;
          }

          .download-page__visual-image {
            width: min(92%, 300px);
            max-height: 260px;
          }

          .download-page__bubble {
            position: static;
            margin-top: 12px;
            max-width: none;
          }

          .download-page__bubble::after {
            display: none;
          }

          .download-page__visual-panel {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px;
          }

          .download-page__download-card-head {
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .download-page__visual-image,
          .download-page__visual-ring--two {
            animation: none !important;
          }

          .download-page__primary-button,
          .download-page__secondary-button,
          .download-page__inline-link,
          .download-page__mini-link,
          .download-page__download-card {
            transition: none !important;
          }
        }
      `}</style>

      <div className="download-page__glow download-page__glow--one" />
      <div className="download-page__glow download-page__glow--two" />

      <div className="download-page__container">
        <section className="download-page__hero">
          <div className="download-page__hero-panel">
            <span className="download-page__eyebrow">Desktop App</span>
            <h1 className="download-page__title">
              마음친구를
              <br />
              데스크톱에서도 만나보세요
            </h1>
            <p className="download-page__description">
              토끼와 고양이 캐릭터가 더 넓은 화면에서 반응하고, 대화 기록과 감정
              흐름을 한눈에 볼 수 있도록 준비한 다운로드 페이지예요. 실제 설치
              파일 경로가 준비되면 버튼 링크만 연결해서 바로 운영할 수 있게
              구성했습니다.
            </p>

            <div className="download-page__actions">
              <Link to="/chat" className="download-page__primary-button">
                먼저 대화해보기
              </Link>
              <Link to="/signup" className="download-page__secondary-button">
                출시 알림 받기
              </Link>
            </div>

            <div className="download-page__note">
              <strong>연결 포인트</strong>
              <p>
                실제 배포 시에는 아래 플랫폼 카드의 버튼만 설치 파일 URL로
                연결하면 됩니다. 지금은 디자인과 페이지 흐름이 먼저 완성된
                상태예요.
              </p>
            </div>
          </div>

          <div className="download-page__visual-panel">
            <div className="download-page__visual-orbit">
              <div className="download-page__visual-ring download-page__visual-ring--one" />
              <div className="download-page__visual-ring download-page__visual-ring--two" />
            </div>

            <div className="download-page__bubble download-page__bubble--top">
              안녕하세요,
              <br />
              데스크톱에서도 함께할게요
            </div>

            <div className="download-page__visual-core">
              <img
                src="/images/rabbit-duo.png"
                alt="토끼와 고양이 캐릭터"
                className="download-page__visual-image"
              />
            </div>

            <div className="download-page__bubble download-page__bubble--bottom">
              더 큰 화면에서
              <br />
              더 편안하게 대화해요
            </div>
          </div>
        </section>

        <section className="download-page__section-card">
          <div className="download-page__section-heading">
            <div>
              <span className="download-page__section-eyebrow">
                Download Options
              </span>
              <h2>플랫폼별 준비 상태</h2>
            </div>
            <p>
              현재는 UI와 동선 중심으로 먼저 완성해두었고, 실제 설치 파일 링크는
              추후 바로 연결할 수 있도록 버튼 구조를 분리해두었어요.
            </p>
          </div>

          <div className="download-page__grid">
            {downloadTargets.map((target) => (
              <article key={target.key} className="download-page__download-card">
                <div className="download-page__download-card-head">
                  <div
                    className={`download-page__icon-wrap ${
                      target.accent === 'blue'
                        ? 'download-page__icon-wrap--blue'
                        : 'download-page__icon-wrap--peach'
                    }`}
                  >
                    <img src={target.image} alt={target.title} />
                  </div>

                  <div>
                    <span
                      className={`download-page__badge ${
                        target.accent === 'blue'
                          ? 'download-page__badge--blue'
                          : 'download-page__badge--peach'
                      }`}
                    >
                      {target.badge}
                    </span>
                    <h3>{target.title}</h3>
                  </div>
                </div>

                <p>{target.description}</p>
                <span className="download-page__status">{target.status}</span>

                <div className="download-page__download-actions">
                  <button
                    type="button"
                    className="download-page__disabled-button"
                    disabled
                  >
                    다운로드 준비 중
                  </button>

                  <Link to="/signup" className="download-page__inline-link">
                    알림 신청
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="download-page__section-card">
          <div className="download-page__section-heading">
            <div>
              <span className="download-page__section-eyebrow">
                Install Flow
              </span>
              <h2>설치 전 확인 흐름</h2>
            </div>
            <p>
              사용자는 어렵지 않게 다운로드 → 계정 연결 → 대화 시작 흐름으로
              진입할 수 있도록 설계했습니다.
            </p>
          </div>

          <div className="download-page__steps">
            {installSteps.map((step, index) => (
              <article key={step.title} className="download-page__step-card">
                <div className="download-page__step-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="download-page__bottom-banner">
          <div>
            <span className="download-page__section-eyebrow">Need Help?</span>
            <h2>웹에서도, 앱에서도 이어지는 감정 대화 경험</h2>
            <p>
              다운로드 페이지는 단순히 설치 버튼만 보여주는 공간이 아니라,
              사용자가 왜 데스크톱 버전을 써야 하는지 자연스럽게 이해하도록
              설계하는 게 중요해요. 그래서 캐릭터 중심 비주얼, 부드러운 안내
              문구, 출시 알림 동선까지 한 번에 넣어두었습니다.
            </p>

            <div className="download-page__banner-actions">
              <Link to="/chat" className="download-page__primary-button">
                채팅 페이지로 이동
              </Link>
              <Link to="/" className="download-page__mini-link">
                홈으로 돌아가기
              </Link>
            </div>
          </div>

          <div className="download-page__support-list">
            {supportItems.map((item) => (
              <article key={item.title} className="download-page__support-item">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DownloadPage;
