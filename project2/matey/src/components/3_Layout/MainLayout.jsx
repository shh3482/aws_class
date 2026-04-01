import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../1_Header/Header';
import Footer from '../2_Footer/Footer';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
