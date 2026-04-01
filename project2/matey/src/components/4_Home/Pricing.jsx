import React from "react";
import "./Pricing.css";

const plans = [
  {
    name: "Free",
    price: "₩0",
    desc: "메이티를 가볍게 시작하는 플랜",
    features: ["기본 대화", "하루 요약", "웹 계정 사용"],
  },
  {
    name: "Plus",
    price: "₩4,900",
    desc: "감정 분석과 기록 기능이 강화된 플랜",
    features: ["감정 분석", "기록 저장", "캐릭터 커스터마이징"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₩9,900",
    desc: "더 깊은 관계형 경험을 위한 플랜",
    features: ["고급 패턴 분석", "데스크톱 기능 확장", "우선 지원"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-head">
          <span>PRICING</span>
          <h2>메이티와 가까워지는 방식</h2>
          <p>가볍게 시작하고, 필요에 따라 더 깊게 연결될 수 있어요.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
              <h3>{plan.name}</h3>
              <strong>{plan.price}</strong>
              <p>{plan.desc}</p>
              <ul>
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button>시작하기</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
