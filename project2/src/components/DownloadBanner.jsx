import React from "react";
import { useNavigate } from "react-router-dom";
import "./DownloadBanner.css";

const DownloadBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="download-banner">
      <div className="container download-banner__inner">
        <div>
          <span>DOWNLOAD</span>
          <h2>메이티를 바탕화면에서 만나보세요</h2>
          <p>
            웹에서 기록을 관리하고, 데스크톱 앱에서는 먼저 말을 걸어오는
            메이티와 함께할 수 있어요.
          </p>
        </div>
        <button onClick={() => navigate("/download")}>
          다운로드 페이지로 이동
        </button>
      </div>
    </section>
  );
};

export default DownloadBanner;
