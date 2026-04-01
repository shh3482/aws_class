import React from 'react';
import './Dashboard.css';

const historyItems = [
  {
    date: '2026.04.01',
    title: '지친 오후의 체크인',
    mood: '피곤함 · 무기력',
    preview:
      '오늘은 괜찮은 척하고 있었는데 사실은 조금 지쳤어요. 메이티가 먼저 쉬어가자고 말해줬어요.',
    tags: ['선제 대화', '업무 피로', '짧은 위로'],
  },
  {
    date: '2026.03.31',
    title: '취업 준비 불안 정리',
    mood: '불안 · 비교 스트레스',
    preview:
      '채용 사이트를 오래 보고 있다가 메이티가 먼저 말을 걸어줬고, 비교의 기준을 줄이는 식으로 대화를 이어갔어요.',
    tags: ['진로 고민', '비교 불안', '정리형 대화'],
  },
  {
    date: '2026.03.30',
    title: '밤 늦은 감정 정리',
    mood: '외로움 · 생각 과부하',
    preview:
      '잠들기 전 생각이 많아졌을 때 짧게 이야기했고, 감정 달력에 남길 한 줄 요약도 함께 정리했어요.',
    tags: ['야간 대화', '감정 기록', '수면 전 대화'],
  },
];

function ChatHistory() {
  return (
    <div className="petdash-page">
      <section className="petdash-card glass-card">
        <div className="petdash-card__head">
          <div>
            <span className="petdash-mini-badge">Chat History</span>
            <h3>상담 기록 아카이브</h3>
            <p className="petdash-card__sub">
              메이티와 나눈 대화들을 부드럽고 읽기 쉬운 카드 형태로 정리했어요.
            </p>
          </div>

          <div className="petdash-filter-row">
            <button type="button" className="petdash-filter-chip is-active">전체</button>
            <button type="button" className="petdash-filter-chip">선제 대화</button>
            <button type="button" className="petdash-filter-chip">야간 기록</button>
            <button type="button" className="petdash-filter-chip">공감형 대화</button>
          </div>
        </div>

        <div className="petdash-history-list">
          {historyItems.map((item) => (
            <article key={`${item.date}-${item.title}`} className="petdash-history-card">
              <div className="petdash-history-card__top">
                <div>
                  <span className="petdash-history-card__date">{item.date}</span>
                  <h4>{item.title}</h4>
                </div>

                <div className="petdash-history-card__pet">
                  <img src="/images/rabbit.png" alt="Matey rabbit" />
                </div>
              </div>

              <div className="petdash-history-card__mood">{item.mood}</div>

              <p>{item.preview}</p>

              <div className="petdash-tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="petdash-history-card__actions">
                <button type="button" className="btn btn-secondary">
                  전체 대화 보기
                </button>
                <button type="button" className="btn btn-ghost">
                  요약 저장
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ChatHistory;
