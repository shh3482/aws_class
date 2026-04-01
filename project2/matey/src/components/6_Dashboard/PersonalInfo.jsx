import React, { useState } from 'react';
import './Dashboard.css';

function PersonalInfo() {
  const [form, setForm] = useState({
    nickname: '민지',
    email: 'matey@example.com',
    ageGroup: '20대',
    concern: '진로 · 무기력 · 스트레스',
    intro: '무거운 얘기도 편하게 꺼낼 수 있는 친구 같은 AI를 원해요.',
  });

  const update = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="petdash-page">
      <section className="petdash-profile-head glass-card">
        <div className="petdash-profile-head__avatar">
          <img src="/images/rabbit.png" alt="Matey rabbit" />
        </div>

        <div className="petdash-profile-head__copy">
          <span className="petdash-mini-badge">My Profile</span>
          <h3>메이티가 나를 이해하는 기본 정보</h3>
          <p>
            아주 많은 정보를 모으기보다,
            메이티가 더 부드럽게 반응할 수 있을 정도의 최소 정보만 관리하는 방향을 권장합니다.
          </p>
        </div>
      </section>

      <section className="petdash-profile-grid">
        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Basic Info</span>
              <h3>기본 정보 수정</h3>
            </div>
          </div>

          <div className="petdash-form-grid">
            <div className="petdash-form-field">
              <label>닉네임</label>
              <input
                className="input"
                value={form.nickname}
                onChange={(e) => update('nickname', e.target.value)}
              />
            </div>

            <div className="petdash-form-field">
              <label>이메일</label>
              <input
                className="input"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
              />
            </div>

            <div className="petdash-form-field">
              <label>연령대</label>
              <select
                className="input"
                value={form.ageGroup}
                onChange={(e) => update('ageGroup', e.target.value)}
              >
                <option>10대</option>
                <option>20대</option>
                <option>30대</option>
                <option>40대+</option>
              </select>
            </div>

            <div className="petdash-form-field">
              <label>주요 고민 카테고리</label>
              <input
                className="input"
                value={form.concern}
                onChange={(e) => update('concern', e.target.value)}
              />
            </div>

            <div className="petdash-form-field petdash-form-field--full">
              <label>메이티에게 바라는 분위기</label>
              <textarea
                className="textarea"
                value={form.intro}
                onChange={(e) => update('intro', e.target.value)}
              />
            </div>
          </div>

          <div className="petdash-form-actions">
            <button type="button" className="btn btn-primary">
              저장하기
            </button>
            <button type="button" className="btn btn-secondary">
              기본값으로 되돌리기
            </button>
          </div>
        </article>

        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Profile Tips</span>
              <h3>더 잘 맞는 반응을 위한 팁</h3>
            </div>
          </div>

          <div className="petdash-tip-list">
            <div className="petdash-tip-card">
              <strong>고민 카테고리는 넓게 적기</strong>
              <p>너무 세세하게 적기보다 “진로/스트레스/관계”처럼 큰 흐름 위주가 자연스럽습니다.</p>
            </div>

            <div className="petdash-tip-card">
              <strong>원하는 톤을 짧게 알려주기</strong>
              <p>“친구처럼”, “차분하게”, “너무 밝지 않게” 정도만 적어도 충분해요.</p>
            </div>

            <div className="petdash-tip-card">
              <strong>민감 정보는 최소화하기</strong>
              <p>실주소, 금융정보, 주민번호 같은 정보는 입력하지 않는 방향을 권장합니다.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default PersonalInfo;
