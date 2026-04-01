import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const moveToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const moveToPage = (path) => {
    navigate(path);
  };

  return (
    <footer className="matey-footer">
      <div className="matey-footer__glow matey-footer__glow--pink" />
      <div className="matey-footer__glow matey-footer__glow--mint" />

      <div className="matey-footer__inner">
        <div className="matey-footer__top">
          <div className="matey-footer__brand">
            <div className="matey-footer__logo">
              <div className="matey-footer__logo-mark">M</div>
              <div className="matey-footer__logo-text">
                <strong>메이티</strong>
                <span>먼저 다가오는 AI 메이트</span>
              </div>
            </div>

            <p className="matey-footer__desc">
              메이티는 사용자가 먼저 도움을 요청하기 전에도
              일상 가까이에 머물며 조심스럽게 먼저 다가오는
              감정 동반자형 AI 서비스를 지향합니다.
            </p>

            <div className="matey-footer__chips">
              <span>💬 능동형 상담</span>
              <span>🖥️ 데스크톱 상주형 경험</span>
              <span>📊 웹 대시보드 연동</span>
            </div>
          </div>

          <div className="matey-footer__links-wrap">
            <div className="matey-footer__column">
              <h4>서비스</h4>
              <button type="button" onClick={() => moveToSection("intro")}>
                소개
              </button>
              <button type="button" onClick={() => moveToSection("pricing")}>
                가격
              </button>
              <button type="button" onClick={() => moveToPage("/download")}>
                다운로드
              </button>
              <button type="button" onClick={() => moveToPage("/signup")}>
                무료 체험
              </button>
            </div>

            <div className="matey-footer__column">
              <h4>지원</h4>
              <button type="button" onClick={() => moveToSection("help")}>
                도움말
              </button>
              <button type="button" onClick={() => moveToPage("/login")}>
                로그인
              </button>
              <button type="button" onClick={() => moveToPage("/mypage")}>
                마이페이지
              </button>
              <button type="button" onClick={() => moveToPage("/dashboard")}>
                대시보드
              </button>
            </div>

            <div className="matey-footer__column">
              <h4>프로젝트 정보</h4>
              <a href="mailto:matey.team@example.com">matey.team@example.com</a>
              <span>2차 프로젝트 · AI 고민상담 서비스</span>
              <span>Web + Desktop Connected Experience</span>
              <span>Made with React & Electron Concept</span>
            </div>
          </div>
        </div>

        <div className="matey-footer__bottom">
          <p>© 2026 Matey. All rights reserved.</p>

          <div className="matey-footer__bottom-links">
            <button type="button" onClick={() => moveToPage("/")}>
              홈
            </button>
            <button type="button" onClick={() => moveToPage("/download")}>
              다운로드
            </button>
            <button type="button" onClick={() => moveToPage("/signup")}>
              시작하기
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
