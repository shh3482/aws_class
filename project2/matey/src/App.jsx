import React from "react";
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

import HomePage from "./pages/HomePage";
import DownloadPage from "./pages/DownloadPage";

import LoginPage from "./components/5_Auth/LoginPage";
import SignupPage from "./components/5_Auth/SignupPage";

import MainLayout from "./components/3_Layout/MainLayout";
import DashboardLayout from "./components/3_Layout/DashboardLayout";

import Dashboard from "./components/6_Dashboard/Dashboard";
import ChatHistory from "./components/6_Dashboard/ChatHistory";
import SecuritySettings from "./components/6_Dashboard/SecuritySettings";
import Reports from "./components/6_Dashboard/Reports";
import PersonalInfo from "./components/6_Dashboard/PersonalInfo";
import PersonalSettings from "./components/6_Dashboard/PersonalSettings";

import MyPage from "./components/7_MyPage/MyPage";
import AdminPage from "./components/8_AdminPage/AdminPage";

const PrivateRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const AdminRoute = () => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  if (loading) return null;

  return isAuthenticated && isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};

const NotFoundContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="matey-notfound">
      <div className="container">
        <div className="matey-notfound__card">
          <div className="matey-notfound__emoji">🌙</div>
          <span className="section-badge">404 Not Found</span>
          <h1>앗, 이 페이지는 아직 메이티가 찾지 못했어요</h1>
          <p>
            요청한 주소 <strong>{location.pathname}</strong> 를 찾을 수 없어요.
            홈으로 돌아가거나 다운로드/로그인 페이지로 이동해보세요.
          </p>

          <div className="matey-notfound__actions">
            <button type="button" className="primary-button" onClick={() => navigate("/")}>
              홈으로 이동
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate("/download")}
            >
              다운로드 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFoundPage = () => {
  return (
    <MainLayout>
      <NotFoundContent />
    </MainLayout>
  );
};

function App() {
  return (
    <Routes>
      {/* 공개 페이지 */}
      <Route path="/" element={<HomePage />} />
      <Route path="/download" element={<DownloadPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* 로그인 사용자 전용 */}
      <Route element={<PrivateRoute />}>
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="chat-history" element={<ChatHistory />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="settings" element={<PersonalSettings />} />
        </Route>
      </Route>

      {/* 관리자 전용 */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
