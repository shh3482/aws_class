import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* CTA 배너 */}
      <div className="footer-cta-banner container">
        <div className="cta-content">
          <div className="cta-char">🐰</div>
          <div>
            <h3 className="cta-title">지금 바로 마음친구와<br /><span>대화를 시작해보세요</span></h3>
            <p className="cta-sub">무료로 시작할 수 있어요. 신용카드 불필요 ✨</p>
          </div>
        </div>
        <div className="cta-actions">
          <button className="cta-btn primary">무료로 시작하기 →</button>
          <button className="cta-btn secondary">앱 다운로드</button>
        </div>
      </div>

      {/* 메인 푸터 */}
      <div className="footer-main container">
        {/* 브랜드 */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">🫧</div>
            <span>마음친구</span>
          </div>
          <p className="footer-tagline">
            먼저 다가가는 AI 친구.<br />
            당신 곁에 언제나 함께합니다.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="인스타그램">📸</a>
            <a href="#" className="social-btn" aria-label="트위터">🐦</a>
            <a href="#" className="social-btn" aria-label="유튜브">▶️</a>
            <a href="#" className="social-btn" aria-label="카카오">💛</a>
          </div>
        </div>

        {/* 링크 */}
        <div className="footer-links">
          <div className="link-group">
            <h4>서비스</h4>
            <a href="#">서비스 소개</a>
            <a href="#">이용 방법</a>
            <a href="#">요금제</a>
            <a href="#">데모 체험</a>
          </div>
          <div className="link-group">
            <h4>지원</h4>
            <a href="#">FAQ</a>
            <a href="#">고객센터</a>
            <a href="#">블로그</a>
            <a href="#">업데이트</a>
          </div>
          <div className="link-group">
            <h4>법적 고지</h4>
            <a href="#">서비스 이용약관</a>
            <a href="#">개인정보 처리방침</a>
            <a href="#">위치기반 서비스</a>
          </div>
        </div>
      </div>

      {/* 하단 */}
      <div className="footer-bottom container">
        <p>© 2025 마음친구. All rights reserved. Made with 🩷 for mental wellness.</p>
        <div className="footer-badges">
          <span className="f-badge">🔒 개인정보 보호</span>
          <span className="f-badge">🌟 AI 윤리 준수</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
