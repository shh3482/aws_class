import React from 'react';
import { NavLink } from 'react-router-dom';

const menuGroups = [
  {
    title: '메인',
    items: [
      { label: '대시보드 홈', to: '/dashboard' },
      { label: '상담 기록', to: '/dashboard/chat-history' },
      { label: '감정 리포트', to: '/dashboard/reports' },
    ],
  },
  {
    title: '내 캐릭터',
    items: [
      { label: '개인 정보', to: '/dashboard/personal-info' },
      { label: '성격 / 외형 설정', to: '/dashboard/personal-settings' },
      { label: '보안 설정', to: '/dashboard/security-settings' },
    ],
  },
  {
    title: '기타',
    items: [
      { label: '마이페이지', to: '/mypage' },
      { label: '관리자', to: '/admin' },
    ],
  },
];

function DashboardSidebar() {
  return (
    <aside className="matey-dashboard-sidebar glass-card">
      <div className="matey-dashboard-sidebar__top">
        <div className="matey-dashboard-sidebar__icon">
          <img src="/images/rabbit.png" alt="Matey rabbit" />
        </div>
        <div>
          <strong>Matey Space</strong>
          <span>나만의 펫 상담사 대시보드</span>
        </div>
      </div>

      <div className="matey-dashboard-sidebar__status">
        <span className="status-dot" />
        오늘도 부드럽게 연결 중
      </div>

      <div className="matey-dashboard-sidebar__menus">
        {menuGroups.map((group) => (
          <div key={group.title} className="matey-dashboard-sidebar__group">
            <p>{group.title}</p>
            <div className="matey-dashboard-sidebar__links">
              {group.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `matey-dashboard-sidebar__link ${isActive ? 'is-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default DashboardSidebar;
