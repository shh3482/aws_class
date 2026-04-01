import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="matey-footer">
      <div className="container matey-footer__grid">
        <div className="matey-footer__brand glass-card">
          <div className="matey-footer__brand-top">
            <div className="matey-footer__brand-icon">
              <img src="/images/rabbit-duo.png" alt="Matey companions" />
            </div>
            <div>
              <strong>Matey</strong>
              <p>혼자 버티는 시간을 줄여주는 작은 AI 펫 상담사</p>
            </div>
          </div>

          <div className="matey-footer__chips">
            <span className="pill-chip">웹 · 데스크톱 연동</span>
            <span className="pill-chip">능동형 대화 시작</span>
            <span className="pill-chip">파스텔 글래스 무드</span>
          </div>
        </div>

        <div className="matey-footer__links glass-card">
          <div>
            <h4>서비스</h4>
            <Link to="/">홈</Link>
            <Link to="/dashboard">대시보드</Link>
            <Link to="/dashboard/chat-history">상담 기록</Link>
            <Link to="/dashboard/reports">감정 리포트</Link>
          </div>

          <div>
            <h4>계정</h4>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/dashboard/security-settings">보안 설정</Link>
          </div>

          <div>
            <h4>브랜드</h4>
            <a href="/#features">핵심 기능</a>
            <a href="/#character-hub">캐릭터 체험</a>
            <a href="/#how-it-works">이용 방법</a>
            <a href="/#download">데스크톱 앱</a>
          </div>
        </div>
      </div>

      <div className="container matey-footer__bottom">
        <span>© 2026 Matey. 따뜻한 AI 컴패니언 경험.</span>
        <span>Privacy First · Gentle UX · Cute Companion</span>
      </div>
    </footer>
  );
}

export default Footer;
