import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, isAdmin, loading, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);
  const [mobileDashboardOpen, setMobileDashboardOpen] = useState(false);

  const userLabel =
    user?.nickname ||
    user?.name ||
    (user?.email ? user.email.split("@")[0] : "메이티 유저");

  const publicMenus = useMemo(
    () => [
      { label: "소개", type: "section", value: "intro" },
      { label: "가격", type: "section", value: "pricing" },
      { label: "도움말", type: "section", value: "faq" },
      { label: "무료 체험", type: "route", value: "/signup", highlight: true },
      { label: "다운로드", type: "route", value: "/download" },
    ],
    []
  );

  const dashboardMenus = useMemo(
    () => [
      { label: "대시보드 홈", to: "/dashboard" },
      { label: "대화내역", to: "/dashboard/chat-history" },
      { label: "보안설정", to: "/dashboard/security" },
      { label: "리포트 · 고민 히스토리", to: "/dashboard/reports?tab=history" },
      { label: "리포트 · 감정분석", to: "/dashboard/reports?tab=emotion" },
      { label: "리포트 · 하루 요약", to: "/dashboard/reports?tab=daily" },
      { label: "개인정보관리", to: "/dashboard/personal-info" },
      { label: "개인설정", to: "/dashboard/settings" },
    ],
    []
  );

  useEffect(() => {
    setMobileMenuOpen(false);
    setDashboardMenuOpen(false);
    setMobileDashboardOpen(false);
  }, [location.pathname, location.hash, location.search]);

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const moveToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setDashboardMenuOpen(false);
    setMobileDashboardOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const moveToRoute = (path) => {
    setMobileMenuOpen(false);
    setDashboardMenuOpen(false);
    setMobileDashboardOpen(false);
    navigate(path);
  };

  const handlePublicMenuClick = (menu) => {
    if (menu.type === "section") {
      moveToSection(menu.value);
      return;
    }
    moveToRoute(menu.value);
  };

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    setDashboardMenuOpen(false);
    setMobileDashboardOpen(false);
    navigate("/");
  };

  if (loading) {
    return null;
  }

  return (
    <header className="matey-header">
      <div className="container matey-header__inner">
        <Link to="/" className="matey-header__logo" aria-label="메이티 홈으로 이동">
          <span className="matey-header__logo-mark">💜</span>
          <span className="matey-header__logo-text">메이티</span>
        </Link>

        <nav className="matey-header__nav" aria-label="메인 메뉴">
          <div className="matey-header__nav-list">
            {publicMenus.map((menu) => (
              <button
                key={menu.label}
                type="button"
                className={`matey-header__nav-button ${
                  menu.highlight ? "is-highlight" : ""
                }`}
                onClick={() => handlePublicMenuClick(menu)}
              >
                {menu.label}
              </button>
            ))}

            {isAuthenticated && (
              <div
                className={`matey-header__dropdown ${
                  dashboardMenuOpen ? "is-open" : ""
                }`}
              >
                <button
                  type="button"
                  className="matey-header__nav-button matey-header__dropdown-trigger"
                  onClick={() => setDashboardMenuOpen((prev) => !prev)}
                  aria-expanded={dashboardMenuOpen}
                  aria-haspopup="true"
                >
                  대시보드
                  <span className="matey-header__dropdown-arrow">
                    {dashboardMenuOpen ? "▲" : "▼"}
                  </span>
                </button>

                {dashboardMenuOpen && (
                  <div className="matey-header__dropdown-menu" role="menu">
                    {dashboardMenus.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        className="matey-header__dropdown-item"
                        onClick={() => moveToRoute(item.to)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {isAuthenticated && (
              <button
                type="button"
                className="matey-header__nav-button"
                onClick={() => moveToRoute("/mypage")}
              >
                마이페이지
              </button>
            )}

            {isAdmin && (
              <button
                type="button"
                className="matey-header__nav-button"
                onClick={() => moveToRoute("/admin")}
              >
                관리자 페이지
              </button>
            )}
          </div>
        </nav>

        <div className="matey-header__actions">
          {!isAuthenticated ? (
            <>
              <button
                type="button"
                className="matey-header__text-action"
                onClick={() => moveToRoute("/login")}
              >
                로그인
              </button>

              <button
                type="button"
                className="matey-header__primary-action"
                onClick={() => moveToRoute("/signup")}
              >
                회원가입
              </button>
            </>
          ) : (
            <>
              <div className="matey-header__user-chip">
                <span className="matey-header__user-emoji">✨</span>
                <span>{userLabel}님</span>
              </div>

              <button
                type="button"
                className="matey-header__text-action"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </>
          )}

          <button
            type="button"
            className="matey-header__mobile-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="모바일 메뉴 열기"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="matey-header__mobile-panel">
          <div className="matey-header__mobile-list">
            {publicMenus.map((menu) => (
              <button
                key={menu.label}
                type="button"
                className={`matey-header__mobile-link ${
                  menu.highlight ? "is-highlight" : ""
                }`}
                onClick={() => handlePublicMenuClick(menu)}
              >
                {menu.label}
              </button>
            ))}

            {!isAuthenticated ? (
              <>
                <button
                  type="button"
                  className="matey-header__mobile-link"
                  onClick={() => moveToRoute("/login")}
                >
                  로그인
                </button>
                <button
                  type="button"
                  className="matey-header__mobile-link is-primary"
                  onClick={() => moveToRoute("/signup")}
                >
                  회원가입
                </button>
              </>
            ) : (
              <>
                <div className="matey-header__mobile-user">
                  <span className="matey-header__mobile-user-badge">💫</span>
                  <span>{userLabel}님, 오늘도 반가워요</span>
                </div>

                <button
                  type="button"
                  className="matey-header__mobile-link"
                  onClick={() => moveToRoute("/mypage")}
                >
                  마이페이지
                </button>

                <button
                  type="button"
                  className="matey-header__mobile-link"
                  onClick={() => setMobileDashboardOpen((prev) => !prev)}
                >
                  대시보드 {mobileDashboardOpen ? "▲" : "▼"}
                </button>

                {mobileDashboardOpen && (
                  <div className="matey-header__mobile-submenu">
                    {dashboardMenus.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        className="matey-header__mobile-sublink"
                        onClick={() => moveToRoute(item.to)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}

                {isAdmin && (
                  <button
                    type="button"
                    className="matey-header__mobile-link"
                    onClick={() => moveToRoute("/admin")}
                  >
                    관리자 페이지
                  </button>
                )}

                <button
                  type="button"
                  className="matey-header__mobile-link"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
