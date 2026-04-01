import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  { label: '홈', to: '/' },
  { label: '기능', to: '/#features' },
  { label: '데모', to: '/#character-hub' },
  { label: '리포트', to: '/dashboard/reports' },
  { label: '다운로드', to: '/#download' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="matey-header">
      <div className="container matey-header__inner">
        <Link to="/" className="matey-header__brand">
          <div className="matey-header__brand-icon">
            <img src="/images/rabbit.png" alt="Matey rabbit" />
          </div>
          <div className="matey-header__brand-copy">
            <strong>Matey</strong>
            <span>나를 따라다니는 AI 펫 상담사</span>
          </div>
        </Link>

        <nav className={`matey-header__nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.to}
              className="matey-header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="matey-header__actions">
          <NavLink to="/login" className="matey-header__text-link">
            로그인
          </NavLink>
          <NavLink to="/signup" className="btn btn-primary matey-header__cta">
            시작하기
          </NavLink>

          <button
            type="button"
            className="matey-header__menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="모바일 메뉴 열기"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
