import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../1_Header/Header";
import DashboardSidebar from "./DashboardSidebar";
import "./Layout.css";

const DashboardLayout = () => {
  return (
    <>
      <Header />

      <div className="dashboard-shell">
        <div className="dashboard-shell__inner">
          <DashboardSidebar />

          <main className="dashboard-main">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
