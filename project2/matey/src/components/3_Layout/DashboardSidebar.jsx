import React from "react";
import { NavLink } from "react-router-dom";

const menuGroups = [
  {
    title: "메인",
    items: [
      { label: "대시보드 홈", to: "/dashboard", icon: "🏠" },
    ],
  },
  {
    title: "상담 기록",
    items: [
      { label: "대화 내역", to: "/dashboard/chat-history", icon: "💬" },
    ],
  },
  {
    title: "보안",
    items: [
      { label: "보안 설정", to: "/dashboard/security", icon: "🔐" },
    ],
  },
  {
    title: "리포트",
    items: [
      { label: "고민 히스토리 / 감정 분석 / 하루 요약", to: "/dashboard/reports", icon: "📊" },
    ],
  },
  {
    title: "계정 관리",
    items: [
      { label: "개인정보 관리", to: "/dashboard/personal-info", icon: "👤" },
      { label: "개인 설정", to: "/dashboard/settings", icon: "⚙️" },
    ],
  },
];

const DashboardSidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar__profile">
        <div className="dashboard-sidebar__avatar">🐰</div>
        <div>
          <strong>메이티 대시보드</strong>
          <p>오늘의 감정 흐름과 기록을 확인해보세요</p>
        </div>
      </div>

      <div className="dashboard-sidebar__notice">
        <span>오늘의 한마디</span>
        <strong>“너를 먼저 알아차리는 메이트가 여기 있어.”</strong>
      </div>

      {menuGroups.map((group) => (
        <div className="dashboard-sidebar__group" key={group.title}>
          <h4>{group.title}</h4>

          <div className="dashboard-sidebar__links">
            {group.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"}
                className={({ isActive }) =>
                  `dashboard-sidebar__link ${isActive ? "active" : ""}`
                }
              >
                <span className="dashboard-sidebar__icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default DashboardSidebar;
