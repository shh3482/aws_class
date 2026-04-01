import React from "react";
import "./Common.css";

const LoadingSpinner = ({
  fullScreen = false,
  text = "메이티가 준비 중이에요...",
  size = "md",
}) => {
  const sizeClass =
    size === "sm" ? "spinner--sm" : size === "lg" ? "spinner--lg" : "spinner--md";

  return (
    <div className={fullScreen ? "matey-loading matey-loading--fullscreen" : "matey-loading"}>
      <div className="matey-loading__content">
        <div className={`matey-spinner ${sizeClass}`} aria-label="로딩 중" />
        {text && <p className="matey-loading__text">{text}</p>}
      </div>
    </div>
  );
};

export default LoadingSpinner;
