import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../components/3_Layout/MainLayout";

const FEATURES = [
  {
    icon: "💬",
    tone: "purple",
    title: "먼저 다가오는 대화",
    desc: "사용자가 먼저 도움을 요청하지 않아도, 메이티가 맥락을 살피고 먼저 말을 걸어주는 능동형 상담 경험을 제공합니다.",
  },
  {
    icon: "🖥️",
    tone: "pink",
    title: "화면 맥락 기반 공감",
    desc: "에러 화면, 채용 사이트, 오래 멈춘 작업창 등 현재 상황의 흐름을 읽고 그에 맞는 말투와 반응으로 다가갑니다.",
  },
  {
    icon: "📊",
    tone: "mint",
    title: "감정 패턴 리포트",
    desc: "대화와 반응 기록을 바탕으로 고민 히스토리, 감정 분석, 하루 요약을 한눈에 확인할 수 있습니다.",
  },
  {
    icon: "🎭",
    tone: "purple",
    title: "메이트 성격 커스터마이징",
    desc: "다정함, 현실감, 장난기, 차분함 같은 말투와 캐릭터 분위기를 설정해 나만의 메이트로 맞출 수 있어요.",
  },
  {
    icon: "🔐",
    tone: "pink",
    title: "명확한 프라이버시 제어",
    desc: "모니터링 ON/OFF, 기록 저장 여부, 알림 강도 등 민감한 설정은 언제든 사용자가 직접 관리할 수 있어요.",
  },
  {
    icon: "🔄",
    tone: "mint",
    title: "웹 · 데스크톱 유기적 연동",
    desc: "데스크톱에서 함께 머무르고, 웹에서는 대시보드와 분석 리포트를 관리하는 구조로 발표 시연 임팩트도 높입니다.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    icon: "⬇️",
    title: "설치하고 로그인하기",
    desc: "웹에서 회원가입 후 데스크톱 앱을 설치하면 같은 계정으로 연동되어 메이티를 바로 시작할 수 있어요.",
  },
  {
    step: "2",
    icon: "👀",
    title: "바탕화면에서 함께 머물기",
    desc: "메이티는 사용자의 하루 가까이에 머물며, 사용자가 오래 머문 화면의 맥락이나 분위기를 조심스럽게 이해합니다.",
  },
  {
    step: "3",
    icon: "🌙",
    title: "하루를 대화와 리포트로 정리하기",
    desc: "하루 동안 쌓인 고민과 감정 흐름을 웹 대시보드에서 확인하며 더 나은 루틴과 패턴을 찾을 수 있어요.",
  },
];

const PLANS = [
  {
    name: "Free",
    price: "₩0",
    desc: "메이티를 가볍게 경험해보는 기본 플랜",
    features: [
      "기본 대화 기능",
      "웹 회원 시스템",
      "간단한 하루 요약",
      "기본 캐릭터 사용",
    ],
  },
  {
    name: "Plus",
    price: "₩4,900",
    desc: "감정 분석과 기록 기능을 강화한 추천 플랜",
    features: [
      "고민 히스토리 저장",
      "감정 분석 리포트",
      "캐릭터/말투 커스터마이징",
      "데스크톱 연동 기능 확장",
    ],
    highlight: true,
    badge: "추천",
  },
  {
    name: "Premium",
    price: "₩9,900",
    desc: "더 정교한 패턴 분석과 확장 기능을 위한 플랜",
    features: [
      "고급 패턴 분석",
      "심화 리포트 제공",
      "개인화 설정 확장",
      "우선 지원 및 향후 기능 베타 참여",
    ],
  },
];

const FAQS = [
  {
    q: "메이티는 화면을 항상 감시하나요?",
    a: "아니요. 메이티는 사용자가 허용한 범위와 설정에 따라 동작하며, 모니터링 ON/OFF를 명확하게 제어할 수 있는 구조를 전제로 합니다.",
  },
  {
    q: "대화 기록은 무조건 저장되나요?",
    a: "아니요. 기록 저장 여부와 민감한 데이터 관리 방식은 사용자가 직접 선택할 수 있도록 설계하는 것이 핵심입니다.",
  },
  {
    q: "웹사이트와 데스크톱 앱은 어떻게 연결되나요?",
    a: "같은 계정으로 로그인하면 메이티의 대화 기록, 리포트, 설정값이 웹 대시보드와 연결되어 일관된 경험을 제공합니다.",
  },
  {
    q: "관리자페이지는 누구에게 보이나요?",
    a: "관리자 권한이 있는 계정에만 노출되도록 설계합니다. 일반 사용자에게는 보이지 않게 처리됩니다.",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (!location.hash) return;

    const sectionId = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [location.hash]);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <MainLayout>
      <div className="matey-home">
        <section className="hero">
          <div className="hero__blob hero__blob--pink" />
          <div className="hero__blob hero__blob--mint" />

          <div className="container hero__inner">
            <div className="hero__left">
              <div className="hero__badge">🫶 Desktop AI Companion · Proactive Care</div>

              <h1 className="hero__title">
                힘든 날에도,
                <br />
                <span className="hero__title-gradient">먼저 말을 걸어주는 AI 친구</span>
              </h1>

              <p className="hero__desc">
                메이티는 단순히 질문을 기다리는 챗봇이 아니에요.
                바탕화면에서 조용히 함께 머물며 사용자의 흐름과 감정을 살피고,
                외로움과 버거움을 조금 먼저 알아차리려는 AI 메이트예요.
              </p>

              <div className="hero__actions">
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => navigate("/signup")}
                >
                  무료 체험 시작하기
                </button>

                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => navigate("/download")}
                >
                  데스크톱 앱 다운로드
                </button>
              </div>

              <div className="hero__chips">
                <div className="hero__chip">💡 능동형 상담 방식</div>
                <div className="hero__chip">🧠 화면 맥락 기반 반응</div>
                <div className="hero__chip">📈 고민 히스토리 · 감정 분석</div>
              </div>
            </div>

            <div className="hero__right">
              <div className="hero-card">
                <div className="hero-card__image-wrap">
                  <img
                    src="/images/rabbit-duo.png"
                    alt="메이티 캐릭터"
                    className="hero-card__image"
                  />
                </div>

                <div className="hero-bubble hero-bubble--main">
                  계속 같은 화면에서 오래 멈춰 있었네.
                  <br />
                  오늘 조금 버거운 날이야?
                </div>

                <div className="hero-bubble hero-bubble--sub">
                  잠깐 숨 고르고, 같이 천천히 정리해볼까?
                </div>

                <div className="hero-card__meta">
                  <span>상황 인식</span>
                  <span>실시간 상호작용</span>
                  <span>관계형 메이트</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="intro" className="intro">
          <div className="container">
            <div className="intro__grid">
              <div className="intro-card">
                <h3>
                  메이티는 “사용자가 여는 챗봇”이 아니라
                  <br />
                  “먼저 다가오는 AI 동반자”를 목표로 합니다
                </h3>

                <p>
                  기존 상담 챗봇은 사용자가 힘들 때 직접 앱을 열고 도움을 요청해야 했어요.
                  하지만 정말 지친 순간엔 말문을 여는 일조차 어렵기도 하죠.
                  메이티는 바로 그 지점을 바꾸고 싶었습니다.
                  사용자의 하루 가까이에 머물며, 외로움과 피로를 조금 더 먼저 알아차리는
                  관계형 AI 메이트를 지향합니다.
                </p>

                <div className="intro-card__quote">
                  “혼자 견디지 않도록, 메이티가 먼저 말을 걸어줄게.”
                </div>
              </div>

              <div className="intro-side">
                <div className="intro-mini">
                  <strong>능동형(Proactive) 상담</strong>
                  <p>
                    사용자가 먼저 입력하지 않아도, 상황과 패턴을 읽고 메이티가 먼저
                    관심을 보여줍니다.
                  </p>
                </div>

                <div className="intro-mini">
                  <strong>웹 + 앱 연동 시연 구조</strong>
                  <p>
                    데스크톱 앱의 실시간 상호작용과 웹 대시보드의 리포트 구조가
                    연결되어 발표 데모 임팩트가 강해집니다.
                  </p>
                </div>

                <div className="intro-mini">
                  <strong>프라이버시가 설계의 핵심</strong>
                  <p>
                    모니터링 ON/OFF 토글, 기록 저장 여부 등 민감한 권한을 사용자가
                    명확하게 제어할 수 있도록 설계합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section features">
          <div className="container">
            <div className="section-head">
              <div className="section-head__eyebrow">FEATURES</div>
              <h2>메이티가 특별한 이유</h2>
              <p>
                단순한 AI 기능 나열이 아니라, 사용자와의 관계 방식 자체를 다르게 설계했습니다.
              </p>
            </div>

            <div className="feature-grid">
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section className="section chat-demo">
          <div className="container">
            <div className="section-head">
              <div className="section-head__eyebrow">CHAT DEMO</div>
              <h2>검색엔진이 아니라, 나와 상호작용하는 메이트처럼</h2>
              <p>
                무조건 편들기만 하지 않고, 때로는 다정하게, 때로는 현실적으로 반응하는
                살아 있는 캐릭터 경험을 지향합니다.
              </p>
            </div>

            <div className="chat-demo__grid">
              <div className="chat-window">
                <div className="chat-window__top">
                  <div className="chat-window__agent">
                    <div className="chat-window__avatar">M</div>
                    <div>
                      <strong>메이티</strong>
                      <span>바탕화면에서 함께 머무는 AI 친구</span>
                    </div>
                  </div>

                  <div className="chat-window__status">온라인 · 먼저 관찰 중</div>
                </div>

                <div className="chat-thread">
                  <div className="chat-bubble chat-bubble--matey">
                    채용 사이트 오래 보고 있었네.
                    <br />
                    취업 준비 때문에 마음이 좀 무거워진 거야?
                  </div>

                  <div className="chat-bubble chat-bubble--user">
                    응... 뭘 해도 불안하고 자꾸 비교하게 돼.
                  </div>

                  <div className="chat-bubble chat-bubble--matey">
                    그럴 수 있어. 근데 지금 너를 괴롭히는 건 “능력 부족”보다
                    “지친 상태에서 계속 비교하는 흐름”에 더 가까워 보여.
                    <br />
                    잠깐 정리해볼래? 내가 같이 나눠서 볼게.
                  </div>
                </div>
              </div>

              <div className="chat-demo__side">
                <div className="preview-card">
                  <h3>오늘의 메이트 요약</h3>
                  <p>
                    오늘 메이티는 총 3번 먼저 말을 걸었고, 사용자는 저녁 시간대에 가장 길게 반응했어요.
                    반복 키워드는 “불안”, “비교”, “진로”였어요.
                  </p>
                </div>

                <div className="preview-card">
                  <h3>감정 흐름 미리보기</h3>

                  <div className="mood-list">
                    <div className="mood-item">
                      <span>불안</span>
                      <div className="mood-bar">
                        <i style={{ width: "78%" }} />
                      </div>
                      <strong>78%</strong>
                    </div>

                    <div className="mood-item">
                      <span>피로</span>
                      <div className="mood-bar">
                        <i style={{ width: "62%" }} />
                      </div>
                      <strong>62%</strong>
                    </div>

                    <div className="mood-item">
                      <span>안정</span>
                      <div className="mood-bar">
                        <i style={{ width: "41%" }} />
                      </div>
                      <strong>41%</strong>
                    </div>

                    <div className="mood-item">
                      <span>희망</span>
                      <div className="mood-bar">
                        <i style={{ width: "54%" }} />
                      </div>
                      <strong>54%</strong>
                    </div>
                  </div>
                </div>

                <div className="preview-card">
                  <h3>웹 대시보드 연결</h3>
                  <p>
                    대화 내역, 보안 설정, 리포트, 개인정보 관리, 개인 설정까지
                    웹에서 한 번에 정리하고 관리할 수 있어요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section how">
          <div className="container">
            <div className="section-head">
              <div className="section-head__eyebrow">HOW IT WORKS</div>
              <h2>메이티는 이렇게 함께합니다</h2>
              <p>
                설치부터 상호작용, 그리고 웹 리포트까지 하나의 흐름으로 이어지는 구조입니다.
              </p>
            </div>

            <div className="how-grid">
              {HOW_IT_WORKS.map((item) => (
                <HowCard key={item.step} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing">
          <div className="container">
            <div className="section-head">
              <div className="section-head__eyebrow">PRICING</div>
              <h2>필요한 만큼, 메이티와 가까워지는 방식</h2>
              <p>
                학원 프로젝트 단계에서는 무료/유료 플랜 구조만 먼저 잡아두고,
                발표 때 서비스 확장성을 보여주기 좋습니다.
              </p>
            </div>

            <div className="pricing-grid">
              {PLANS.map((plan) => (
                <PricingCard key={plan.name} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <section id="help" className="section faq">
          <div className="container">
            <div className="section-head">
              <div className="section-head__eyebrow">HELP</div>
              <h2>도움말 · 자주 묻는 질문</h2>
              <p>
                메이티의 동작 방식과 프라이버시 설계에서 가장 많이 궁금해할 포인트를 정리했습니다.
              </p>
            </div>

            <div className="faq-list">
              {FAQS.map((faq, index) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  isOpen={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="download-banner">
          <div className="container">
            <div className="download-banner__card">
              <div>
                <h2>메이티를 바탕화면에서 직접 만나보세요</h2>
                <p>
                  웹에서는 기록과 분석을 보고, 데스크톱 앱에서는 먼저 말을 걸어오는
                  메이티와 함께할 수 있어요. 설치형 경험이 있는 서비스라는 점이
                  메이티의 가장 큰 차별점입니다.
                </p>
              </div>

              <div className="download-banner__actions">
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => navigate("/download")}
                >
                  다운로드 페이지로 이동
                </button>
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => navigate("/signup")}
                >
                  무료 체험하기
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="final-cta__card">
              <h2>
                혼자 견디는 하루보다,
                <br />
                메이티와 함께하는 하루로
              </h2>
              <p>
                메이티는 차갑게 기능만 수행하는 AI가 아니라,
                때로는 다정하고 때로는 현실적으로 먼저 관심을 보여주는
                감정 동반자 서비스가 되고자 합니다.
              </p>

              <div className="final-cta__actions">
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => navigate("/signup")}
                >
                  지금 시작하기
                </button>
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => scrollToSection("intro")}
                >
                  서비스 더 알아보기
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

const FeatureCard = ({ icon, tone, title, desc }) => {
  return (
    <article className="feature-card">
      <div className={`feature-card__icon ${tone}`}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

const HowCard = ({ step, icon, title, desc }) => {
  return (
    <article className="how-card">
      <div className="how-card__step">{step}</div>
      <div className="how-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

const PricingCard = ({ name, price, desc, features, highlight, badge }) => {
  return (
    <article className={`pricing-card ${highlight ? "pricing-card--highlight" : ""}`}>
      {badge && <div className="pricing-card__badge">{badge}</div>}
      <h3>{name}</h3>
      <div className="pricing-card__price">{price}</div>
      <p className="pricing-card__desc">{desc}</p>

      <ul className="pricing-list">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <button type="button" className={highlight ? "primary-btn" : "secondary-btn"}>
        시작하기
      </button>
    </article>
  );
};

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="faq-item">
      <button type="button" className="faq-item__button" onClick={onToggle}>
        <strong>{faq.q}</strong>
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="faq-item__content">{faq.a}</div>}
    </div>
  );
};

export default HomePage;
