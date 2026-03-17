import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    num: '01',
    icon: '✍️',
    title: '간단한 가입',
    desc: '이메일 하나로 30초 만에 가입 완료. 개인정보 최소 수집!',
  },
  {
    num: '02',
    icon: '🗂️',
    title: '카테고리 선택',
    desc: '연애, 직장, 가족, 자존감 등 고민 유형을 선택하세요.',
  },
  {
    num: '03',
    icon: '💬',
    title: '자유롭게 대화',
    desc: 'AI에게 편하게 고민을 털어놓으세요. 판단 없이 들어드립니다.',
  },
  {
    num: '04',
    icon: '💡',
    title: '솔루션 & 기록',
    desc: '맞춤 조언과 함께 감정 변화를 기록하고 추적하세요.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="hiw__header">
          <span className="section-tag">🚀 이용 방법</span>
          <h2 className="section-title">
            4단계로 <span className="gradient-text">시작</span>하세요
          </h2>
          <p className="section-desc">
            복잡한 절차 없이 바로 상담을 시작할 수 있습니다.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div key={i} className="hiw__step">
              {/* 연결선 */}
              {i < steps.length - 1 && (
                <div className="hiw__connector" />
              )}
              <div className="step-card">
                <div className="step-num">{step.num}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
