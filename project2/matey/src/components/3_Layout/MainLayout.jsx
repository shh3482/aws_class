import React from "react";
import Header from "../1_Header/Header";
import Footer from "../2_Footer/Footer";

const MainLayout = ({ children, showHeader = true, showFooter = true }) => {
  return (
    <>
      {showHeader && <Header />}

      <main>{children}</main>

      {showFooter && <Footer />}
    </>
  );
};

export default MainLayout;
