import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        {/* 로고 */}
        <div className="header__logo">
          <div className="logo-icon">🤖</div>
          <span className="logo-text">
            마음AI<span className="logo-dot">.</span>
          </span>
        </div>

        {/* 네비게이션 */}
        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <a href="#features">기능 소개</a>
          <a href="#how-it-works">이용 방법</a>
          <a href="#chat-demo">체험하기</a>
          <a href="#footer">문의</a>
        </nav>

        {/* CTA 버튼 */}
        <div className="header__actions">
          <button className="btn-outline">로그인</button>
          <button className="btn-primary">무료 시작</button>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
};

export default Header;
