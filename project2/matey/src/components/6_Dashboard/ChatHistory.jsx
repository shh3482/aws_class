import React, { useMemo, useState } from "react";

const chatData = [
  {
    date: "2026-04-01 21:40",
    topic: "취업 준비 불안",
    mood: "불안",
    summary: "채용 사이트를 오래 보던 상황에서 메이티가 먼저 말을 걸었고, 비교와 조급함에 대한 대화를 나눴어요.",
  },
  {
    date: "2026-04-01 15:10",
    topic: "집중 정체",
    mood: "피로",
    summary: "과제를 진행하던 도중 작업 흐름이 멈춰 메이티가 짧은 체크인 대화를 시작했어요.",
  },
  {
    date: "2026-03-31 23:52",
    topic: "늦은 밤 자기비판",
    mood: "우울",
    summary: "하루를 마무리하는 시간에 비교와 후회가 반복되어, 감정 정리 중심 대화를 진행했어요.",
  },
  {
    date: "2026-03-31 18:25",
    topic: "면접 걱정",
    mood: "긴장",
    summary: "예상 질문을 생각하며 긴장하던 흐름에서 현실적인 조언과 감정 안정 대화를 나눴어요.",
  },
  {
    date: "2026-03-30 20:03",
    topic: "잡담과 회복",
    mood: "안정",
    summary: "가벼운 잡담 위주로 대화를 나누며 감정 회복과 루틴 유지에 도움을 줬어요.",
  },
];

const moodColor = {
  불안: "warning",
  피로: "danger",
  우울: "danger",
  긴장: "warning",
  안정: "success",
};

const ChatHistory = () => {
  const [keyword, setKeyword] = useState("");
  const [mood, setMood] = useState("전체");

  const filteredData = useMemo(() => {
    return chatData.filter((item) => {
      const matchesKeyword =
        item.topic.includes(keyword) || item.summary.includes(keyword);
      const matchesMood = mood === "전체" ? true : item.mood === mood;
      return matchesKeyword && matchesMood;
    });
  }, [keyword, mood]);

  return (
    <section className="dashboard-page">
      <div className="dashboard-page__hero">
        <div className="dashboard-page__hero-top">
          <div>
            <h1>대화 내역</h1>
            <p>
              메이티와 나눈 최근 대화를 날짜, 감정 태그, 주제별로 확인할 수 있어요.
            </p>
          </div>

          <div className="dashboard-page__hero-badges">
            <div className="dashboard-badge">💬 최근 상호작용 기록</div>
            <div className="dashboard-badge">🔎 검색 및 필터</div>
          </div>
        </div>
      </div>

      <article className="dashboard-card">
        <h3>검색 및 필터</h3>

        <div className="dashboard-searchbar">
          <input
            className="dashboard-input"
            type="text"
            placeholder="주제나 내용으로 검색해보세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <select
            className="dashboard-select"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option>전체</option>
            <option>불안</option>
            <option>피로</option>
            <option>우울</option>
            <option>긴장</option>
            <option>안정</option>
          </select>

          <button
            type="button"
            className="dashboard-button--ghost"
            onClick={() => {
              setKeyword("");
              setMood("전체");
            }}
          >
            초기화
          </button>
        </div>
      </article>

      <article className="dashboard-card">
        <h3>대화 목록</h3>

        <div className="dashboard-list">
          {filteredData.map((item) => (
            <div className="dashboard-list__item" key={`${item.date}-${item.topic}`}>
              <div>
                <strong>{item.topic}</strong>
                <p style={{ marginBottom: "6px" }}>{item.summary}</p>
                <p style={{ margin: 0, color: "#98a1b3", fontSize: "0.84rem" }}>
                  {item.date}
                </p>
              </div>

              <div className={`dashboard-chip ${moodColor[item.mood] || ""}`}>
                {item.mood}
              </div>
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="dashboard-list__item">
              <div>
                <strong>검색 결과가 없어요</strong>
                <p>다른 키워드나 감정 태그로 다시 찾아보세요.</p>
              </div>
            </div>
          )}
        </div>
      </article>

      <article className="dashboard-card">
        <h3>대화 내역 활용 포인트</h3>
        <p>
          이 페이지는 단순 로그가 아니라, “메이티가 언제 먼저 다가왔고 사용자가 어떻게 반응했는지”를 보여주는 관계 기록으로 활용할 수 있어요.
          발표 때도 상담 기록보다 상호작용 히스토리라는 표현이 더 강하게 먹힙니다.
        </p>
      </article>
    </section>
  );
};

export default ChatHistory;
