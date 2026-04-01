import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import './MyPage.css';

function MyPage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="mypage">
      <div className="mypage-header">
        <div className="mypage-cover"></div>
        <div className="mypage-profile">
          <img src={user?.profileImage} alt={user?.name} className="profile-avatar" />
          <div className="profile-info">
            <h1>{user?.name}</h1>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>

      <div className="mypage-tabs">
        <button
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          프로필 정보
        </button>
        <button
          className={`tab ${activeTab === 'password' ? 'active' : ''}`}
          onClick={() => setActiveTab('password')}
        >
          비밀번호 변경
        </button>
        <button
          className={`tab ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          계정 관리
        </button>
      </div>

      <div className="mypage-content">
        {activeTab === 'profile' && <ProfileTab />}
        {activeTab === 'password' && <PasswordTab />}
        {activeTab === 'account' && <AccountTab logout={logout} />}
      </div>
    </div>
  );
}

function ProfileTab() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name,
    phone: user?.phone || '',
    bio: user?.bio || '메이티 사용자입니다 🌟'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="mypage-tab-content">
      <div className="profile-card">
        <div className="card-header">
          <h2>프로필 정보</h2>
          <button
            className="btn-edit"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? '취소' : '수정'}
          </button>
        </div>

        <div className="profile-form">
          <div className="form-group">
            <label>이름</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="form-group">
            <label>전화번호</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              placeholder="010-0000-0000"
            />
          </div>

          <div className="form-group">
            <label>소개</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              disabled={!isEditing}
              rows="4"
              placeholder="자기소개를 작성하세요"
            />
          </div>

          {isEditing && (
            <div className="form-actions">
              <button className="btn-primary" onClick={handleSave}>저장</button>
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>취소</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PasswordTab() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage('새 비밀번호가 일치하지 않습니다');
      return;
    }
    setMessage('비밀번호가 변경되었습니다');
    setPasswords({ current: '', new: '', confirm: '' });
  };

  return (
    <div className="mypage-tab-content">
      <div className="profile-card">
        <h2>비밀번호 변경</h2>

        <form onSubmit={handleSubmit} className="profile-form">
          {message && <div className="message">{message}</div>}

          <div className="form-group">
            <label>현재 비밀번호</label>
            <input
              type="password"
              name="current"
              value={passwords.current}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>새 비밀번호</label>
            <input
              type="password"
              name="new"
              value={passwords.new}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="confirm"
              value={passwords.confirm}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">변경</button>
        </form>
      </div>
    </div>
  );
}

function AccountTab({ logout }) {
  return (
    <div className="mypage-tab-content">
      <div className="profile-card danger">
        <h2>계정 관리</h2>

        <div className="account-options">
          <button className="btn-danger" onClick={logout}>로그아웃</button>
          <button className="btn-danger-secondary">계정 삭제</button>
        </div>

        <div className="account-info">
          <p>⚠️ 계정을 삭제하면 모든 대화 기록이 삭제되며 복구할 수 없습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
