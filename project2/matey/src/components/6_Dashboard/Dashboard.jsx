import React from 'react';
import './Dashboard.css';

const summaryCards = [
  {
    label: '오늘의 감정 흐름',
    value: '차분함 72%',
    note: '어제보다 안정감이 조금 올라갔어요.',
    tone: 'lavender',
  },
  {
    label: '메이티 선제 대화',
    value: '3회',
    note: '오후 집중 저하 구간에서 먼저 다가왔어요.',
    tone: 'blue',
  },
  {
    label: '데스크톱 동기화',
    value: '연결됨',
    note: '웹과 데스크톱 펫 상태가 이어지고 있어요.',
    tone: 'mint',
  },
];

const timeline = [
  {
    time: '09:20',
    title: '아침 체크인',
    desc: '“괜찮은 편이에요”로 하루를 시작했어요.',
    tone: 'lavender',
  },
  {
    time: '14:10',
    title: '집중 저하 감지',
    desc: '메이티가 먼저 쉬어가자고 말을 걸었어요.',
    tone: 'pink',
  },
  {
    time: '22:40',
    title: '감정 정리 대화',
    desc: '지친 마음을 짧게 정리하고 하루를 마무리했어요.',
    tone: 'blue',
  },
];

const quickActions = [
  '오늘 감정 체크인',
  '최근 상담 기록 보기',
  '주간 리포트 열기',
  '데스크톱 펫 상태 보기',
];

function Dashboard() {
  return (
    <div className="petdash-page">
      <section className="petdash-hero glass-card">
        <div className="petdash-hero__copy">
          <span className="petdash-mini-badge">Pet Companion Dashboard</span>
          <h2>오늘도 메이티가 곁에 있어요</h2>
          <p>
            이 공간은 단순한 관리 화면이 아니라,
            내 감정과 AI 펫 친구의 반응을 함께 보는 개인적인 컴패니언 룸입니다.
          </p>

          <div className="petdash-hero__chips">
            <span>감정 흐름 보기</span>
            <span>데스크톱 상주 상태</span>
            <span>부드러운 리포트 요약</span>
          </div>
        </div>

        <div className="petdash-hero__visual">
          <div className="petdash-hero__bubble">
            오늘은 조금 무리한 것 같아요.
            <br />
            천천히 숨 돌려도 괜찮아요. ☁️
          </div>

          <div className="petdash-hero__pet-card">
            <img src="/images/rabbit.png" alt="Matey rabbit" />
          </div>
        </div>
      </section>

      <section className="petdash-summary-grid">
        {summaryCards.map((card) => (
          <article key={card.label} className={`petdash-summary-card petdash-${card.tone}`}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <p>{card.note}</p>
          </article>
        ))}
      </section>

      <section className="petdash-main-grid">
        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Today Timeline</span>
              <h3>오늘의 메이티 타임라인</h3>
            </div>
            <button type="button" className="btn btn-secondary">
              전체 기록 보기
            </button>
          </div>

          <div className="petdash-timeline">
            {timeline.map((item) => (
              <div key={`${item.time}-${item.title}`} className="petdash-timeline__item">
                <div className={`petdash-timeline__dot petdash-${item.tone}`} />
                <div className="petdash-timeline__content">
                  <div className="petdash-timeline__top">
                    <strong>{item.title}</strong>
                    <span>{item.time}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Quick Actions</span>
              <h3>바로 시작하기</h3>
            </div>
          </div>

          <div className="petdash-action-list">
            {quickActions.map((action) => (
              <button key={action} type="button" className="petdash-action-btn">
                <span className="icon">✦</span>
                <span>{action}</span>
              </button>
            ))}
          </div>

          <div className="petdash-desktop-sync">
            <div className="petdash-desktop-sync__top">
              <strong>Desktop Companion Sync</strong>
              <span>연결 중</span>
            </div>

            <div className="petdash-desktop-sync__body">
              <div className="screen" />
              <div className="pet">
                <img src="/images/cat.png" alt="Matey cat" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Dashboard;
