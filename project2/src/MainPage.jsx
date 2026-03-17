import React, { useState, useEffect } from "react";
import "./MainPage.css";

// ───────────────────────────────────────────────
// 간단한 SVG 캐릭터 컴포넌트
// ───────────────────────────────────────────────
const BunnyChar = ({ size = 120, color = "#fff", blush = "#FFB5A7" }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 귀 */}
    <ellipse cx="38" cy="28" rx="10" ry="22" fill={color} />
    <ellipse cx="82" cy="28" rx="10" ry="22" fill={color} />
    <ellipse cx="38" cy="30" rx="5" ry="15" fill="#FFCDD2" />
    <ellipse cx="82" cy="30" rx="5" ry="15" fill="#FFCDD2" />
    {/* 몸통 */}
    <ellipse cx="60" cy="85" rx="30" ry="28" fill={color} />
    {/* 얼굴 */}
    <circle cx="60" cy="60" r="28" fill={color} />
    {/* 볼터치 */}
    <ellipse cx="45" cy="65" rx="7" ry="5" fill={blush} opacity="0.5" />
    <ellipse cx="75" cy="65" rx="7" ry="5" fill={blush} opacity="0.5" />
    {/* 눈 */}
    <circle cx="51" cy="57" r="4" fill="#4A4A6A" />
    <circle cx="69" cy="57" r="4" fill="#4A4A6A" />
    <circle cx="52.5" cy="55.5" r="1.5" fill="white" />
    <circle cx="70.5" cy="55.5" r="1.5" fill="white" />
    {/* 코 */}
    <ellipse cx="60" cy="64" rx="3" ry="2" fill="#FFB5A7" />
    {/* 입 */}
    <path d="M55 68 Q60 73 65 68" stroke="#4A4A6A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* 스카프 */}
    <ellipse cx="60" cy="88" rx="18" ry="7" fill="#7EC8C8" opacity="0.85" />
    <rect x="54" y="85" width="12" height="8" rx="3" fill="#7EC8C8" opacity="0.85" />
  </svg>
);

const CatChar = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 귀 */}
    <polygon points="30,42 22,18 46,32" fill="#9B9BB0" />
    <polygon points="90,42 98,18 74,32" fill="#9B9BB0" />
    <polygon points="33,40 27,22 44,33" fill="#FFCDD2" />
    <polygon points="87,40 93,22 76,33" fill="#FFCDD2" />
    {/* 몸통 */}
    <ellipse cx="60" cy="85" rx="30" ry="27" fill="#BDBDCE" />
    {/* 얼굴 */}
    <circle cx="60" cy="60" r="27" fill="#BDBDCE" />
    {/* 볼터치 */}
    <ellipse cx="45" cy="65" rx="7" ry="5" fill="#FFB5A7" opacity="0.5" />
    <ellipse cx="75" cy="65" rx="7" ry="5" fill="#FFB5A7" opacity="0.5" />
    {/* 눈 */}
    <ellipse cx="51" cy="57" rx="4" ry="4.5" fill="#4A4A6A" />
    <ellipse cx="69" cy="57" rx="4" ry="4.5" fill="#4A4A6A" />
    <circle cx="52.5" cy="55.5" r="1.5" fill="white" />
    <circle cx="70.5" cy="55.5" r="1.5" fill="white" />
    {/* 코 */}
    <polygon points="60,63 57,67 63,67" fill="#FFB5A7" />
    {/* 입 */}
    <path d="M57 67 Q60 71 63 67" stroke="#4A4A6A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* 수염 */}
    <line x1="35" y1="64" x2="51" y2="66" stroke="#9B9BB0" strokeWidth="1" />
    <line x1="35" y1="68" x2="51" y2="68" stroke="#9B9BB0" strokeWidth="1" />
    <line x1="69" y1="66" x2="85" y2="64" stroke="#9B9BB0" strokeWidth="1" />
    <line x1="69" y1="68" x2="85" y2="68" stroke="#9B9BB0" strokeWidth="1" />
    {/* 리본 */}
    <path d="M48 86 Q60 82 72 86 Q60 90 48 86Z" fill="#FFB5A7" opacity="0.9" />
    <circle cx="60" cy="86" r="3" fill="#FF8FAB" />
  </svg>
);

// ───────────────────────────────────────────────
// 플로팅 버블 배경
// ───────────────────────────────────────────────
const FloatingBubbles = () => (
  <div className="bubbles-wrapper" aria-hidden="true">
    {[...Array(8)].map((_, i) => (
      <div key={i} className={`bubble bubble-${i + 1}`} />
    ))}
  </div>
);

// ───────────────────────────────────────────────
// 네비게이션
// ───────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a className="navbar__logo" href="#">
          <span className="navbar__logo-icon">🫧</span>
          <span className="navbar__logo-text">마음친구</span>
        </a>
        <ul className="navbar__menu">
          <li><a href="#features">서비스 소개</a></li>
          <li><a href="#how">이용 방법</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#blog">블로그</a></li>
        </ul>
        <div className="navbar__actions">
          <button className="btn btn--ghost">로그인</button>
          <button className="btn btn--primary">무료 시작하기</button>
        </div>
      </div>
    </nav>
  );
};

// ───────────────────────────────────────────────
// 히어로 섹션
// ───────────────────────────────────────────────
const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const phrases = ["계속 안 풀리는 거 있어? 같이 볼까? 🐱", "오늘 많이 지쳐 보여. 잠깐 얘기할래? 🐰", "취업 준비 스트레스 많지? 쉬면서 얘기해~ 🌿"];
  const [pIdx, setPIdx] = useState(0);

  useEffect(() => {
    let i = 0;
    const current = phrases[pIdx];
    const timer = setInterval(() => {
      setTyped(current.slice(0, i + 1));
      i++;
      if (i >= current.length) {
        clearInterval(timer);
        setTimeout(() => {
          setTyped("");
          setPIdx((p) => (p + 1) % phrases.length);
        }, 2200);
      }
    }, 55);
    return () => clearInterval(timer);
  }, [pIdx]);

  return (
    <section className="hero">
      <FloatingBubbles />
      <div className="hero__content">
        <div className="hero__badge">✨ 능동형 AI 상담 서비스</div>
        <h1 className="hero__headline">
          먼저 다가오는
          <br />
          <span className="hero__headline--accent">AI 친구</span>
        </h1>
        <p className="hero__sub">
          당신이 힘들다고 말하기 전에,<br />
          먼저 눈치채고 곁에 있어 드릴게요.
        </p>
        <div className="hero__chat-preview">
          <div className="chat-bubble chat-bubble--ai">
            <span className="chat-bubble__avatar">🐰</span>
            <span className="chat-bubble__text">
              {typed}
              <span className="typing-cursor">|</span>
            </span>
          </div>
        </div>
        <div className="hero__actions">
          <button className="btn btn--primary btn--lg">
            <span>🖥️</span> 데스크톱 앱 다운로드
          </button>
          <button className="btn btn--secondary btn--lg">
            <span>🌐</span> 웹으로 시작하기
          </button>
        </div>
        <p className="hero__note">Windows & macOS 지원 · 무료로 시작</p>
      </div>
      <div className="hero__visual">
        <div className="hero__card hero__card--float">
          <div className="character-duo">
            <div className="character-wrap character-wrap--bunny">
              <BunnyChar size={130} color="#FFFDF5" blush="#FFB5A7" />
              <span className="character-label">하루</span>
            </div>
            <div className="character-wrap character-wrap--cat">
              <CatChar size={130} />
              <span className="character-label">나비</span>
            </div>
          </div>
          <div className="hero__card-tag">상담사 캐릭터 선택 가능</div>
        </div>
        <div className="hero__deco hero__deco--star1">⭐</div>
        <div className="hero__deco hero__deco--star2">✦</div>
        <div className="hero__deco hero__deco--heart">💗</div>
      </div>
    </section>
  );
};

// ───────────────────────────────────────────────
// 특징 섹션
// ───────────────────────────────────────────────
const features = [
  {
    icon: "💬",
    color: "#A8D8EA",
    title: "24/7 실시간 대화",
    desc: "언제든 필요할 때 곁을 지킵니다. 밤 늦게도, 이른 아침에도 항상 옆에 있어요.",
  },
  {
    icon: "🔍",
    color: "#FFD6A5",
    title: "화면 맥락 감지",
    desc: "지금 보고 있는 화면을 이해하고 딱 맞는 위로와 도움을 건넵니다.",
  },
  {
    icon: "🔒",
    color: "#C9B8FF",
    title: "완벽한 비밀 보장",
    desc: "모든 대화는 암호화됩니다. 모니터링 ON/OFF도 내가 직접 결정해요.",
  },
];

const FeaturesSection = () => (
  <section className="features" id="features">
    <div className="section__label">마음친구만의 특별함</div>
    <h2 className="section__title">왜 마음친구인가요?</h2>
    <div className="features__grid">
      {features.map((f, i) => (
        <div className="feature-card" key={i} style={{ "--card-accent": f.color }}>
          <div className="feature-card__icon" style={{ background: f.color + "33" }}>
            {f.icon}
          </div>
          <h3 className="feature-card__title">{f.title}</h3>
          <p className="feature-card__desc">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// ───────────────────────────────────────────────
// 차별점 섹션
// ───────────────────────────────────────────────
const DiffSection = () => (
  <section className="diff" id="how">
    <div className="section__label">현존 서비스와의 차별점</div>
    <h2 className="section__title">
      기다리지 않아요,
      <br />
      <span className="text-accent">먼저</span> 다가갑니다
    </h2>
    <div className="diff__grid">
      <div className="diff__col diff__col--before">
        <div className="diff__badge diff__badge--before">기존 서비스</div>
        <div className="diff__steps">
          {["😞 힘들지만 꾹 참음", "📱 직접 앱을 찾아 실행", "✍️ 텍스트로 상황 설명", "💬 그제야 대화 시작"].map((s, i) => (
            <div className="diff__step diff__step--muted" key={i}>
              <span className="diff__step-num">{i + 1}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="diff__divider">
        <div className="diff__vs">VS</div>
      </div>
      <div className="diff__col diff__col--after">
        <div className="diff__badge diff__badge--after">마음친구</div>
        <div className="diff__steps">
          {[
            "🖥️ 바탕화면에 상주 중",
            "👀 화면 맥락 자동 감지",
            "🐰 먼저 말을 걸어옴",
            "💗 자연스럽게 대화 시작",
          ].map((s, i) => (
            <div className="diff__step diff__step--active" key={i}>
              <span className="diff__step-num">{i + 1}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ───────────────────────────────────────────────
// 시나리오 섹션
// ───────────────────────────────────────────────
const scenarios = [
  {
    icon: "💻",
    situation: "에러 창이 계속 떠있을 때",
    chat: "계속 안 풀리는 거 있어? 같이 볼까? 🐱",
    tag: "개발자 모드",
    color: "#A8D8EA",
  },
  {
    icon: "📄",
    situation: "채용 사이트를 오래 보고 있을 때",
    chat: "취업 준비 스트레스 많지? 잠깐 쉴 겸 얘기할래? 🐰",
    tag: "취업 준비생",
    color: "#FFD6A5",
  },
  {
    icon: "🌙",
    situation: "새벽 2시에도 작업 중일 때",
    chat: "많이 지쳤겠다… 오늘 하루 수고했어. 잠깐 쉬어가자 💗",
    tag: "야간 작업",
    color: "#C9B8FF",
  },
];

const ScenarioSection = () => (
  <section className="scenarios">
    <div className="section__label">사용 시나리오</div>
    <h2 className="section__title">이런 순간,<br />마음친구가 먼저 말을 걸어요</h2>
    <div className="scenarios__grid">
      {scenarios.map((s, i) => (
        <div className="scenario-card" key={i} style={{ "--sc-color": s.color }}>
          <div className="scenario-card__tag" style={{ background: s.color + "44", color: "#4A4A6A" }}>
            {s.tag}
          </div>
          <div className="scenario-card__icon">{s.icon}</div>
          <p className="scenario-card__situation">{s.situation}</p>
          <div className="scenario-card__bubble">
            <span className="scenario-card__avatar">🐾</span>
            <span className="scenario-card__chat">{s.chat}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ───────────────────────────────────────────────
// 스택 섹션
// ───────────────────────────────────────────────
const TechSection = () => (
  <section className="tech">
    <div className="tech__inner">
      <div className="section__label">기술 스택</div>
      <h2 className="section__title" style={{ color: "#fff" }}>탄탄한 기술 위에<br />감성을 얹었어요</h2>
      <div className="tech__chips">
        {["Electron.js", "React", "GPT-4o Vision", "WebSocket", "Node.js", "JWT Auth"].map((t) => (
          <span className="tech__chip" key={t}>{t}</span>
        ))}
      </div>
    </div>
  </section>
);

// ───────────────────────────────────────────────
// CTA 섹션
// ───────────────────────────────────────────────
const CTASection = () => (
  <section className="cta">
    <div className="cta__deco" aria-hidden="true">
      <BunnyChar size={180} color="#FFFDF5" blush="#FFB5A7" />
    </div>
    <div className="cta__content">
      <div className="section__label">지금 바로 시작하세요</div>
      <h2 className="cta__title">
        오늘부터<br />
        <span className="text-accent">마음친구</span>가 곁에 있을게요
      </h2>
      <p className="cta__desc">설치 5분, 설정 1분. 그 이후엔 AI가 먼저 다가갑니다.</p>
      <div className="cta__actions">
        <button className="btn btn--primary btn--lg">🖥️ 무료로 다운로드</button>
        <button className="btn btn--outline btn--lg">🌐 웹으로 체험하기</button>
      </div>
    </div>
  </section>
);

// ───────────────────────────────────────────────
// 푸터
// ───────────────────────────────────────────────
const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <span className="navbar__logo-icon">🫧</span>
        <span className="navbar__logo-text">마음친구</span>
        <p className="footer__tagline">먼저 다가오는 AI 친구</p>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <strong>서비스</strong>
          <a href="#">서비스 소개</a>
          <a href="#">이용 방법</a>
          <a href="#">다운로드</a>
        </div>
        <div className="footer__col">
          <strong>지원</strong>
          <a href="#">FAQ</a>
          <a href="#">블로그</a>
          <a href="#">문의하기</a>
        </div>
        <div className="footer__col">
          <strong>법적 고지</strong>
          <a href="#">개인정보처리방침</a>
          <a href="#">서비스 이용약관</a>
        </div>
      </div>
    </div>
    <div className="footer__copy">© 2025 마음친구. All rights reserved.</div>
  </footer>
);

// ───────────────────────────────────────────────
// 메인 컴포넌트
// ───────────────────────────────────────────────
export default function MainPage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DiffSection />
        <ScenarioSection />
        <TechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
