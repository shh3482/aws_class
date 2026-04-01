import React, { useState } from 'react';

function PersonalSettings() {
  const [settings, setSettings] = useState({
    character: 'rabbit',
    characterColor: '#6C9EFF',
    characterPersonality: '차분함',
    notifications: true,
    emailNotifications: false,
    soundEnabled: true,
    darkMode: false,
    language: 'ko'
  });

  const handleToggle = (key) => {
    const newSettings = { ...settings, [key]: !settings[key] };
    setSettings(newSettings);
  };

  const handleChange = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
  };

  return (
    <div className="dashboard-section">
      <h1>⚙️ 개인 설정</h1>
      <p className="section-subtitle">메이티를 나만의 방식으로 커스터마이징하세요</p>

      <div className="settings-card">
        <h2>🤖 내 AI 친구</h2>

        <div className="setting-group">
          <label>캐릭터 선택</label>
          <div className="character-options">
            <button
              className={`char-option ${settings.character === 'rabbit' ? 'selected' : ''}`}
              onClick={() => handleChange('character', 'rabbit')}
            >
              <span>🐰</span>
              <span>하루</span>
            </button>
            <button
              className={`char-option ${settings.character === 'cat' ? 'selected' : ''}`}
              onClick={() => handleChange('character', 'cat')}
            >
              <span>🐱</span>
              <span>루미</span>
            </button>
          </div>
        </div>

        <div className="setting-group">
          <label>캐릭터 색상</label>
          <div className="color-picker">
            {['#6C9EFF', '#FF8FAB', '#9B7FFF', '#FFB347', '#4BC8A0'].map(color => (
              <button
                key={color}
                className={`color-option ${settings.characterColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleChange('characterColor', color)}
              />
            ))}
          </div>
        </div>

        <div className="setting-group">
          <label>성격 설정</label>
          <select
            value={settings.characterPersonality}
            onChange={(e) => handleChange('characterPersonality', e.target.value)}
          >
            <option>차분함</option>
            <option>활발함</option>
            <option>섬세함</option>
            <option>밝음</option>
          </select>
        </div>
      </div>

      <div className="settings-card">
        <h2>🔔 알림 설정</h2>

        <div className="setting-toggle">
          <div className="toggle-label">
            <span>앱 알림</span>
            <p>메이티의 알림을 받을지 설정합니다</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-toggle">
          <div className="toggle-label">
            <span>이메일 알림</span>
            <p>중요한 알림을 이메일로 받을지 설정합니다</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-toggle">
          <div className="toggle-label">
            <span>소리 활성화</span>
            <p>메이티가 말할 때 음성을 들을지 설정합니다</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={() => handleToggle('soundEnabled')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-card">
        <h2>🎨 앱 설정</h2>

        <div className="setting-toggle">
          <div className="toggle-label">
            <span>다크 모드</span>
            <p>어두운 테마로 변경합니다</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={settings.darkMode}
              onChange={() => handleToggle('darkMode')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-group">
          <label>언어 설정</label>
          <select
            value={settings.language}
            onChange={(e) => handleChange('language', e.target.value)}
          >
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PersonalSettings;
