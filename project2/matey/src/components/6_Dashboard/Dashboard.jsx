import React from "react";
import { useNavigate } from "react-router-dom";

const recentChats = [
  {
    title: "취업 준비 불안",
    desc: "채용 사이트를 오래 보고 있을 때 메이티가 먼저 말을 걸며 대화를 시작했어요.",
    tag: "오늘",
  },
  {
    title: "과제 마감 스트레스",
    desc: "오후 시간대에 피로와 압박감이 높아져 짧은 정리 대화를 진행했어요.",
    tag: "어제",
  },
  {
    title: "밤 시간대 과몰입 패턴",
    desc: "늦은 밤 반복된 비교와 자기비판 흐름이 감지되어 감정 리포트에 반영되었어요.",
    tag: "이번 주",
  },
];

const quickStats = [
  { label: "오늘 먼저 건넨 말", value: "3회", sub: "사용자 반응 유도 시작" },
  { label: "이번 주 대화 수", value: "18회", sub: "짧은 체크인 포함" },
  { label: "가장 자주 나온 감정", value: "불안", sub: "진로 · 비교 키워드 중심" },
  { label: "감정 안정도", value: "54%", sub: "전주 대비 +8%" },
];

const todaySignals = [
  {
    title: "오후 3시 집중 정체",
    desc: "작업 화면에 오래 멈춰 있는 패턴이 관찰되었어요.",
    chip: "관찰됨",
    variant: "warning",
  },
  {
    title: "저녁 시간 대화 반응 증가",
    desc: "오늘은 저녁 시간대에 메이티와 가장 길게 대화를 이어갔어요.",
    chip: "긍정 신호",
    variant: "success",
  },
  {
    title: "비교 관련 키워드 반복",
    desc: "‘뒤처지는 느낌’, ‘비교’, ‘불안’ 같은 표현이 자주 등장했어요.",
    chip: "리포트 반영",
    variant: "danger",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <section className="dashboard-page">
      <div className="dashboard-page__hero">
        <div className="dashboard-page__hero-top">
          <div>
            <h1>안녕하세요, 오늘의 메이티 대시보드예요</h1>
            <p>
              메이티와의 최근 상호작용, 감정 흐름, 빠른 설정 진입 기능을 한눈에 볼 수 있어요.
            </p>
          </div>

          <div className="dashboard-page__hero-badges">
            <div className="dashboard-badge">🌷 사용자 상태 요약</div>
            <div className="dashboard-badge">📈 감정 리포트 연결</div>
            <div className="dashboard-badge">🔐 보안 설정 가능</div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid-4">
        {quickStats.map((item) => (
          <article className="stat-card" key={item.label}>
            <div className="stat-card__label">{item.label}</div>
            <div className="stat-card__value">{item.value}</div>
            <div className="stat-card__sub">{item.sub}</div>
          </article>
        ))}
      </div>

      <div className="dashboard-grid-2">
        <article className="dashboard-card">
          <h3>빠른 이동</h3>
          <p style={{ marginBottom: "16px" }}>
            자주 보는 메뉴로 바로 이동해보세요.
          </p>

          <div className="quick-actions">
            <button
              type="button"
              className="dashboard-button"
              onClick={() => navigate("/dashboard/chat-history")}
            >
              대화 내역 보기
            </button>
            <button
              type="button"
              className="dashboard-button--ghost"
              onClick={() => navigate("/dashboard/reports")}
            >
              리포트 확인
            </button>
            <button
              type="button"
              className="dashboard-button--ghost"
              onClick={() => navigate("/dashboard/security")}
            >
              보안 설정
            </button>
          </div>
        </article>

        <article className="dashboard-card">
          <h3>오늘의 메이티 메모</h3>
          <p>
            오늘은 불안감이 비교적 높은 편이지만, 저녁 시간대에 대화 반응이 좋아
            안정감이 서서히 회복되는 흐름이 보여요. 짧은 휴식과 정리 대화가 도움이 될 수 있어요.
          </p>
        </article>
      </div>

      <div className="dashboard-grid-2">
        <article className="dashboard-card">
          <h3>최근 대화 주제</h3>

          <div className="dashboard-list">
            {recentChats.map((chat) => (
              <div className="dashboard-list__item" key={chat.title}>
                <div>
                  <strong>{chat.title}</strong>
                  <p>{chat.desc}</p>
                </div>
                <div className="dashboard-chip">{chat.tag}</div>
              </div>
            ))}
          </div>
        </article>

        <article className="dashboard-card">
          <h3>오늘 감지된 신호</h3>

          <div className="dashboard-list">
            {todaySignals.map((signal) => (
              <div className="dashboard-list__item" key={signal.title}>
                <div>
                  <strong>{signal.title}</strong>
                  <p>{signal.desc}</p>
                </div>
                <div className={`dashboard-chip ${signal.variant}`}>{signal.chip}</div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="dashboard-card">
        <h3>이번 주 흐름 요약</h3>
        <p style={{ marginBottom: "14px" }}>
          이번 주에는 “취업”, “비교”, “피로”, “자기의심” 키워드가 반복적으로 등장했어요.
          하지만 메이티와의 상호작용 길이는 점점 늘어나고 있어서, 사용자가 정서적 반응을 표현하는 흐름은 오히려 좋아지고 있어요.
        </p>

        <div className="quick-actions">
          <button
            type="button"
            className="dashboard-button--soft"
            onClick={() => navigate("/dashboard/reports")}
          >
            감정 분석 더 보기
          </button>
          <button
            type="button"
            className="dashboard-button--soft"
            onClick={() => navigate("/dashboard/settings")}
          >
            메이트 성격 조정
          </button>
        </div>
      </article>
    </section>
  );
};

export default Dashboard;
