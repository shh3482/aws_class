import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      background: 'linear-gradient(135deg, var(--primary-blue-lighter) 0%, var(--primary-pink-lighter) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '5rem', marginBottom: '20px' }}>😕</div>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '10px', 
          color: 'var(--text-primary)',
          fontWeight: '700'
        }}>
          404
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: 'var(--text-secondary)', 
          marginBottom: '30px' 
        }}>
          페이지를 찾을 수 없습니다
        </p>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 30px',
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}

export default NotFoundPage;
