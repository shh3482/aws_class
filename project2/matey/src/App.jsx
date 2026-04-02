import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/9_Common/ProtectedRoute';

// 레이아웃
import Header from './components/1_Header/Header';
import Footer from './components/2_Footer/Footer';

// 페이지들
import HomePage from './pages/HomePage';
import LoginPage from './components/5_Auth/LoginPage';
import SignupPage from './components/5_Auth/SignupPage';
import ChatPage from './pages/ChatPage';
import DownloadPage from './pages/DownloadPage';
import NotFoundPage from './pages/NotFoundPage';

// 대시보드 페이지들
import Dashboard from './components/6_Dashboard/Dashboard';
// import MyPage from './components/7_MyPage/MyPage';
// import AdminPage from './components/8_AdminPage/AdminPage';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {/* 공개 라우트 */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/chat" element={<ChatPage />} />

            {/* 보호된 라우트 */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/mypage"
              element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requiredRole="ADMIN">
                  <AdminPage />
                </ProtectedRoute>
              }
            /> */}

            {/* 404 */}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
