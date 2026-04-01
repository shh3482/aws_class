import React from 'react';
import { Link } from 'react-router-dom';
import './DownloadBanner.css';

function WindowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5.2l8-1.1v7H3v-5.9zm9 5.9V3.9l9-1.3v8.5h-9zm0 1.1h9v8.6l-9-1.2v-7.4zm-1 7.3l-8-1.1v-6.2h8v7.3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.3 4.3c.7-.9 1.2-2.1 1.1-3.3-1 .1-2.3.7-3 1.6-.7.8-1.3 2-1.2 3.2 1.2.1 2.4-.6 3.1-1.5zm3.7 11.1c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3-2-3.7-2-1.6-.2-3 1-3.8 1-0.8 0-2-1-3.3-1-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.3.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.8 3.4-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.2-2.6 1-1.5 1.5-3 1.5-3.1-.1 0-3.3-1.3-3.3-4.7z" />
    </svg>
  );
}

export default function DownloadBanner() {
  return (
    <section className="matey-download" id="download">
      <div className="matey-download__container">
        <div className="matey-download__card">
          <div className="matey-download__copy">
            <span className="matey-download__kicker">Desktop Experience</span>
            <h2>
              더 크게, 더 편안하게
              <br />
              <strong>데스크톱에서도 캐릭터와 함께하세요</strong>
            </h2>
            <p>
              말풍선, 선택지, 입력창, 리포트 흐름까지 넓은 화면에서 더 안정적으로
              사용할 수 있도록 데스크톱 경험도 함께 준비했어요.
            </p>

            <div className="matey-download__actions">
              <Link to="/download" className="matey-download__btn matey-download__btn--primary">
                다운로드 페이지 이동
              </Link>

              <button type="button" className="matey-download__platform">
                <WindowIcon />
                <span>Windows</span>
              </button>

              <button type="button" className="matey-download__platform">
                <AppleIcon />
                <span>macOS</span>
              </button>
            </div>
          </div>

          <div className="matey-download__visual">
            <div className="matey-download__image-card">
              <img src="/images/rabbit-duo.png" alt="토끼와 고양이 캐릭터" />
            </div>

            <div className="matey-download__speech">
              <strong>데스크톱에서는 더 넓게 만나요</strong>
              <p>대화와 리포트를 한눈에 보면서 더 편하게 감정 흐름을 살펴볼 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
