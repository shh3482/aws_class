import React from 'react';

function ChatPage() {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      background: 'linear-gradient(135deg, var(--primary-blue-lighter) 0%, var(--primary-pink-lighter) 100%)',
    }}>
      <div className="container" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '20px' }}>
          AI 상담 챗
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          실시간 AI 상담 기능은 준비 중입니다.
        </p>
      </div>
    </div>
  );
}

export default ChatPage;
