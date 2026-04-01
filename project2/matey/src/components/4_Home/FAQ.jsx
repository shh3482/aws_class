import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "메이티는 화면을 항상 감시하나요?",
    a: "아니요. 사용자가 허용한 범위에서만 동작하며, 설정에서 언제든 ON/OFF를 변경할 수 있어요.",
  },
  {
    q: "대화 기록은 저장되나요?",
    a: "사용자 선택에 따라 저장 여부를 설정할 수 있어요. 민감한 기록은 비활성화 옵션도 제공할 수 있어요.",
  },
  {
    q: "웹과 데스크톱 앱은 어떻게 연결되나요?",
    a: "같은 계정으로 로그인하면 대시보드와 기록, 설정이 자연스럽게 연동돼요.",
  },
  {
    q: "관리자 페이지는 누가 볼 수 있나요?",
    a: "관리자 권한이 있는 계정만 접근할 수 있어요.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="help" className="faq-section">
      <div className="container">
        <div className="section-head">
          <span>HELP</span>
          <h2>메이티가 궁금하다면</h2>
          <p>서비스와 프라이버시에 대해 자주 묻는 내용을 정리했어요.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.q} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button onClick={() => setOpenIndex(index === openIndex ? -1 : index)}>
                {faq.q}
              </button>
              {openIndex === index && <p>{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
