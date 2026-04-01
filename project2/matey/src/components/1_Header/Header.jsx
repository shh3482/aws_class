import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const name = localStorage.getItem("userName");
    
    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "사용자");
      
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        if (payload.role === "ADMIN" || payload.role === "SUPERADMIN") {
          setIsAdmin(true);
        }
      } catch (e) {
        console.error("토큰 파싱 실패:", e);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigate("/");
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* 로고 */}
        <Link to="/" className="logo">
          <div className="logo-icon">🐰</div>
          <span className="logo-text">Matey</span>
        </Link>

        {/* 네비게이션 - 데스크톱 */}
        <nav className="nav-desktop">
          <a href="/#about" className="nav-link">소개</a>
          <a href="/#pricing" className="nav-link">가격</a>
          <a href="/#help" className="nav-link">도움말</a>
        </nav>

        {/* 우측 액션 */}
        <div className="header-actions">
          {isLoggedIn ? (
            <div className="user-section">
              <button 
                className="btn-free-trial"
                onClick={() => navigate("/chat")}
              >
                <i className="fas fa-comments" />
                무료 체험
              </button>
              
              <button 
                className="btn-download"
                onClick={() => navigate("/download")}
              >
                <i className="fas fa-download" />
                다운로드
              </button>

              <div className="user-menu">
                <button className="user-btn">
                  <span className="user-avatar">{userName[0]}</span>
                  <span className="user-name">{userName}</span>
                  <i className="fas fa-chevron-down" />
                </button>

                <div className="dropdown-menu">
                  <Link to="/mypage" className="dropdown-item">
                    <i className="fas fa-user" />
                    마이페이지
                  </Link>
                  <Link to="/dashboard" className="dropdown-item">
                    <i className="fas fa-chart-line" />
                    대시보드
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="dropdown-item admin-item">
                      <i className="fas fa-user-shield" />
                      관리자 패널
                    </Link>
                  )}
                  <div className="dropdown-divider" />
                  <button onClick={handleLogout} className="dropdown-item logout">
                    <i className="fas fa-sign-out-alt" />
                    로그아웃
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="auth-section">
              <button 
                className="btn-free-trial"
                onClick={() => navigate("/chat")}
              >
                <i className="fas fa-comments" />
                무료 체험
              </button>
              
              <button 
                className="btn-download"
                onClick={() => navigate("/download")}
              >
                <i className="fas fa-download" />
                다운로드
              </button>

              <Link to="/login" className="btn-login">
                로그인
              </Link>

              <Link to="/signup" className="btn-signup">
                회원가입
              </Link>
            </div>
          )}

          {/* 모바일 메뉴 버튼 */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas fa-${isMenuOpen ? "times" : "bars"}`} />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="/#about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            소개
          </a>
          <a href="/#pricing" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            가격
          </a>
          <a href="/#help" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            도움말
          </a>
          
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                <i className="fas fa-chart-line" /> 대시보드
              </Link>
              {isAdmin && (
                <Link to="/admin" className="mobile-nav-link admin-link" onClick={() => setIsMenuOpen(false)}>
                  <i className="fas fa-user-shield" /> 관리자
                </Link>
              )}
              <button onClick={handleLogout} className="mobile-nav-link logout-link">
                <i className="fas fa-sign-out-alt" /> 로그아웃
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                로그인
              </Link>
              <Link to="/signup" className="mobile-nav-link signup-link" onClick={() => setIsMenuOpen(false)}>
                회원가입
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
