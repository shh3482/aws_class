import React from "react";

const PersonalInfo = () => {
  return (
    <section className="dashboard-page">
      <div className="dashboard-page__hero">
        <div className="dashboard-page__hero-top">
          <div>
            <h1>개인정보 관리</h1>
            <p>
              계정 기본 정보와 프로필을 관리하는 공간입니다.
            </p>
          </div>

          <div className="dashboard-page__hero-badges">
            <div className="dashboard-badge">👤 계정 정보</div>
            <div className="dashboard-badge">🪪 프로필 관리</div>
          </div>
        </div>
      </div>

      <article className="dashboard-card">
        <div className="profile-hero">
          <div className="profile-hero__avatar">🐰</div>
          <div>
            <strong>메이트 사용자</strong>
            <p>
              메이티와 함께한 기록을 웹과 데스크톱에서 연결해 관리하고 있어요.
            </p>
          </div>
        </div>
      </article>

      <article className="dashboard-card">
        <h3>기본 정보</h3>

        <div className="dashboard-form-grid">
          <div className="dashboard-field">
            <label>이름</label>
            <input className="dashboard-input" type="text" defaultValue="메이트 사용자" />
          </div>

          <div className="dashboard-field">
            <label>닉네임</label>
            <input className="dashboard-input" type="text" defaultValue="matey_user" />
          </div>

          <div className="dashboard-field">
            <label>이메일</label>
            <input className="dashboard-input" type="email" defaultValue="user@matey.com" />
          </div>

          <div className="dashboard-field">
            <label>연락처</label>
            <input className="dashboard-input" type="text" placeholder="010-0000-0000" />
          </div>
        </div>

        <div style={{ marginTop: "16px" }}>
          <button type="button" className="dashboard-button">
            기본 정보 저장
          </button>
        </div>
      </article>

      <article className="dashboard-card">
        <h3>자기소개 / 메이티 참고 메모</h3>

        <div className="dashboard-field">
          <label>자기소개</label>
          <textarea
            className="dashboard-textarea"
            defaultValue="평소 생각이 많아지고 비교에 쉽게 지치는 편이에요. 너무 감정적으로만 위로받기보다 현실적인 정리도 함께 받고 싶어요."
          />
          <small>
            메이티가 말투와 반응 스타일을 조금 더 자연스럽게 이해하는 데 참고할 수 있어요.
          </small>
        </div>

        <div style={{ marginTop: "16px" }}>
          <button type="button" className="dashboard-button--ghost">
            자기소개 업데이트
          </button>
        </div>
      </article>
    </section>
  );
};

export default PersonalInfo;
