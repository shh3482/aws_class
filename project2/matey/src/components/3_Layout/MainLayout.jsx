import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../1_Header/Header';
import Footer from '../2_Footer/Footer';

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
