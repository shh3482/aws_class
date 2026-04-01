import React from "react";
import "./Common.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary가 에러를 감지했습니다:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = "/";
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (!hasError) {
      return children;
    }

    if (fallback) {
      return fallback;
    }

    return (
      <div className="matey-error">
        <div className="matey-error__card">
          <div className="matey-error__emoji">🐰</div>
          <span className="matey-error__eyebrow">ERROR</span>
          <h1>앗, 메이티가 잠시 놀랐어요</h1>
          <p>
            예상하지 못한 문제가 발생했어요.
            <br />
            페이지를 새로고침하거나 홈으로 이동해서 다시 시도해보세요.
          </p>

          {error?.message && (
            <div className="matey-error__detail">
              <strong>에러 메시지</strong>
              <span>{error.message}</span>
            </div>
          )}

          <div className="matey-error__actions">
            <button
              type="button"
              className="matey-common-btn matey-common-btn--primary"
              onClick={this.handleRefresh}
            >
              새로고침
            </button>

            <button
              type="button"
              className="matey-common-btn matey-common-btn--secondary"
              onClick={this.handleGoHome}
            >
              홈으로 이동
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
