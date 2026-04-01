import React from 'react';
import './Dashboard.css';

const weeklyData = [
  { day: 'Mon', value: 68 },
  { day: 'Tue', value: 54 },
  { day: 'Wed', value: 72 },
  { day: 'Thu', value: 61 },
  { day: 'Fri', value: 49 },
  { day: 'Sat', value: 78 },
  { day: 'Sun', value: 74 },
];

const insightCards = [
  {
    title: '가장 자주 나타난 감정',
    value: '피곤함 + 안도감',
    desc: '업무 후 피로감이 컸지만, 저녁 대화 뒤에는 안정감이 회복되는 흐름이 보였어요.',
  },
  {
    title: '메이티 반응이 잘 맞은 순간',
    value: '오후 집중 저하 구간',
    desc: '강한 조언보다 짧은 체크인과 공감형 말풍선에서 반응이 더 좋았어요.',
  },
  {
    title: '다음 주 추천 루틴',
    value: '짧은 체크인 2회',
    desc: '아침 1회, 저녁 1회처럼 부담 없는 리듬으로 유지하는 것이 잘 맞아 보여요.',
  },
];

function Reports() {
  return (
    <div className="petdash-page">
      <section className="petdash-card glass-card">
        <div className="petdash-card__head">
          <div>
            <span className="petdash-mini-badge">Emotion Report</span>
            <h3>이번 주 감정 리포트</h3>
            <p className="petdash-card__sub">
              너무 차갑거나 의료적인 분석보다, 일상에서 읽기 쉬운 부드러운 인사이트 형식으로 정리합니다.
            </p>
          </div>
        </div>

        <div className="petdash-report-hero">
          <div className="petdash-report-hero__copy">
            <strong>이번 주 메이티 한 줄 요약</strong>
            <p>
              “이번 주의 너는 자주 지쳤지만, 그래도 스스로를 다독일 힘은 계속 남아 있었어요.”
            </p>
          </div>

          <div className="petdash-report-hero__pet">
            <img src="/images/rabbit-duo.png" alt="Matey companions" />
          </div>
        </div>

        <div className="petdash-chart-card">
          <div className="petdash-chart-card__top">
            <strong>주간 안정감 그래프</strong>
            <span>최근 7일 기준</span>
          </div>

          <div className="petdash-bar-chart">
            {weeklyData.map((item) => (
              <div key={item.day} className="petdash-bar-chart__item">
                <div className="petdash-bar-chart__track">
                  <div
                    className="petdash-bar-chart__fill"
                    style={{ height: `${item.value}%` }}
                  />
                </div>
                <span>{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="petdash-insight-grid">
          {insightCards.map((item) => (
            <article key={item.title} className="petdash-insight-card">
              <span>{item.title}</span>
              <strong>{item.value}</strong>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reports;
