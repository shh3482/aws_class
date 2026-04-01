import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/3_Layout/MainLayout";
import useAuth from "../hooks/useAuth";

const DOWNLOAD_OPTIONS = [
  {
    id: "windows",
    icon: "🪟",
    name: "Windows",
    version: "Matey Desktop for Windows",
    desc: "작업 화면 가까이에서 먼저 말을 걸어주는 메이티의 핵심 경험을 가장 안정적으로 사용할 수 있는 버전입니다.",
    specs: ["Windows 10 이상", "8GB RAM 권장", "인터넷 연결 필요"],
    cta: "Windows용 다운로드",
  },
  {
    id: "mac",
    icon: "🍎",
    name: "macOS",
    version: "Matey Desktop for macOS",
    desc: "부드러운 인터페이스와 감정 리포트 연동 경험을 macOS 환경에서도 동일한 톤으로 이어갈 수 있습니다.",
    specs: ["macOS 12 이상", "Apple Silicon / Intel 지원", "8GB RAM 권장"],
    cta: "macOS용 다운로드",
  },
];

const INSTALL_STEPS = [
  {
    step: "01",
    title: "회원가입 또는 로그인",
    desc: "메이티 웹에서 계정을 만든 뒤 같은 계정으로 앱에 로그인하면 웹 대시보드와 데스크톱 경험이 자연스럽게 연결됩니다.",
  },
  {
    step: "02",
    title: "앱 설치 후 권한 설정",
    desc: "알림, 시작 프로그램, 화면 맥락 반응 기능 등 필요한 항목만 선택해서 설정할 수 있습니다.",
  },
  {
    step: "03",
    title: "데스크톱에서 메이티 시작",
    desc: "메이티가 하루의 흐름을 함께하며 먼저 말을 걸고, 웹에서는 대화내역과 감정 리포트를 확인할 수 있습니다.",
  },
];

const PREVIEW_FEATURES = [
  {
    icon: "💬",
    title: "먼저 다가오는 대화",
    desc: "사용자가 먼저 켜지 않아도 하루의 맥락에 맞게 자연스럽게 말을 건네는 메이티다운 경험",
  },
  {
    icon: "📊",
    title: "웹 대시보드 연동",
    desc: "고민 히스토리, 감정분석, 하루 요약을 웹에서 한눈에 확인하고 정리할 수 있는 구조",
  },
  {
    icon: "🔐",
    title: "세밀한 보안 제어",
    desc: "모니터링 여부, 기록 저장, 알림 강도 등 민감한 항목을 사용자 스스로 직접 제어 가능",
  },
];

const VERSION_INFO = [
  "현재 배포 방식은 시연용/프로토타입 기준으로 구성해도 충분합니다.",
  "실서비스 전환 시에는 설치 파일 링크를 실제 배포 URL로 교체하면 됩니다.",
  "버전 표기, 패치노트, 지원 OS 범위는 추후 AdminPage 또는 별도 배포 관리 페이지로 확장 가능합니다.",
];

const DownloadPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleDownloadClick = (platform) => {
    // 실제 배포 전에는 다운로드 링크로 교체
    alert(`${platform} 설치 파일은 배포 링크 연결 전입니다.\n현재는 UI/라우팅 구조만 먼저 정리된 상태예요.`);
  };

  const movePrimary = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
      return;
    }
    navigate("/signup");
  };

  return (
    <MainLayout>
      <div className="matey-download-page">
        <section className="section">
          <div className="container">
            <div className="hero-section">
              <div className="hero-copy">
                <span className="section-badge">Desktop Download</span>
                <h1 className="hero-title">
                  메이티를 데스크톱에 두고,
                  <br />
                  하루 가까이에서 함께해보세요
                </h1>
                <p className="hero-description">
                  메이티는 단순한 챗봇이 아니라, 사용자의 흐름 가까이 머물며
                  먼저 다가오는 AI 동반자를 지향합니다. 웹에서는 리포트를 보고,
                  데스크톱에서는 실제로 함께 있는 감각을 만드세요.
                </p>

                <div className="hero-actions">
                  <button type="button" className="primary-button" onClick={movePrimary}>
                    {isAuthenticated ? "대시보드로 이동" : "무료 체험 시작하기"}
                  </button>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => {
                      const target = document.getElementById("download-options");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    다운로드 옵션 보기
                  </button>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-card">
                  <div className="hero-card__badge">Matey Desktop</div>
                  <h3>“오늘 많이 지쳐 보였어요.”</h3>
                  <p>
                    메이티는 필요한 순간에만 조심스럽게 다가오고,
                    기록과 분석은 웹에서 정리할 수 있도록 연결됩니다.
                  </p>
                  <div className="hero-card__chips">
                    <span>화면 맥락 반응</span>
                    <span>감정 리포트 연동</span>
                    <span>보안 설정 제어</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="download-options">
          <div className="container">
            <div className="section-head">
              <span className="section-badge">Download Options</span>
              <h2 className="section-title">운영체제에 맞는 버전을 선택하세요</h2>
              <p className="section-description">
                발표/시연 단계에서는 다운로드 버튼 연결만 되어 있어도 충분하고,
                실제 배포 전환 시에는 파일 URL만 교체하면 됩니다.
              </p>
            </div>

            <div className="pricing-grid">
              {DOWNLOAD_OPTIONS.map((option) => (
                <article key={option.id} className="pricing-card">
                  <div className="pricing-card__top">
                    <span className="pricing-card__badge">{option.icon}</span>
                    <h3>{option.name}</h3>
                    <p className="pricing-card__desc">{option.version}</p>
                  </div>

                  <p className="pricing-card__summary">{option.desc}</p>

                  <ul className="pricing-card__features">
                    {option.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="primary-button full-width"
                    onClick={() => handleDownloadClick(option.name)}
                  >
                    {option.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <span className="section-badge">Why Desktop</span>
              <h2 className="section-title">메이티의 핵심은 “가까이 존재하는 경험”입니다</h2>
              <p className="section-description">
                웹은 관리와 분석에 강하고, 데스크톱은 관계감과 지속감에 강합니다.
                메이티는 이 두 감각을 자연스럽게 연결하는 구조로 설계하면 훨씬 설득력이 높아집니다.
              </p>
            </div>

            <div className="feature-grid">
              {PREVIEW_FEATURES.map((feature) => (
                <article key={feature.title} className="feature-card">
                  <div className="feature-card__icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-badge">Install Guide</span>
              <h2 className="section-title">설치는 간단하고, 연결은 자연스럽게</h2>
              <p className="section-description">
                회원 시스템, 데스크톱 앱, 웹 대시보드를 한 흐름으로 보여주면
                메이티 서비스 구조가 훨씬 명확하게 전달됩니다.
              </p>
            </div>

            <div className="how-grid">
              {INSTALL_STEPS.map((item) => (
                <article key={item.step} className="how-card">
                  <div className="how-card__step">{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head">
              <span className="section-badge">Version Note</span>
              <h2 className="section-title">지금 단계에서는 이렇게 운영하면 충분합니다</h2>
            </div>

            <div className="faq-list">
              {VERSION_INFO.map((text, index) => (
                <div key={index} className="faq-item is-open">
                  <div className="faq-question">
                    <span>안내 {index + 1}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="download-banner">
              <div>
                <span className="section-badge">Start with Matey</span>
                <h2>웹에서 시작하고, 데스크톱에서 메이티를 더 가깝게 만나보세요</h2>
                <p>
                  처음이라면 회원가입 후 무료 체험부터 시작하고,
                  이미 가입했다면 대시보드와 함께 데스크톱 경험을 확장해보세요.
                </p>
              </div>

              <div className="download-banner__actions">
                <button type="button" className="primary-button" onClick={movePrimary}>
                  {isAuthenticated ? "대시보드 열기" : "무료 체험 시작"}
                </button>
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => handleDownloadClick("Windows")}
                >
                  설치 파일 받기
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DownloadPage;
