import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Lite',
    price: '무료',
    desc: '처음 가볍게 시작해보는 분에게',
    badge: '입문',
    tone: 'blue',
    features: [
      '기본 캐릭터 대화',
      '오늘 체크인',
      '최근 감정 기록 보기',
      '기본 말풍선 선택지',
    ],
    cta: '무료로 시작하기',
    href: '/signup',
  },
  {
    name: 'Care',
    price: '₩9,900',
    sub: '/월',
    desc: '꾸준히 감정 기록과 리포트를 보고 싶은 분에게',
    badge: '추천',
    tone: 'peach',
    featured: true,
    features: [
      '무제한 캐릭터 대화',
      '주간 감정 리포트',
      '봇 일기 자동 정리',
      '대화 스타일 개인화',
      '우선 지원',
    ],
    cta: '추천 플랜 시작',
    href: '/signup',
  },
  {
    name: 'Companion',
    price: '₩19,900',
    sub: '/월',
    desc: '더 깊은 인사이트와 개인화가 필요한 분에게',
    badge: '확장',
    tone: 'mint',
    features: [
      '고급 감정 흐름 분석',
      '루틴 추천',
      '캐릭터 반응 세부 설정',
      '상세 리포트 보관',
      '프리미엄 업데이트 우선 제공',
    ],
    cta: '프리미엄 시작',
    href: '/signup',
  },
];

export default function Pricing() {
  return (
    <section className="matey-pricing" id="pricing">
      <div className="matey-pricing__container">
        <div className="matey-pricing__heading">
          <span className="matey-pricing__kicker">요금 안내</span>
          <h2>
            부담 없이 시작하고,
            <br />
            <strong>필요할 때 더 깊게 함께해요</strong>
          </h2>
          <p>
            무료로 경험해본 뒤, 감정 기록과 리포트를 더 꾸준히 보고 싶을 때
            확장할 수 있게 설계했어요.
          </p>
        </div>

        <div className="matey-pricing__grid">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`matey-pricing__card matey-pricing__card--${plan.tone} ${
                plan.featured ? 'is-featured' : ''
              }`}
            >
              <div className="matey-pricing__badge-row">
                <span className="matey-pricing__badge">{plan.badge}</span>
                {plan.featured && <span className="matey-pricing__featured">Most Loved</span>}
              </div>

              <h3>{plan.name}</h3>
              <p className="matey-pricing__desc">{plan.desc}</p>

              <div className="matey-pricing__price">
                <strong>{plan.price}</strong>
                {plan.sub && <span>{plan.sub}</span>}
              </div>

              <div className="matey-pricing__visual">
                <img
                  src={plan.name === 'Companion' ? '/images/cat.png' : '/images/rabbit.png'}
                  alt={plan.name}
                />
              </div>

              <ul className="matey-pricing__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link to={plan.href} className="matey-pricing__btn">
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
