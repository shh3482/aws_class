import React, { useState } from "react";

const historyItems = [
  {
    title: "취업 준비 스트레스",
    desc: "최근 반복적으로 등장하는 고민 주제예요. 비교, 압박감, 미래 불안과 자주 연결되고 있어요.",
    tag: "반복 높음",
  },
  {
    title: "과제 마감 압박",
    desc: "오후 시간대 집중 저하와 함께 자주 나타났어요. 피로와 자기비판으로 이어지는 경우가 있어요.",
    tag: "주의 필요",
  },
  {
    title: "관계 피로와 회피",
    desc: "혼자 있고 싶어지는 흐름과 동시에 외로움을 느끼는 패턴이 관찰되었어요.",
    tag: "관찰 중",
  },
];

const dailySummary = [
  {
    time: "오전",
    text: "전반적으로 조용한 상태였고, 감정 기복은 크지 않았어요.",
  },
  {
    time: "오후",
    text: "집중 정체와 피로가 높아지며 메이티가 먼저 짧은 체크인을 시도했어요.",
  },
  {
    time: "저녁",
    text: "취업 관련 불안이 높아졌지만 대화 반응이 좋아 감정 정리에 도움이 되었어요.",
  },
];

const Reports = () => {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <section className="dashboard-page">
      <div className="dashboard-page__hero">
        <div className="dashboard-page__hero-top">
          <div>
            <h1>리포트</h1>
            <p>
              고민 히스토리, 감정 분석, 하루 요약을 통해 메이티와의 상호작용 흐름을 정리해보세요.
            </p>
          </div>

          <div className="dashboard-page__hero-badges">
            <div className="dashboard-badge">📝 고민 히스토리</div>
            <div className="dashboard-badge">📈 감정 분석</div>
            <div className="dashboard-badge">☀️ 하루 요약</div>
          </div>
        </div>
      </div>

      <article className="dashboard-card">
        <div className="tab-row">
          <button
            type="button"
            className={activeTab === "history" ? "active" : ""}
            onClick={() => setActiveTab("history")}
          >
            고민 히스토리
          </button>

          <button
            type="button"
            className={activeTab === "emotion" ? "active" : ""}
            onClick={() => setActiveTab("emotion")}
          >
            감정 분석
          </button>

          <button
            type="button"
            className={activeTab === "daily" ? "active" : ""}
            onClick={() => setActiveTab("daily")}
          >
            하루 요약
          </button>
        </div>
      </article>

      {activeTab === "history" && (
        <>
          <article className="dashboard-card">
            <h3>반복 고민 히스토리</h3>

            <div className="dashboard-list">
              {historyItems.map((item) => (
                <div className="dashboard-list__item" key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                  <div className="dashboard-chip warning">{item.tag}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card">
            <h3>해석 포인트</h3>
            <p>
              고민 히스토리는 단순히 많이 언급된 주제를 모으는 것이 아니라,
              메이티가 언제 먼저 개입했고 그 반응이 어떤 감정 흐름으로 이어졌는지 파악하는 데 의미가 있어요.
            </p>
          </article>
        </>
      )}

      {activeTab === "emotion" && (
        <>
          <div className="dashboard-grid-2">
            <article className="dashboard-card">
              <h3>감정 비율</h3>

              <div className="emotion-bars">
                <div className="emotion-bar">
                  <span>불안</span>
                  <div className="emotion-bar__track">
                    <div className="emotion-bar__fill" style={{ width: "78%" }} />
                  </div>
                  <strong>78%</strong>
                </div>

                <div className="emotion-bar">
                  <span>피로</span>
                  <div className="emotion-bar__track">
                    <div className="emotion-bar__fill" style={{ width: "62%" }} />
                  </div>
                  <strong>62%</strong>
                </div>

                <div className="emotion-bar">
                  <span>긴장</span>
                  <div className="emotion-bar__track">
                    <div className="emotion-bar__fill" style={{ width: "57%" }} />
                  </div>
                  <strong>57%</strong>
                </div>

                <div className="emotion-bar">
                  <span>안정</span>
                  <div className="emotion-bar__track">
                    <div className="emotion-bar__fill" style={{ width: "41%" }} />
                  </div>
                  <strong>41%</strong>
                </div>

                <div className="emotion-bar">
                  <span>희망</span>
                  <div className="emotion-bar__track">
                    <div className="emotion-bar__fill" style={{ width: "54%" }} />
                  </div>
                  <strong>54%</strong>
                </div>
              </div>
            </article>

            <article className="dashboard-card">
              <h3>감정 해석</h3>
              <p>
                최근에는 불안과 피로가 가장 두드러지지만, 저녁 시간대 대화 반응 이후 안정과 희망 수치도 함께 올라오는 흐름이 보입니다.
                즉, 메이티의 개입이 단순 위로를 넘어서 감정 정리의 시작점 역할을 하고 있다고 해석할 수 있어요.
              </p>
            </article>
          </div>
        </>
      )}

      {activeTab === "daily" && (
        <>
          <article className="dashboard-card">
            <h3>하루 요약</h3>

            <div className="dashboard-list">
              {dailySummary.map((item) => (
                <div className="dashboard-list__item" key={item.time}>
                  <div>
                    <strong>{item.time}</strong>
                    <p>{item.text}</p>
                  </div>
                  <div className="dashboard-chip">{item.time}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="dashboard-card">
            <h3>오늘의 메이티 한 줄 정리</h3>
            <p>
              오늘은 비교와 조급함이 두드러졌지만, 사용자가 대화에 응답하며 감정을 풀어내는 흐름이 좋아졌어요.
              짧은 체크인만으로도 부담이 조금 완화되는 패턴이 관찰되었습니다.
            </p>
          </article>
        </>
      )}
    </section>
  );
};

export default Reports;
