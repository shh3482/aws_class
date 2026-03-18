import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner container">
        {/* 로고 */}
        <a href="#home" className="logo">
          <div className="logo-icon">
            <span className="logo-emoji">🫧</span>
          </div>
          <span className="logo-text">마음친구</span>
        </a>

        {/* 데스크톱 네비 */}
        <nav className="nav-desktop">
          <a href="#features" className="nav-link">서비스 소개</a>
          <a href="#how-it-works" className="nav-link">이용 방법</a>
          <a href="#chat-demo" className="nav-link">데모 체험</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#blog" className="nav-link">블로그</a>
        </nav>

        {/* CTA 버튼 */}
        <div className="header-cta">
          <button className="btn-login">로그인</button>
          <button className="btn-start">무료 시작하기 ✨</button>
        </div>

        {/* 모바일 햄버거 */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴">
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#features" onClick={() => setMenuOpen(false)}>서비스 소개</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>이용 방법</a>
          <a href="#chat-demo" onClick={() => setMenuOpen(false)}>데모 체험</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <div className="mobile-btns">
            <button className="btn-login">로그인</button>
            <button className="btn-start">무료 시작하기 ✨</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
