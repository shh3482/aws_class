import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <style>{`
        .not-found-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          padding: 48px 20px 72px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.94), transparent 26%),
            linear-gradient(180deg, #e8f5ff 0%, #dff0ff 52%, #fff8f1 100%);
        }

        .not-found-page__glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(18px);
          pointer-events: none;
          opacity: 0.7;
        }

        .not-found-page__glow--one {
          top: 72px;
          left: -100px;
          width: 300px;
          height: 300px;
          background: rgba(94, 162, 255, 0.18);
        }

        .not-found-page__glow--two {
          right: -80px;
          bottom: 80px;
          width: 260px;
          height: 260px;
          background: rgba(255, 179, 138, 0.2);
        }

        .not-found-page__container {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .not-found-page__panel {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr);
          gap: 28px;
          align-items: center;
          min-height: calc(100vh - 140px);
          border-radius: 36px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.66);
          box-shadow: 0 28px 60px rgba(91, 120, 164, 0.14);
          backdrop-filter: blur(20px);
        }

        .not-found-page__eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 36px;
          padding: 0 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(94, 162, 255, 0.16);
          color: #4d86d8;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .not-found-page__title {
          margin: 18px 0 12px;
          font-size: clamp(2.4rem, 4.8vw, 4.8rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #1f2a44;
        }

        .not-found-page__title strong {
          display: block;
          color: #5ea2ff;
        }

        .not-found-page__description {
          margin: 0;
          max-width: 620px;
          color: #5f6a86;
          font-size: 1rem;
          line-height: 1.85;
        }

        .not-found-page__message-box {
          margin-top: 26px;
          padding: 20px 22px;
          border-radius: 24px;
          background: linear-gradient(180deg, #eef6ff 0%, #f8fbff 100%);
          border: 1px solid rgba(94, 162, 255, 0.1);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.65);
        }

        .not-found-page__message-label {
          display: inline-flex;
          margin-bottom: 10px;
          color: #4e83d7;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .not-found-page__message-text {
          margin: 0;
          color: #31415f;
          line-height: 1.8;
          font-size: 0.98rem;
        }

        .not-found-page__quick-links {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .not-found-page__quick-card {
          padding: 16px 16px 18px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(226, 236, 250, 0.92);
          box-shadow: 0 14px 24px rgba(91, 120, 164, 0.08);
        }

        .not-found-page__quick-card strong {
          display: block;
          color: #283552;
          font-size: 0.96rem;
          margin-bottom: 6px;
        }

        .not-found-page__quick-card span {
          display: block;
          color: #6c7893;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .not-found-page__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .not-found-page__primary-button,
        .not-found-page__secondary-button,
        .not-found-page__ghost-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.96rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .not-found-page__primary-button {
          border: 0;
          cursor: pointer;
          color: #ffffff;
          background: linear-gradient(135deg, #5ea2ff 0%, #7cb4ff 100%);
          box-shadow: 0 18px 30px rgba(94, 162, 255, 0.22);
        }

        .not-found-page__secondary-button {
          color: #7c4a26;
          background: rgba(255, 244, 234, 0.96);
          border: 1px solid rgba(255, 179, 138, 0.18);
          box-shadow: 0 14px 24px rgba(255, 179, 138, 0.12);
        }

        .not-found-page__ghost-button {
          color: #3f5477;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(63, 84, 119, 0.08);
          box-shadow: 0 12px 22px rgba(91, 120, 164, 0.08);
        }

        .not-found-page__primary-button:hover,
        .not-found-page__secondary-button:hover,
        .not-found-page__ghost-button:hover {
          transform: translateY(-2px);
        }

        .not-found-page__visual {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          overflow: hidden;
          background:
            radial-gradient(circle at top, rgba(255,255,255,0.96), rgba(234,244,255,0.82) 48%, rgba(255,243,234,0.78) 100%);
          border: 1px solid rgba(94, 162, 255, 0.1);
        }

        .not-found-page__ring {
          position: absolute;
          border-radius: 999px;
          border: 1px dashed rgba(94, 162, 255, 0.18);
        }

        .not-found-page__ring--one {
          width: 240px;
          height: 240px;
        }

        .not-found-page__ring--two {
          width: 340px;
          height: 340px;
          border-color: rgba(255, 179, 138, 0.24);
          animation: notFoundSpin 18s linear infinite;
        }

        .not-found-page__image-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .not-found-page__image {
          width: min(88%, 420px);
          max-height: 340px;
          object-fit: contain;
          animation: notFoundFloat 5s ease-in-out infinite;
          filter: drop-shadow(0 24px 34px rgba(94, 162, 255, 0.18));
        }

        .not-found-page__code {
          position: absolute;
          top: 26px;
          left: 26px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          color: #4d86d8;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          box-shadow: 0 14px 24px rgba(91, 120, 164, 0.1);
        }

        .not-found-page__bubble {
          position: absolute;
          z-index: 2;
          max-width: 240px;
          padding: 16px 18px;
          border-radius: 24px;
          background: #ffffff;
          color: #2f3d5b;
          font-size: 0.94rem;
          line-height: 1.65;
          box-shadow: 0 18px 32px rgba(83, 109, 146, 0.12);
        }

        .not-found-page__bubble::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 18px;
          background: #ffffff;
          transform: rotate(45deg);
          border-radius: 4px;
        }

        .not-found-page__bubble--top {
          top: 86px;
          right: 24px;
        }

        .not-found-page__bubble--top::after {
          left: 28px;
          bottom: -8px;
        }

        .not-found-page__bubble--bottom {
          left: 24px;
          bottom: 38px;
        }

        .not-found-page__bubble--bottom::after {
          right: 30px;
          top: -8px;
        }

        @keyframes notFoundFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes notFoundSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 1080px) {
          .not-found-page__panel {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .not-found-page__visual {
            min-height: 420px;
          }
        }

        @media (max-width: 768px) {
          .not-found-page {
            padding: 32px 16px 56px;
          }

          .not-found-page__panel {
            padding: 20px;
            border-radius: 26px;
          }

          .not-found-page__quick-links {
            grid-template-columns: 1fr;
          }

          .not-found-page__actions {
            flex-direction: column;
            align-items: stretch;
          }

          .not-found-page__primary-button,
          .not-found-page__secondary-button,
          .not-found-page__ghost-button {
            width: 100%;
          }

          .not-found-page__visual {
            min-height: 360px;
            border-radius: 24px;
          }
        }

        @media (max-width: 560px) {
          .not-found-page__title {
            font-size: 2.2rem;
          }

          .not-found-page__image {
            width: min(92%, 280px);
            max-height: 240px;
          }

          .not-found-page__bubble {
            position: static;
            max-width: none;
            margin-top: 12px;
          }

          .not-found-page__bubble::after {
            display: none;
          }

          .not-found-page__visual {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 18px 14px;
          }

          .not-found-page__code {
            position: static;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .not-found-page__ring--two,
          .not-found-page__image {
            animation: none !important;
          }

          .not-found-page__primary-button,
          .not-found-page__secondary-button,
          .not-found-page__ghost-button {
            transition: none !important;
          }
        }
      `}</style>

      <div className="not-found-page__glow not-found-page__glow--one" />
      <div className="not-found-page__glow not-found-page__glow--two" />

      <div className="not-found-page__container">
        <section className="not-found-page__panel">
          <div className="not-found-page__content">
            <span className="not-found-page__eyebrow">Page Not Found</span>

            <h1 className="not-found-page__title">
              길을 잠깐 잃어버렸어요
              <strong>하지만 괜찮아요</strong>
            </h1>

            <p className="not-found-page__description">
              요청한 페이지를 찾을 수 없어요. 링크 주소가 바뀌었거나, 아직
              준비되지 않은 화면일 수 있어요. 토끼와 고양이가 홈이나 대화
              페이지로 다시 부드럽게 안내해드릴게요.
            </p>

            <div className="not-found-page__message-box">
              <span className="not-found-page__message-label">
                Character Message
              </span>
              <p className="not-found-page__message-text">
                “괜찮아요. 잘못 들어온 페이지일 뿐이에요. 지금 필요한 곳으로
                다시 같이 이동해봐요.”
              </p>
            </div>

            <div className="not-found-page__quick-links">
              <article className="not-found-page__quick-card">
                <strong>홈으로 이동</strong>
                <span>
                  전체 서비스 소개와 토끼·고양이 메인 화면부터 다시 볼 수 있어요.
                </span>
              </article>

              <article className="not-found-page__quick-card">
                <strong>대화 시작</strong>
                <span>
                  캐릭터 중심의 채팅 화면으로 바로 이동해 현재 감정을 나눌 수 있어요.
                </span>
              </article>

              <article className="not-found-page__quick-card">
                <strong>다운로드 보기</strong>
                <span>
                  데스크톱 앱 안내와 출시 알림 흐름을 확인할 수 있어요.
                </span>
              </article>
            </div>

            <div className="not-found-page__actions">
              <Link to="/" className="not-found-page__primary-button">
                홈으로 돌아가기
              </Link>

              <Link to="/chat" className="not-found-page__secondary-button">
                대화 페이지로 이동
              </Link>

              <button
                type="button"
                className="not-found-page__ghost-button"
                onClick={() => navigate(-1)}
              >
                이전 페이지로
              </button>
            </div>
          </div>

          <div className="not-found-page__visual">
            <span className="not-found-page__code">404</span>
            <div className="not-found-page__ring not-found-page__ring--one" />
            <div className="not-found-page__ring not-found-page__ring--two" />

            <div className="not-found-page__bubble not-found-page__bubble--top">
              찾는 페이지가 안 보여요.
              <br />
              다른 길로 안내해드릴게요.
            </div>

            <div className="not-found-page__image-wrap">
              <img
                src="/images/rabbit-duo.png"
                alt="토끼와 고양이 캐릭터"
                className="not-found-page__image"
              />
            </div>

            <div className="not-found-page__bubble not-found-page__bubble--bottom">
              홈, 채팅, 다운로드 중
              <br />
              원하는 곳으로 다시 가볼까요?
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NotFoundPage;
