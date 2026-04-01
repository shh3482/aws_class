import React, { useState } from 'react';

function SecuritySettings() {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log('비밀번호 변경:', passwords);
    setPasswords({ current: '', new: '', confirm: '' });
    setShowPasswordForm(false);
  };

  return (
    <div className="dashboard-section">
      <h1>🔒 보안 설정</h1>
      <p className="section-subtitle">계정의 보안을 관리하세요</p>

      <div className="security-grid">
        <div className="security-card">
          <div className="security-icon">🔐</div>
          <h3>로그인 보안</h3>
          <p>안전한 비밀번호로 계정을 보호하세요</p>
          <button
            className="security-btn"
            onClick={() => setShowPasswordForm(!showPasswordForm)}
          >
            비밀번호 변경
          </button>

          {showPasswordForm && (
            <form onSubmit={handlePasswordChange} className="password-form">
              <div className="form-group">
                <label>현재 비밀번호</label>
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>새 비밀번호</label>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label>비밀번호 확인</label>
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn-primary">변경</button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setShowPasswordForm(false)}
                >
                  취소
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="security-card">
          <div className="security-icon">📱</div>
          <h3>2단계 인증</h3>
          <p>추가 보안 인증으로 계정을 더욱 안전하게</p>
          <div className="security-status">
            <span className="status-badge disabled">비활성화</span>
          </div>
          <button className="security-btn">설정</button>
        </div>

        <div className="security-card">
          <div className="security-icon">📋</div>
          <h3>활동 로그</h3>
          <p>계정 접근 이력을 확인하세요</p>
          <button className="security-btn">로그 보기</button>
        </div>

        <div className="security-card">
          <div className="security-icon">🖥️</div>
          <h3>연결된 기기</h3>
          <p>로그인된 모든 기기를 관리하세요</p>
          <div className="device-list">
            <div className="device-item">
              <span>🖥️ Windows 10</span>
              <span className="device-time">현재 활동 중</span>
            </div>
            <div className="device-item">
              <span>📱 iPhone 12</span>
              <span className="device-time">어제</span>
            </div>
          </div>
        </div>

        <div className="security-card">
          <div className="security-icon">👁️</div>
          <h3>개인정보 공개</h3>
          <p>모니터링 허용 여부를 설정하세요</p>
          <div className="toggle-switch">
            <input type="checkbox" id="monitoring" defaultChecked={false} />
            <label htmlFor="monitoring">모니터링 OFF</label>
          </div>
        </div>

        <div className="security-card danger">
          <div className="security-icon">⚠️</div>
          <h3>계정 삭제</h3>
          <p>메이티 계정을 영구 삭제합니다</p>
          <button className="security-btn danger">계정 삭제</button>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;
