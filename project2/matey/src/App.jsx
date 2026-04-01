import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/1_Header/Header";
import Footer from "./components/2_Footer/Footer";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./components/5_Auth/LoginPage";
import SignupPage from "./components/5_Auth/SignupPage";
import MyPage from "./components/7_MyPage/MyPage";
import AdminPage from "./components/8_AdminPage/AdminPage";
import Dashboard from "./components/6_Dashboard/Dashboard";
import DownloadPage from "./pages/DownloadPage";
import "./App.css";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const token = localStorage.getItem("accessToken");
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.role !== requiredRole && payload.role !== "SUPERADMIN") {
        return <Navigate to="/" replace />;
      }
    } catch (e) {
      return <Navigate to="/login" replace />;
    }
  }

  return children;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="app-wrapper">
            <Header />
            <main className="main-content">
              <Routes>
                {/* 공개 페이지 */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/download" element={<DownloadPage />} />

                {/* 보호된 페이지 */}
                <Route
                  path="/chat"
                  element={
                    <ProtectedRoute>
                      <ChatPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/mypage"
                  element={
                    <ProtectedRoute>
                      <MyPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                {/* 관리자 페이지 */}
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute requiredRole="ADMIN">
                      <AdminPage />
                    </ProtectedRoute>
                  }
                />

                {/* 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
