import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

function PersonalInfo() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    birthday: user?.birthday || '',
    gender: user?.gender || '',
    address: user?.address || ''
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
    <div className="dashboard-section">
      <div className="section-header-with-btn">
        <h1>👤 개인정보 관리</h1>
        <button
          className="edit-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '취소' : '수정'}
        </button>
      </div>

      <div className="personal-info-card">
        <div className="profile-section">
          <img src={user?.profileImage} alt={user?.name} className="profile-image" />
          {isEditing && <button className="btn-change-photo">사진 변경</button>}
        </div>

        <form className="info-form">
          <div className="form-row">
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
              <label>이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
              />
            </div>
          </div>

          <div className="form-row">
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
              <label>생년월일</label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>성별</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="">선택</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </div>
            <div className="form-group">
              <label>주소</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder="서울시 강남구..."
              />
            </div>
          </div>

          {isEditing && (
            <div className="form-actions">
              <button type="button" className="btn-primary" onClick={handleSave}>
                저장
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                취소
              </button>
            </div>
          )}
        </form>
      </div>

      <div className="info-privacy">
        <h2>정보 공개 설정</h2>
        <div className="privacy-options">
          <label className="privacy-option">
            <input type="checkbox" defaultChecked={true} />
            <span>프로필 공개</span>
          </label>
          <label className="privacy-option">
            <input type="checkbox" defaultChecked={false} />
            <span>감정 분석 데이터 공유</span>
          </label>
          <label className="privacy-option">
            <input type="checkbox" defaultChecked={false} />
            <span>마이페이지 공개</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
