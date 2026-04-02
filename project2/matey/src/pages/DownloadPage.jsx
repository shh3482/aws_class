import React from 'react';

function DownloadPage() {
  return (
    <div style={{
      minHeight: '100vh',
      paddingTop: '80px',
      background: 'linear-gradient(135deg, var(--primary-blue-lighter) 0%, var(--primary-pink-lighter) 100%)',
    }}>
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '20px', 
          color: 'var(--text-primary)',
          fontWeight: '700'
        }}>
          메이티 앱 다운로드
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)', 
          marginBottom: '40px' 
        }}>
          Windows 및 macOS에서 데스크톱 앱을 다운로드하세요
        </p>

        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#"
            style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-light) 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            🪟 Windows 다운로드
          </a>
          <a
            href="#"
            style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, var(--primary-pink) 0%, var(--primary-pink-light) 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            🍎 macOS 다운로드
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
