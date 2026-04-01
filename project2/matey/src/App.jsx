import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';

import MainLayout from './components/3_Layout/MainLayout';
import DashboardLayout from './components/3_Layout/DashboardLayout';

import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import DownloadPage from './pages/DownloadPage';
import NotFoundPage from './pages/NotFoundPage';

import LoginPage from './components/5_Auth/LoginPage';
import SignupPage from './components/5_Auth/SignupPage';

import './App.css';

function RoutePlaceholder({
  title,
  description,
  badge = 'Coming Soon',
  image = '/images/rabbit-duo.png',
}) {
  return (
    <div style={placeholderStyles.page}>
      <div style={placeholderStyles.glowOne} />
      <div style={placeholderStyles.glowTwo} />

      <div style={placeholderStyles.card}>
        <div style={placeholderStyles.content}>
          <span style={placeholderStyles.badge}>{badge}</span>

          <h1 style={placeholderStyles.title}>{title}</h1>

          <p style={placeholderStyles.description}>{description}</p>

          <div style={placeholderStyles.infoBox}>
            <strong style={placeholderStyles.infoTitle}>
              현재 상태 안내
            </strong>
            <p style={placeholderStyles.infoText}>
              이 라우트는 App.jsx에 먼저 연결해두었고, 실제 화면 컴포넌트만
              이어서 붙이면 바로 완성되는 상태예요.
            </p>
          </div>

          <div style={placeholderStyles.actions}>
            <Link to="/" style={placeholderStyles.primaryButton}>
              홈으로 이동
            </Link>

            <Link to="/chat" style={placeholderStyles.secondaryButton}>
              대화 페이지 보기
            </Link>
          </div>
        </div>

        <div style={placeholderStyles.visual}>
          <div style={placeholderStyles.ringOne} />
          <div style={placeholderStyles.ringTwo} />

          <div style={placeholderStyles.codePill}>READY</div>

          <div style={placeholderStyles.speechTop}>
            이 화면은
            <br />
            다음 단계에서 연결될 예정이에요
          </div>

          <img
            src={image}
            alt={title}
            style={placeholderStyles.image}
          />

          <div style={placeholderStyles.speechBottom}>
            라우팅은 이미 연결되어 있으니
            <br />
            실제 내용만 채우면 돼요
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 공개 메인 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Route>

        {/* 인증 페이지 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* 대시보드 레이아웃 - 실제 페이지는 추후 교체 */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route
            index
            element={
              <RoutePlaceholder
                badge="Dashboard"
                title="대시보드 메인"
                description="감정 요약, 최근 대화, 오늘의 인사이트, 리포트 진입 카드가 들어갈 메인 대시보드 화면입니다."
                image="/images/rabbit-duo.png"
              />
            }
          />
          <Route
            path="history"
            element={
              <RoutePlaceholder
                badge="Chat History"
                title="대화 기록"
                description="이전 감정 대화 흐름과 날짜별 요약, 다시 보기 기능이 들어갈 기록 페이지입니다."
                image="/images/rabbit.png"
              />
            }
          />
          <Route
            path="reports"
            element={
              <RoutePlaceholder
                badge="Reports"
                title="감정 리포트"
                description="주간/월간 감정 변화, 패턴 분석, 회복 루틴 추천을 보여주는 리포트 페이지입니다."
                image="/images/cat.png"
              />
            }
          />
          <Route
            path="security"
            element={
              <RoutePlaceholder
                badge="Security"
                title="보안 설정"
                description="개인 정보 보호, 접근 제어, 대화 데이터 관리 관련 설정이 들어갈 화면입니다."
                image="/images/cat.png"
              />
            }
          />
          <Route
            path="personal-info"
            element={
              <RoutePlaceholder
                badge="Profile"
                title="개인 정보"
                description="이름, 닉네임, 프로필 이미지, 계정 기본 정보를 관리하는 페이지입니다."
                image="/images/rabbit.png"
              />
            }
          />
          <Route
            path="settings"
            element={
              <RoutePlaceholder
                badge="Settings"
                title="개인 설정"
                description="알림 빈도, 대화 템포, 캐릭터 반응 방식, 개인화 옵션을 조절하는 페이지입니다."
                image="/images/rabbit-duo.png"
              />
            }
          />
          <Route
            path="admin"
            element={
              <RoutePlaceholder
                badge="Admin"
                title="관리자 기능"
                description="사용자 현황, 신고/문의 처리, 서비스 운영 지표를 확인하는 관리자 영역입니다."
                image="/images/rabbit-duo.png"
              />
            }
          />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        {/* 별도 라우트 */}
        <Route
          path="/mypage"
          element={
            <RoutePlaceholder
              badge="My Page"
              title="마이페이지"
              description="프로필 요약, 감정 요약 카드, 저장한 루틴과 최근 활동이 들어갈 마이페이지 영역입니다."
              image="/images/rabbit-duo.png"
            />
          }
        />

        <Route
          path="/admin"
          element={
            <RoutePlaceholder
              badge="Admin"
              title="관리자 페이지"
              description="운영자 전용 대시보드나 관리 기능이 필요할 때 사용할 독립 관리자 라우트입니다."
              image="/images/cat.png"
            />
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

const placeholderStyles = {
  page: {
    position: 'relative',
    minHeight: '100%',
    padding: '24px',
    overflow: 'hidden',
    background:
      'linear-gradient(180deg, #eef7ff 0%, #e3f2ff 52%, #fff8f1 100%)',
    borderRadius: '28px',
  },
  glowOne: {
    position: 'absolute',
    top: '10%',
    left: '-60px',
    width: '200px',
    height: '200px',
    borderRadius: '999px',
    background: 'rgba(94, 162, 255, 0.14)',
    filter: 'blur(16px)',
    pointerEvents: 'none',
  },
  glowTwo: {
    position: 'absolute',
    right: '-40px',
    bottom: '5%',
    width: '180px',
    height: '180px',
    borderRadius: '999px',
    background: 'rgba(255, 179, 138, 0.18)',
    filter: 'blur(16px)',
    pointerEvents: 'none',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 420px)',
    gap: '24px',
    alignItems: 'center',
    minHeight: 'calc(100vh - 180px)',
    padding: '28px',
    borderRadius: '30px',
    background: 'rgba(255,255,255,0.74)',
    border: '1px solid rgba(255,255,255,0.68)',
    boxShadow: '0 24px 50px rgba(91, 120, 164, 0.14)',
    backdropFilter: 'blur(18px)',
  },
  content: {
    maxWidth: '680px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '36px',
    padding: '0 14px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.88)',
    border: '1px solid rgba(94, 162, 255, 0.16)',
    color: '#4d86d8',
    fontSize: '0.82rem',
    fontWeight: 800,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  title: {
    margin: '18px 0 12px',
    fontSize: 'clamp(2rem, 4vw, 3.4rem)',
    lineHeight: 1.08,
    color: '#1f2a44',
    letterSpacing: '-0.03em',
  },
  description: {
    margin: 0,
    color: '#5f6a86',
    fontSize: '1rem',
    lineHeight: 1.8,
  },
  infoBox: {
    marginTop: '24px',
    padding: '18px 20px',
    borderRadius: '22px',
    background: 'linear-gradient(180deg, #eef6ff 0%, #f8fbff 100%)',
    border: '1px solid rgba(94, 162, 255, 0.1)',
  },
  infoTitle: {
    display: 'block',
    marginBottom: '8px',
    color: '#2d4573',
    fontSize: '0.95rem',
  },
  infoText: {
    margin: 0,
    color: '#61708f',
    fontSize: '0.94rem',
    lineHeight: 1.7,
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    marginTop: '24px',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px',
    padding: '0 20px',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, #5ea2ff 0%, #7cb4ff 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 800,
    boxShadow: '0 18px 30px rgba(94, 162, 255, 0.22)',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px',
    padding: '0 20px',
    borderRadius: '999px',
    background: 'rgba(255, 244, 234, 0.96)',
    color: '#7c4a26',
    textDecoration: 'none',
    fontWeight: 800,
    border: '1px solid rgba(255, 179, 138, 0.18)',
    boxShadow: '0 14px 24px rgba(255, 179, 138, 0.12)',
  },
  visual: {
    position: 'relative',
    minHeight: '420px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '28px',
    overflow: 'hidden',
    background:
      'radial-gradient(circle at top, rgba(255,255,255,0.96), rgba(234,244,255,0.82) 48%, rgba(255,243,234,0.78) 100%)',
    border: '1px solid rgba(94, 162, 255, 0.1)',
  },
  ringOne: {
    position: 'absolute',
    width: '220px',
    height: '220px',
    borderRadius: '999px',
    border: '1px dashed rgba(94, 162, 255, 0.18)',
  },
  ringTwo: {
    position: 'absolute',
    width: '320px',
    height: '320px',
    borderRadius: '999px',
    border: '1px dashed rgba(255, 179, 138, 0.24)',
  },
  codePill: {
    position: 'absolute',
    top: '22px',
    left: '22px',
    zIndex: 2,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '46px',
    padding: '0 16px',
    borderRadius: '999px',
    background: 'rgba(255,255,255,0.92)',
    color: '#4d86d8',
    fontSize: '0.95rem',
    fontWeight: 900,
    letterSpacing: '0.1em',
    boxShadow: '0 14px 24px rgba(91, 120, 164, 0.1)',
  },
  speechTop: {
    position: 'absolute',
    top: '76px',
    right: '20px',
    zIndex: 2,
    maxWidth: '220px',
    padding: '14px 16px',
    borderRadius: '22px',
    background: '#ffffff',
    color: '#2f3d5b',
    fontSize: '0.92rem',
    lineHeight: 1.6,
    boxShadow: '0 18px 32px rgba(83, 109, 146, 0.12)',
  },
  speechBottom: {
    position: 'absolute',
    left: '20px',
    bottom: '28px',
    zIndex: 2,
    maxWidth: '220px',
    padding: '14px 16px',
    borderRadius: '22px',
    background: '#ffffff',
    color: '#2f3d5b',
    fontSize: '0.92rem',
    lineHeight: 1.6,
    boxShadow: '0 18px 32px rgba(83, 109, 146, 0.12)',
  },
  image: {
    position: 'relative',
    zIndex: 1,
    width: 'min(88%, 360px)',
    maxHeight: '300px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 24px 34px rgba(94, 162, 255, 0.18))',
  },
};

export default App;
