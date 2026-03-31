import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🫧</span>
            <span className="logo-text">메이티</span>
          </div>
          <p>당신의 감정을 먼저 이해하는 AI 친구</p>
        </div>

        <div className="footer-section">
          <h4>제품</h4>
          <ul>
            <li><a href="#features">특징</a></li>
            <li><a href="#pricing">가격</a></li>
            <li><a href="#download">다운로드</a></li>
            <li><a href="#blog">블로그</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>회사</h4>
          <ul>
            <li><a href="#about">소개</a></li>
            <li><a href="#contact">문의</a></li>
            <li><a href="#careers">채용</a></li>
            <li><a href="#press">보도자료</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>법률</h4>
          <ul>
            <li><a href="#terms">이용약관</a></li>
            <li><a href="#privacy">개인정보보호</a></li>
            <li><a href="#security">보안</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>팔로우</h4>
          <div className="social-links">
            <a href="#instagram">📱 Instagram</a>
            <a href="#twitter">🐦 Twitter</a>
            <a href="#youtube">▶️ YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Matey. All rights reserved. 💙</p>
      </div>
    </footer>
  );
}

export default Footer;
