import React, { useState } from "react";

const SecuritySettings = () => {
  const [settings, setSettings] = useState({
    monitoring: true,
    saveHistory: true,
    proactiveNotification: true,
    screenshotContext: false,
    newDeviceAlert: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="dashboard-page">
      <div className="dashboard-page__hero">
        <div className="dashboard-page__hero-top">
          <div>
            <h1>보안 설정</h1>
            <p>
              메이티의 프라이버시와 권한 제어는 사용자가 직접 관리할 수 있어야 합니다.
            </p>
          </div>

          <div className="dashboard-page__hero-badges">
            <div className="dashboard-badge">🔐 프라이버시 제어</div>
            <div className="dashboard-badge">🛡️ 계정 보호</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-2">
        <article className="dashboard-card">
          <h3>권한 및 기록 관리</h3>

          <div className="dashboard-switch-list">
            <SwitchItem
              title="모니터링 기능 활성화"
              desc="메이티가 사용자의 상태를 먼저 파악할 수 있도록 바탕화면 상호작용 기능을 켭니다."
              checked={settings.monitoring}
              onClick={() => toggleSetting("monitoring")}
            />

            <SwitchItem
              title="대화 기록 저장"
              desc="대화 내역과 감정 패턴을 리포트에 반영하기 위해 기록을 저장합니다."
              checked={settings.saveHistory}
              onClick={() => toggleSetting("saveHistory")}
            />

            <SwitchItem
              title="능동형 알림 허용"
              desc="메이티가 먼저 말을 걸거나 체크인 알림을 보내는 기능을 사용합니다."
              checked={settings.proactiveNotification}
              onClick={() => toggleSetting("proactiveNotification")}
            />

            <SwitchItem
              title="화면 맥락 분석 허용"
              desc="상황 인식 기반 반응을 위해 화면 흐름을 참고하는 기능입니다. 민감한 요소이므로 기본 OFF 예시로 두었습니다."
              checked={settings.screenshotContext}
              onClick={() => toggleSetting("screenshotContext")}
            />
          </div>
        </article>

        <article className="dashboard-card">
          <h3>계정 보호</h3>

          <div className="dashboard-switch-list">
            <SwitchItem
              title="새 기기 로그인 알림"
              desc="새로운 환경에서 로그인될 경우 사용자에게 알림을 보냅니다."
              checked={settings.newDeviceAlert}
              onClick={() => toggleSetting("newDeviceAlert")}
            />
          </div>

          <div style={{ height: "14px" }} />

          <div className="dashboard-form-grid dashboard-form-grid--single">
            <div className="dashboard-field">
              <label>현재 비밀번호</label>
              <input
                className="dashboard-input"
                type="password"
                placeholder="현재 비밀번호를 입력하세요"
              />
            </div>

            <div className="dashboard-field">
              <label>새 비밀번호</label>
              <input
                className="dashboard-input"
                type="password"
                placeholder="새 비밀번호를 입력하세요"
              />
            </div>

            <div className="dashboard-field">
              <label>새 비밀번호 확인</label>
              <input
                className="dashboard-input"
                type="password"
                placeholder="새 비밀번호를 다시 입력하세요"
              />
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <button type="button" className="dashboard-button">
              비밀번호 변경
            </button>
          </div>
        </article>
      </div>

      <article className="dashboard-card">
        <h3>보안 설계 포인트</h3>
        <p>
          메이티는 화면 인식 같은 민감한 기능을 포함할 수 있기 때문에, 단순히 “좋은 기능”처럼 보이게 하기보다
          사용자가 명확하게 ON/OFF를 제어할 수 있는 구조를 보여주는 것이 훨씬 중요합니다.
          이 포인트는 발표와 면접에서 기획 방어 포인트로도 강합니다.
        </p>
      </article>
    </section>
  );
};

const SwitchItem = ({ title, desc, checked, onClick }) => {
  return (
    <div className="dashboard-switch-item">
      <div>
        <strong>{title}</strong>
        <p>{desc}</p>
      </div>

      <button
        type="button"
        className={`switch ${checked ? "active" : ""}`}
        onClick={onClick}
        aria-label={title}
      />
    </div>
  );
};

export default SecuritySettings;
