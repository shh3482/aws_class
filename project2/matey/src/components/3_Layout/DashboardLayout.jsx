import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../1_Header/Header';
import Footer from '../2_Footer/Footer';
import DashboardSidebar from './DashboardSidebar';
import './Layout.css';

function DashboardLayout({ children }) {
  return (
    <>
      <Header />

      <section className="matey-dashboard-shell">
        <div className="container matey-dashboard-shell__grid">
          <DashboardSidebar />

          <div className="matey-dashboard-shell__content">
            <div className="matey-dashboard-topbar glass-card">
              <div className="matey-dashboard-topbar__left">
                <span className="section-badge">My Companion Space</span>
                <h1>오늘의 감정과 펫 상담사를 한눈에</h1>
                <p>보고서, 기록, 성격 설정까지 모두 귀엽고 부드러운 톤으로 재구성합니다.</p>
              </div>

              <div className="matey-dashboard-topbar__pet">
                <img src="/images/cat.png" alt="Matey cat" />
              </div>
            </div>

            <div className="matey-dashboard-page">
              {children || <Outlet />}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default DashboardLayout;
