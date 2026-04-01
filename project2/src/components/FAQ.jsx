import React, { useState } from 'react';
import './FAQ.css';

const faqItems = [
  {
    q: '마음친구는 어떤 서비스인가요?',
    a: '토끼와 고양이 캐릭터를 중심으로 감정 체크인, 대화, 일기, 리포트 경험을 자연스럽게 이어주는 감정 케어형 AI 서비스예요.',
  },
  {
    q: '카카오톡처럼 채팅만 하는 서비스인가요?',
    a: '아니에요. 단순 메시지 앱처럼 보이는 구조보다, 캐릭터가 화면에서 말풍선과 선택지, 입력창으로 반응하는 경험에 더 가깝게 설계했어요.',
  },
  {
    q: '개인정보와 대화 내용은 안전한가요?',
    a: '민감한 감정 대화일수록 안심하고 사용할 수 있도록 보호 중심 UX와 설정 흐름을 함께 고려한 구조로 만들고 있어요.',
  },
  {
    q: '모바일과 데스크톱 모두 사용할 수 있나요?',
    a: '네. 홈, 대화 페이지, 리포트 흐름 모두 반응형으로 구성해서 모바일과 데스크톱 모두 자연스럽게 사용할 수 있어요.',
  },
  {
    q: '무료로도 충분히 써볼 수 있나요?',
    a: '기본 대화와 체크인 흐름은 무료로 가볍게 시작해볼 수 있고, 더 깊은 리포트와 기록 기능은 확장 플랜으로 사용할 수 있게 구성했어요.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="matey-faq" id="faq">
      <div className="matey-faq__container">
        <div className="matey-faq__heading">
          <span className="matey-faq__kicker">FAQ</span>
          <h2>
            궁금한 점은
            <br />
            <strong>미리 편하게 확인해보세요</strong>
          </h2>
          <p>
            감정 케어 서비스인 만큼, 기능보다도 “어떤 느낌으로 쓰게 되는지”가
            잘 전달되도록 자주 묻는 질문을 정리했어요.
          </p>
        </div>

        <div className="matey-faq__layout">
          <div className="matey-faq__character-card">
            <div className="matey-faq__character-visual">
              <img src="/images/rabbit-duo.png" alt="토끼와 고양이 캐릭터" />
            </div>

            <div className="matey-faq__character-bubble">
              <strong>하루가 도와드릴게요</strong>
              <p>궁금한 항목을 눌러보면 답변이 바로 펼쳐져요.</p>
            </div>
          </div>

          <div className="matey-faq__list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={item.q}
                  className={`matey-faq__item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="matey-faq__question"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <i>{isOpen ? '−' : '+'}</i>
                  </button>

                  <div className="matey-faq__answer">
                    <p>{item.a}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
