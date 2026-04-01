import React, { useState } from 'react';

function Reports() {
  const [reportPeriod, setReportPeriod] = useState('week');

  const emotionData = {
    week: {
      happy: 35,
      neutral: 40,
      sad: 15,
      anxious: 10
    },
    month: {
      happy: 30,
      neutral: 45,
      sad: 15,
      anxious: 10
    }
  };

  const dailySummary = [
    { date: '오늘', mood: '긍정적', stress: 'Low', sleep: '7시간', notes: '업무 진행이 잘 되는 날' },
    { date: '어제', mood: '중립', stress: 'Medium', sleep: '6시간', notes: '피곤한 하루' },
    { date: '3일 전', mood: '부정적', stress: 'High', sleep: '5시간', notes: '회의가 많았던 날' },
  ];

  return (
    <div className="dashboard-section">
      <h1>📊 리포트</h1>
      <p className="section-subtitle">당신의 감정과 건강 상태를 분석하세요</p>

      <div className="report-controls">
        <button
          className={`period-btn ${reportPeriod === 'week' ? 'active' : ''}`}
          onClick={() => setReportPeriod('week')}
        >
          이번 주
        </button>
        <button
          className={`period-btn ${reportPeriod === 'month' ? 'active' : ''}`}
          onClick={() => setReportPeriod('month')}
        >
          이번 달
        </button>
      </div>

      <div className="report-section">
        <h2>감정 분석</h2>
        <div className="emotion-analysis">
          <div className="emotion-chart-placeholder">
            <div className="chart-bar">
              <div className="bar" style={{height: emotionData[reportPeriod].happy + '%', backgroundColor: '#FFD700'}}>
                <span>😊 {emotionData[reportPeriod].happy}%</span>
              </div>
            </div>
            <div className="chart-bar">
              <div className="bar" style={{height: emotionData[reportPeriod].neutral + '%', backgroundColor: '#6C9EFF'}}>
                <span>😐 {emotionData[reportPeriod].neutral}%</span>
              </div>
            </div>
            <div className="chart-bar">
              <div className="bar" style={{height: emotionData[reportPeriod].sad + '%', backgroundColor: '#FF8FAB'}}>
                <span>😢 {emotionData[reportPeriod].sad}%</span>
              </div>
            </div>
            <div className="chart-bar">
              <div className="bar" style={{height: emotionData[reportPeriod].anxious + '%', backgroundColor: '#FF6B6B'}}>
                <span>😰 {emotionData[reportPeriod].anxious}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💬</div>
          <div className="stat-content">
            <div className="stat-label">총 대화</div>
            <div className="stat-value">42회</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <div className="stat-label">연속 접속</div>
            <div className="stat-value">7일</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <div className="stat-label">감정 안정도</div>
            <div className="stat-value">85%</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-label">목표 달성</div>
            <div className="stat-value">3/5</div>
          </div>
        </div>
      </div>

      <div className="report-section">
        <h2>일일 요약</h2>
        <div className="daily-summary">
          {dailySummary.map((day, i) => (
            <div key={i} className="summary-item">
              <div className="summary-date">{day.date}</div>
              <div className="summary-details">
                <div className="detail-badge">{day.mood}</div>
                <div className="detail-text">스트레스: {day.stress} | 수면: {day.sleep}</div>
                <div className="detail-note">{day.notes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="report-section insights">
        <h2>💡 인사이트</h2>
        <div className="insights-list">
          <div className="insight">
            <span className="insight-icon">📈</span>
            <div>
              <h4>긍정적 추세</h4>
              <p>지난주 대비 기분이 25% 개선됐어요</p>
            </div>
          </div>
          <div className="insight">
            <span className="insight-icon">🌙</span>
            <div>
              <h4>수면 부족</h4>
              <p>평균 수면시간이 권장량보다 1시간 적어요</p>
            </div>
          </div>
          <div className="insight">
            <span className="insight-icon">💪</span>
            <div>
              <h4>성장하고 있어요</h4>
              <p>부정적 감정 대처 능력이 향상됐어요</p>
            </div>
          </div>
        </div>
      </div>

      <div className="report-download">
        <button className="btn-download">📥 리포트 다운로드</button>
      </div>
    </div>
  );
}

export default Reports;
