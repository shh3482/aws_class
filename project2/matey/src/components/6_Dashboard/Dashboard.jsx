import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import ChatHistory from './ChatHistory';
import SecuritySettings from './SecuritySettings';
import Reports from './Reports';
import PersonalInfo from './PersonalInfo';
import PersonalSettings from './PersonalSettings';
import './Dashboard.css';

function Dashboard({ activeTab = 'overview' }) {
  const { user } = useAuth();

  const renderContent = () => {
    switch (activeTab) {
      case 'chat-history':
        return <ChatHistory />;
      case 'security':
        return <SecuritySettings />;
      case 'reports':
        return <Reports />;
      case 'personal-info':
        return <PersonalInfo />;
      case 'settings':
        return <PersonalSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>안녕하세요, {user?.name}님! 👋</h1>
        <p>메이티와의 감정 여정을 관리하세요</p>
      </div>

      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
}

function DashboardOverview() {
  const { user } = useAuth();

  return (
    <div className="dashboard-overview">
      <div className="overview-grid">
        <div className="overview-card">
          <div className="card-icon">💬</div>
          <div className="card-content">
            <div className="card-label">총 대화 수</div>
            <div className="card-value">42</div>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon">😊</div>
          <div className="card-content">
            <div className="card-label">이번 주 기분</div>
            <div className="card-value">긍정적 ↑</div>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon">🔥</div>
          <div className="card-content">
            <div className="card-label">연속 로그인</div>
            <div className="card-value">7일</div>
          </div>
        </div>

        <div className="overview-card">
          <div className="card-icon">⭐</div>
          <div className="card-content">
            <div className="card-label">감정 안정도</div>
            <div className="card-value">85%</div>
          </div>
        </div>
      </div>

      <div className="overview-section">
        <h2>이번 주 감정 추이</h2>
        <div className="emotion-chart">
          <div className="chart-placeholder">
            📈 (실제 차트 라이브러리 연동 예정)
          </div>
        </div>
      </div>

      <div className="overview-section">
        <div className="section-header">
          <h2>최근 대화</h2>
          <a href="/dashboard/chat-history">더보기 →</a>
        </div>
        <div className="recent-chats">
          {[1, 2, 3].map(i => (
            <div key={i} className="recent-chat-item">
              <div className="chat-avatar">🐰</div>
              <div className="chat-info">
                <div className="chat-title">오늘의 감정 대화 #{i}</div>
                <div className="chat-preview">지금 많이 힘들어 보여요 🥺</div>
                <div className="chat-time">{i}시간 전</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="overview-section">
        <h2>추천 기능</h2>
        <div className="recommendations">
          <div className="recommendation-item">
            <span>📊</span>
            <div>
              <h3>감정 패턴 분석</h3>
              <p>당신의 감정 흐름을 자세히 분석해보세요</p>
              <a href="/dashboard/reports">분석 보기</a>
            </div>
          </div>
          <div className="recommendation-item">
            <span>🔒</span>
            <div>
              <h3>보안 검사</h3>
              <p>계정 보안을 지금 바로 확인하세요</p>
              <a href="/dashboard/security">검사 시작</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
