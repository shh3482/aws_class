import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        {/* 로고 */}
        <a href="/" className="logo" onClick={() => navigate('/')}>
          <div className="logo-icon">
            <span className="logo-emoji">🫧</span>
          </div>
          <span className="logo-text">메이티</span>
        </a>

        {/* 미로그인 상태: 데스크톱 네비 */}
        {!isLoggedIn && (
          <nav className="nav-desktop">
            <a href="#features" className="nav-link">서비스 소개</a>
            <a href="#how-it-works" className="nav-link">이용 방법</a>
            <a href="#pricing" className="nav-link">가격</a>
            <a href="#help" className="nav-link">도움말</a>
            <a href="#demo" className="nav-link">무료 체험</a>
            <a href="#download" className="nav-link">다운로드</a>
          </nav>
        )}

        {/* 로그인 상태: 대시보드 네비 */}
        {isLoggedIn && !isAdmin && (
          <nav className="nav-desktop">
            <a href="/dashboard" className="nav-link">대시보드</a>
            <a href="/mypage" className="nav-link">마이페이지</a>
          </nav>
        )}

        {/* 관리자 상태: 관리자 네비 */}
        {isLoggedIn && isAdmin && (
          <nav className="nav-desktop">
            <a href="/dashboard" className="nav-link">대시보드</a>
            <a href="/admin" className="nav-link">관리자 페이지</a>
            <a href="/mypage" className="nav-link">마이페이지</a>
          </nav>
        )}

        {/* CTA 버튼 - 상태별 다름 */}
        <div className="header-cta">
          {!isLoggedIn ? (
            <>
              <button 
                className="btn-login"
                onClick={() => navigate('/login')}
              >
                로그인
              </button>
              <button 
                className="btn-start"
                onClick={() => navigate('/signup')}
              >
                무료 체험 ✨
              </button>
            </>
          ) : (
            <>
              <span className="user-greeting">
                {isAdmin ? '👑 관리자' : '👤 사용자'}
              </span>
              <button 
                className="btn-logout"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </>
          )}
        </div>

        {/* 모바일 햄버거 */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="메뉴"
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="mobile-menu">
          {!isLoggedIn && (
            <>
              <a href="#features" onClick={() => setMenuOpen(false)}>서비스 소개</a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>이용 방법</a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>가격</a>
              <a href="#help" onClick={() => setMenuOpen(false)}>도움말</a>
              <a href="#demo" onClick={() => setMenuOpen(false)}>무료 체험</a>
              <a href="#download" onClick={() => setMenuOpen(false)}>다운로드</a>
            </>
          )}
          {isLoggedIn && (
            <>
              <a href="/dashboard" onClick={() => setMenuOpen(false)}>대시보드</a>
              <a href="/mypage" onClick={() => setMenuOpen(false)}>마이페이지</a>
              {isAdmin && <a href="/admin" onClick={() => setMenuOpen(false)}>관리자 페이지</a>}
            </>
          )}
          <div className="mobile-btns">
            {!isLoggedIn ? (
              <>
                <button className="btn-login" onClick={() => navigate('/login')}>로그인</button>
                <button className="btn-start" onClick={() => navigate('/signup')}>무료 체험</button>
              </>
            ) : (
              <button className="btn-logout" onClick={handleLogout}>로그아웃</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
