import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span>🤖</span> 마음AI
          </div>
          <p className="footer__tagline">
            AI와 함께하는 따뜻한 고민 상담.<br />
            언제나, 어디서나.
          </p>
          <div className="footer__social">
            {['📘', '🐦', '📸', '▶️'].map((icon, i) => (
              <button key={i} className="social-btn">{icon}</button>
            ))}
          </div>
        </div>

        <div className="footer__links">
          {[
            { title: '서비스', links: ['기능 소개', '이용 방법', '가격 정책', '후기'] },
            { title: '지원', links: ['자주 묻는 질문', '고객센터', '공지사항', '블로그'] },
            { title: '법적 고지', links: ['개인정보처리방침', '이용약관', '쿠키 정책', '접근성'] },
          ].map((col, i) => (
            <div key={i} className="footer__col">
              <h4 className="footer__col-title">{col.title}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2025 마음AI. All rights reserved.</p>
          <p>Team. 2차 프로젝트 AI 고민상담 서비스</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
