import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './components/3_Layout/MainLayout';
import DashboardLayout from './components/3_Layout/DashboardLayout';

// Pages
import HomePage from './components/4_Home/HomePage';
import LoginPage from './components/5_Auth/LoginPage';
import SignupPage from './components/5_Auth/SignupPage';
import Dashboard from './components/6_Dashboard/Dashboard';
import MyPage from './components/7_MyPage/MyPage';
import AdminPage from './components/8_AdminPage/AdminPage';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* 미로그인 상태 라우트 */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* 로그인 후 라우트 */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard activeTab="overview" />} />
            <Route path="/dashboard/chat-history" element={<Dashboard activeTab="chat-history" />} />
            <Route path="/dashboard/security" element={<Dashboard activeTab="security" />} />
            <Route path="/dashboard/reports" element={<Dashboard activeTab="reports" />} />
            <Route path="/dashboard/personal-info" element={<Dashboard activeTab="personal-info" />} />
            <Route path="/dashboard/settings" element={<Dashboard activeTab="settings" />} />
            
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<div style={{textAlign:'center', padding:'100px 20px'}}>페이지를 찾을 수 없습니다 😅</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
