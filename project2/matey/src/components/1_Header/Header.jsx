import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const NAV_ITEMS = [
  { label: '기능', hash: 'features' },
  { label: '이용 방법', hash: 'how-it-works' },
  { label: '대화 예시', hash: 'chat-demo' },
  { label: '요금제', hash: 'pricing' },
  { label: 'FAQ', hash: 'faq' },
];

function Header({
  isLoggedIn: controlledIsLoggedIn,
  user: controlledUser,
  onLogout,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    const resolveActiveSection = () => {
      setIsScrolled(window.scrollY > 10);

      if (location.pathname !== '/') {
        setActiveHash(location.hash?.replace('#', '') || '');
        return;
      }

      const headerOffset = 120;
      const scrollY = window.scrollY + headerOffset;

      let current = '';
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.hash);
        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          current = item.hash;
          break;
        }
      }

      if (!current && window.scrollY < 120) {
        current = '';
      }

      setActiveHash(current);
    };

    resolveActiveSection();
    window.addEventListener('scroll', resolveActiveSection, { passive: true });
    window.addEventListener('resize', resolveActiveSection);

    return () => {
      window.removeEventListener('scroll', resolveActiveSection);
      window.removeEventListener('resize', resolveActiveSection);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (typeof controlledIsLoggedIn === 'boolean') {
      setAuthState({
        isLoggedIn: controlledIsLoggedIn,
        user: controlledUser || null,
      });
      return;
    }

    const token =
      window.localStorage.getItem('accessToken') ||
      window.localStorage.getItem('mateyToken');

    const storedUserRaw =
      window.localStorage.getItem('mateyUser') ||
      window.localStorage.getItem('user');

    let parsedUser = null;

    try {
      parsedUser = storedUserRaw ? JSON.parse(storedUserRaw) : null;
    } catch (error) {
      parsedUser = null;
    }

    setAuthState({
      isLoggedIn: Boolean(token || parsedUser),
      user: parsedUser,
    });
  }, [controlledIsLoggedIn, controlledUser, location.pathname]);

  useEffect(() => {
    const handleOutside = (event) => {
      if (!profileRef.current) return;
      if (!profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const displayName = useMemo(() => {
    if (!authState.user) return '사용자';
    return (
      authState.user.nickname ||
      authState.user.name ||
      authState.user.username ||
      authState.user.email?.split('@')?.[0] ||
      '사용자'
    );
  }, [authState.user]);

  const moveToHash = (hash) => {
    const targetId = hash.replace('#', '');

    setIsMenuOpen(false);
    setIsProfileOpen(false);
    setActiveHash(targetId);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 96;
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  const handleGoDownload = () => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
    navigate('/download');
  };

  const handleBrandClick = (event) => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);

    if (location.pathname === '/') {
      event.preventDefault();
      setActiveHash('');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleLogout = () => {
    if (typeof onLogout === 'function') onLogout();

    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('mateyToken');
    window.localStorage.removeItem('mateyUser');
    window.localStorage.removeItem('user');

    setAuthState({
      isLoggedIn: false,
      user: null,
    });

    setIsProfileOpen(false);
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <header className={`matey-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="matey-header__shell">
        <div className="matey-header__inner">
          <div className="matey-header__left">
            <Link
              to="/"
              className="matey-header__brand"
              aria-label="메이티 홈으로 이동"
              onClick={handleBrandClick}
            >
              <span className="matey-header__brand-mark">M</span>
              <span className="matey-header__brand-copy">
                <span className="matey-header__brand-text">Matey</span>
                <span className="matey-header__brand-sub">AI Mate for gentle conversations</span>
              </span>
            </Link>
          </div>

          <div className="matey-header__center">
            <nav className="matey-header__nav" aria-label="메인 내비게이션">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHash === item.hash;

                return (
                  <button
                    key={item.hash}
                    type="button"
                    className={`matey-header__nav-link ${isActive ? 'is-active' : ''}`}
                    onClick={() => moveToHash(`#${item.hash}`)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="matey-header__right">
            <div className="matey-header__actions">
              <button
                type="button"
                className="matey-header__ghost"
                onClick={handleGoDownload}
              >
                다운로드
              </button>

              {authState.isLoggedIn ? (
                <div className="matey-header__profile" ref={profileRef}>
                  <button
                    type="button"
                    className="matey-header__profile-trigger"
                    aria-expanded={isProfileOpen}
                    onClick={() => setIsProfileOpen((prev) => !prev)}
                  >
                    <span className="matey-header__avatar">
                      {displayName.charAt(0)}
                    </span>
                    <span className="matey-header__profile-meta">
                      <span className="matey-header__profile-label">반가워요</span>
                      <span className="matey-header__profile-name">{displayName}</span>
                    </span>
                  </button>

                  <div className={`matey-header__dropdown ${isProfileOpen ? 'is-open' : ''}`}>
                    <NavLink
                      to="/dashboard"
                      className="matey-header__dropdown-link"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      to="/mypage"
                      className="matey-header__dropdown-link"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      MyPage
                    </NavLink>
                    <button
                      type="button"
                      className="matey-header__dropdown-link matey-header__dropdown-link--danger"
                      onClick={handleLogout}
                    >
                      로그아웃
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/login" className="matey-header__text-button">
                    로그인
                  </Link>
                  <Link to="/signup" className="matey-header__primary">
                    회원가입
                  </Link>
                </>
              )}
            </div>

            <button
              type="button"
              className={`matey-header__menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="모바일 메뉴 열기"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div className={`matey-header__mobile ${isMenuOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="matey-header__mobile-overlay"
          aria-label="메뉴 닫기"
          onClick={() => setIsMenuOpen(false)}
        />

        <div className="matey-header__mobile-panel">
          <div className="matey-header__mobile-top">
            <div className="matey-header__mobile-brand">
              <span className="matey-header__mobile-brand-mark">M</span>
              <div className="matey-header__mobile-brand-copy">
                <strong>Matey</strong>
                <span>편안한 대화를 시작해보세요</span>
              </div>
            </div>
          </div>

          <nav className="matey-header__mobile-nav" aria-label="모바일 내비게이션">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHash === item.hash;

              return (
                <button
                  key={item.hash}
                  type="button"
                  className={`matey-header__mobile-link ${isActive ? 'is-active' : ''}`}
                  onClick={() => moveToHash(`#${item.hash}`)}
                >
                  <span>{item.label}</span>
                  <span className="matey-header__mobile-link-arrow">→</span>
                </button>
              );
            })}
          </nav>

          <div className="matey-header__mobile-divider" />

          <div className="matey-header__mobile-actions">
            <button
              type="button"
              className="matey-header__mobile-soft"
              onClick={handleGoDownload}
            >
              다운로드
            </button>

            {authState.isLoggedIn ? (
              <div className="matey-header__mobile-auth">
                <Link
                  to="/dashboard"
                  className="matey-header__mobile-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/mypage"
                  className="matey-header__mobile-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MyPage
                </Link>
                <button
                  type="button"
                  className="matey-header__mobile-primary"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="matey-header__mobile-auth">
                <Link
                  to="/login"
                  className="matey-header__mobile-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  로그인
                </Link>
                <Link
                  to="/signup"
                  className="matey-header__mobile-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
