import React, { useState } from "react";

const PersonalSettings = () => {
  const [characterStyle, setCharacterStyle] = useState("다정한 현실형");
  const [theme, setTheme] = useState("파스텔 라이트");
  const [responseTone, setResponseTone] = useState("균형형");
  const [desktopPet, setDesktopPet] = useState("토끼 메이트");

  return (
    <section className="dashboard-page">
      <div className="dashboard-page__hero">
        <div className="dashboard-page__hero-top">
          <div>
            <h1>개인 설정</h1>
            <p>
              메이티의 성격, 말투, 분위기, 데스크톱 캐릭터 스타일을 나에게 맞게 조정해보세요.
            </p>
          </div>

          <div className="dashboard-page__hero-badges">
            <div className="dashboard-badge">🎭 메이트 성격</div>
            <div className="dashboard-badge">🎨 화면 테마</div>
            <div className="dashboard-badge">🐰 데스크톱 캐릭터</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2">
        <article className="dashboard-card">
          <h3>메이트 성격 설정</h3>
          <p style={{ marginBottom: "14px" }}>
            너무 맹목적으로 편들기만 하지 않고, 때로는 다정하고 때로는 냉철한 실제 사람 같은 톤을 목표로 설정할 수 있어요.
          </p>

          <div className="dashboard-field">
            <label>기본 성격</label>
            <div className="preference-options">
              {["다정한 현실형", "차분한 공감형", "장난기 있는 친구형", "단호한 정리형"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`preference-chip ${characterStyle === item ? "active" : ""}`}
                  onClick={() => setCharacterStyle(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div style={{ height: "16px" }} />

          <div className="dashboard-field">
            <label>응답 온도</label>
            <div className="preference-options">
              {["따뜻함 중심", "균형형", "현실 조언 강화"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`preference-chip ${responseTone === item ? "active" : ""}`}
                  onClick={() => setResponseTone(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </article>

        <article className="dashboard-card">
          <h3>디자인 및 캐릭터 설정</h3>

          <div className="dashboard-field" style={{ marginBottom: "16px" }}>
            <label>테마 선택</label>
            <div className="preference-options">
              {["파스텔 라이트", "소프트 라벤더", "민트 스카이", "크림 핑크"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`preference-chip ${theme === item ? "active" : ""}`}
                  onClick={() => setTheme(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="dashboard-field">
            <label>데스크톱 메이트 외형</label>
            <div className="preference-options">
              {["토끼 메이트", "고양이 메이트", "듀오 메이트"].map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`preference-chip ${desktopPet === item ? "active" : ""}`}
                  onClick={() => setDesktopPet(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </article>
      </div>

      <article className="dashboard-card">
        <h3>알림 및 상호작용 스타일</h3>

        <div className="dashboard-form-grid">
          <div className="dashboard-field">
            <label>알림 빈도</label>
            <select className="dashboard-select" defaultValue="중간">
              <option>낮음</option>
              <option>중간</option>
              <option>높음</option>
            </select>
          </div>

          <div className="dashboard-field">
            <label>먼저 다가오는 강도</label>
            <select className="dashboard-select" defaultValue="자연스럽게">
              <option>조용하게</option>
              <option>자연스럽게</option>
              <option>조금 적극적으로</option>
            </select>
          </div>

          <div className="dashboard-field">
            <label>대화 길이 선호</label>
            <select className="dashboard-select" defaultValue="중간">
              <option>짧게</option>
              <option>중간</option>
              <option>길게</option>
            </select>
          </div>

          <div className="dashboard-field">
            <label>잡담 허용 정도</label>
            <select className="dashboard-select" defaultValue="높음">
              <option>낮음</option>
              <option>중간</option>
              <option>높음</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: "16px" }}>
          <button type="button" className="dashboard-button">
            개인 설정 저장
          </button>
        </div>
      </article>

      <article className="dashboard-card">
        <h3>현재 설정 요약</h3>
        <p>
          현재 메이티는 <strong>{characterStyle}</strong> 성격과 <strong>{responseTone}</strong> 응답 스타일,
          <strong> {theme}</strong> 테마, <strong>{desktopPet}</strong> 외형을 기준으로 맞춰져 있어요.
        </p>
      </article>
    </section>
  );
};

export default PersonalSettings;
