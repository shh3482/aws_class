import React, { useState } from 'react';
import './AdminPage.css';

function AdminPage() {
  const [activeTab, setActiveTab] = useState('users');
  const [users] = useState([
    { id: 1, name: '홍길동', email: 'hong@test.com', role: 'user', joinDate: '2024-01-15', status: 'active' },
    { id: 2, name: '이순신', email: 'lee@test.com', role: 'user', joinDate: '2024-01-20', status: 'active' },
    { id: 3, name: '김유신', email: 'kim@test.com', role: 'user', joinDate: '2024-01-10', status: 'inactive' },
  ]);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>👑 관리자 페이지</h1>
        <p>메이티 시스템을 관리하세요</p>
      </div>

      <div className="admin-tabs">
        <button
          className={`tab ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          사용자 관리
        </button>
        <button
          className={`tab ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          통계
        </button>
        <button
          className={`tab ${activeTab === 'system' ? 'active' : ''}`}
          onClick={() => setActiveTab('system')}
        >
          시스템 설정
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'users' && <UserManagement users={users} />}
        {activeTab === 'stats' && <AdminStats />}
        {activeTab === 'system' && <SystemSettings />}
      </div>
    </div>
  );
}

function UserManagement({ users }) {
  return (
    <div className="admin-section">
      <h2>사용자 관리</h2>

      <div className="admin-controls">
        <input type="text" placeholder="사용자 검색..." className="search-input" />
        <button className="btn-export">📥 내보내기</button>
      </div>

      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>이메일</th>
              <th>권한</th>
              <th>가입 일자</th>
              <th>상태</th>
              <th>작업</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin' ? '관리자' : '일반'}</td>
                <td>{user.joinDate}</td>
                <td><span className={`status ${user.status}`}>{user.status === 'active' ? '활성' : '비활성'}</span></td>
                <td>
                  <button className="btn-action">수정</button>
                  <button className="btn-action">삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminStats() {
  return (
    <div className="admin-section">
      <h2>통계</h2>

      <div className="stats-cards">
        <div className="stat-box">
          <div className="stat-number">2,400+</div>
          <div className="stat-label">총 사용자</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">1,850</div>
          <div className="stat-label">활성 사용자</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">42,500</div>
          <div className="stat-label">총 대화 수</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">4.8/5</div>
          <div className="stat-label">평균 만족도</div>
        </div>
      </div>

      <div className="chart-placeholder">
        <p>📊 (차트 라이브러리 연동 예정)</p>
      </div>
    </div>
  );
}

function SystemSettings() {
  return (
    <div className="admin-section">
      <h2>시스템 설정</h2>

      <div className="settings-list">
        <div className="setting-item">
          <div className="setting-label">
            <h3>메인테넌스 모드</h3>
            <p>시스템 점검 시 활성화하세요</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-label">
            <h3>신규 가입 허용</h3>
            <p>새 사용자 가입을 허용합니다</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-label">
            <h3>API 접근 제어</h3>
            <p>외부 API 접근을 제어합니다</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="admin-actions">
        <button className="btn-action-primary">데이터베이스 백업</button>
        <button className="btn-action-primary">로그 다운로드</button>
      </div>
    </div>
  );
}

export default AdminPage;
