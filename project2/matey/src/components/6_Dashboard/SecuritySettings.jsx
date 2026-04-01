import React, { useState } from 'react';
import './Dashboard.css';

function SecuritySettings() {
  const [settings, setSettings] = useState({
    desktopMonitoring: true,
    localOnlyCapture: true,
    cloudHistory: true,
    autoDelete: false,
    proactiveVoice: false,
    crisisSafety: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const items = [
    {
      key: 'desktopMonitoring',
      title: '상황 인식 모니터링',
      desc: '데스크톱 화면 맥락을 읽어 메이티가 먼저 다가오는 기능을 켜고 끕니다.',
    },
    {
      key: 'localOnlyCapture',
      title: '로컬 우선 처리',
      desc: '가능한 경우 원본 화면은 기기 내부에서 처리하고 최소 정보만 활용합니다.',
    },
    {
      key: 'cloudHistory',
      title: '상담 기록 클라우드 저장',
      desc: '웹과 데스크톱 사이에서 상담 기록을 동기화합니다.',
    },
    {
      key: 'autoDelete',
      title: '자동 삭제 주기',
      desc: '민감한 기록을 일정 주기로 정리하는 옵션입니다.',
    },
    {
      key: 'proactiveVoice',
      title: '음성으로 먼저 말 걸기',
      desc: '텍스트 말풍선 대신 음성 알림으로 안부를 전하는 기능입니다.',
    },
    {
      key: 'crisisSafety',
      title: '위기 상황 안전 가이드',
      desc: '자해/타해 위험 문맥에서 별도 안전 안내를 우선 표시합니다.',
    },
  ];

  return (
    <div className="petdash-page">
      <section className="petdash-security-head glass-card">
        <div>
          <span className="petdash-mini-badge">Privacy & Safety</span>
          <h3>보안과 통제는 사용자가 직접</h3>
          <p>
            메이티의 핵심은 “늘 보는 AI”가 아니라,
            <strong> 내가 허용한 만큼만 곁에 있는 AI 친구</strong>여야 한다는 점이에요.
          </p>
        </div>

        <div className="petdash-security-head__pet">
          <img src="/images/cat.png" alt="Matey cat" />
        </div>
      </section>

      <section className="petdash-security-grid">
        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Control Center</span>
              <h3>모니터링 및 기록 제어</h3>
            </div>
          </div>

          <div className="petdash-toggle-list">
            {items.map((item) => (
              <div key={item.key} className="petdash-toggle-item">
                <div className="petdash-toggle-item__copy">
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>

                <button
                  type="button"
                  className={`petdash-toggle ${settings[item.key] ? 'is-on' : ''}`}
                  onClick={() => toggle(item.key)}
                  aria-label={`${item.title} 토글`}
                >
                  <span />
                </button>
              </div>
            ))}
          </div>
        </article>

        <article className="petdash-card glass-card">
          <div className="petdash-card__head">
            <div>
              <span className="petdash-mini-badge">Data Policy</span>
              <h3>데이터 보호 방식</h3>
            </div>
          </div>

          <div className="petdash-policy-list">
            <div className="petdash-policy-card">
              <strong>최소 수집 원칙</strong>
              <p>상담 경험에 꼭 필요한 정보만 남기고, 민감한 원본은 줄이는 방향을 우선합니다.</p>
            </div>

            <div className="petdash-policy-card">
              <strong>삭제와 보관 선택권</strong>
              <p>사용자가 기록 보관 기간, 삭제 여부, 동기화 여부를 직접 선택할 수 있도록 설계합니다.</p>
            </div>

            <div className="petdash-policy-card">
              <strong>기기 내부 우선 처리</strong>
              <p>가능한 기능은 로컬 처리 중심으로 두어 감시당하는 느낌을 줄이고 통제감을 높입니다.</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SecuritySettings;
