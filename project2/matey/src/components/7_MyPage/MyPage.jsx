import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../1_Header/Header";
import "./MyPage.css";

const activityData = [
  {
    title: "최근 대화",
    desc: "메이티와 마지막으로 나눈 대화는 ‘취업 준비 불안’에 대한 이야기였어요.",
    badge: "오늘",
  },
  {
    title: "감정 리포트 업데이트",
    desc: "오늘 저녁 시간대 감정 흐름이 새롭게 반영되었어요.",
    badge: "업데이트",
  },
  {
    title: "메이트 성격 설정",
    desc: "현재 메이티는 ‘다정한 현실형’ 톤으로 설정되어 있어요.",
    badge: "설정",
  },
];

const connectedDevices = [
  {
    name: "Matey Desktop · Windows",
    status: "연결됨",
    detail: "오늘 21:14 마지막 동기화",
  },
  {
    name: "Chrome Web Dashboard",
    status: "활성",
    detail: "현재 세션 유지 중",
  },
];

const planBenefits = [
  "대시보드에서 대화 내역 확인",
  "고민 히스토리 / 감정 분석 리포트 보기",
  "메이트 성격 및 알림 설정 커스터마이징",
  "웹과 데스크톱 앱 계정 연동",
];

const MyPage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  let nickname = "matey_user";
  let email = "user@matey.com";
  let role = "USER";

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      nickname = payload.nickname || payload.name || nickname;
      email = payload.email || email;
      role = payload.role || role;
    } catch (error) {
      console.error("토큰 파싱 실패:", error);
    }
  }

  return (
    <>
      <Header />

      <main className="mypage">
        <section className="mypage__hero">
          <div className="mypage__hero-bg mypage__hero-bg--pink" />
          <div className="mypage__hero-bg mypage__hero-bg--mint" />

          <div className="mypage__container">
            <div className="mypage__hero-card">
              <div className="mypage__profile">
                <div className="mypage__avatar">🐰</div>

                <div className="mypage__profile-text">
                  <span className="mypage__eyebrow">MY PAGE</span>
                  <h1>{nickname}님의 메이티 공간</h1>
                  <p>
                    메이티와 함께 쌓아온 기록, 연결된 기기, 현재 플랜과 개인 설정 상태를
                    한눈에 확인할 수 있어요.
                  </p>

                  <div className="mypage__profile-chips">
                    <span>🌷 {role === "ADMIN" || role === "SUPERADMIN" ? "관리자 계정" : "일반 사용자"}</span>
                    <span>📧 {email}</span>
                    <span>🔗 웹 · 데스크톱 연동</span>
                  </div>
                </div>
              </div>

              <div className="mypage__hero-actions">
                <button className="mypage__primary-btn" onClick={() => navigate("/dashboard")}>
                  대시보드로 이동
                </button>
                <button
                  className="mypage__secondary-btn"
                  onClick={() => navigate("/dashboard/settings")}
                >
                  개인 설정 열기
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mypage__section">
          <div className="mypage__container">
            <div className="mypage__grid mypage__grid--top">
              <article className="mypage-card">
                <div className="mypage-card__head">
                  <span>PLAN</span>
                  <h2>현재 이용 플랜</h2>
                </div>

                <div className="mypage-plan">
                  <div className="mypage-plan__badge">Plus</div>
                  <strong>메이티 Plus 플랜 이용 중</strong>
                  <p>
                    감정 분석, 기록 저장, 캐릭터 커스터마이징 기능을 포함한 추천 플랜입니다.
                  </p>

                  <ul className="mypage-list">
                    {planBenefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="mypage-plan__actions">
                    <button className="mypage__soft-btn">플랜 변경</button>
                    <button className="mypage__soft-btn">결제 내역 보기</button>
                  </div>
                </div>
              </article>

              <article className="mypage-card">
                <div className="mypage-card__head">
                  <span>SUMMARY</span>
                  <h2>한눈에 보는 나의 메이티 기록</h2>
                </div>

                <div className="mypage-stats">
                  <div className="mypage-stat">
                    <span>이번 주 대화 수</span>
                    <strong>18회</strong>
                  </div>
                  <div className="mypage-stat">
                    <span>오늘 먼저 건넨 말</span>
                    <strong>3회</strong>
                  </div>
                  <div className="mypage-stat">
                    <span>가장 자주 나온 감정</span>
                    <strong>불안</strong>
                  </div>
                  <div className="mypage-stat">
                    <span>감정 안정도</span>
                    <strong>54%</strong>
                  </div>
                </div>

                <div className="mypage-message">
                  메이티는 최근 비교와 진로 관련 불안을 자주 감지하고 있어요.
                  하지만 사용자의 반응 길이는 조금씩 늘어나고 있어서,
                  대화를 통한 정리 흐름은 오히려 좋아지는 중이에요.
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mypage__section mypage__section--soft">
          <div className="mypage__container">
            <div className="mypage__grid mypage__grid--middle">
              <article className="mypage-card">
                <div className="mypage-card__head">
                  <span>RECENT ACTIVITY</span>
                  <h2>최근 활동</h2>
                </div>

                <div className="mypage-activity-list">
                  {activityData.map((item) => (
                    <div key={item.title} className="mypage-activity">
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                      <span className="mypage-chip">{item.badge}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="mypage-card">
                <div className="mypage-card__head">
                  <span>DEVICE</span>
                  <h2>연결된 기기</h2>
                </div>

                <div className="mypage-device-list">
                  {connectedDevices.map((device) => (
                    <div key={device.name} className="mypage-device">
                      <div className="mypage-device__icon">💻</div>
                      <div className="mypage-device__body">
                        <strong>{device.name}</strong>
                        <p>{device.detail}</p>
                      </div>
                      <span className="mypage-chip mypage-chip--success">{device.status}</span>
                    </div>
                  ))}
                </div>

                <button className="mypage__secondary-btn" onClick={() => navigate("/download")}>
                  앱 다운로드 페이지 보기
                </button>
              </article>
            </div>
          </div>
        </section>

        <section className="mypage__section">
          <div className="mypage__container">
            <article className="mypage-card mypage-card--wide">
              <div className="mypage-card__head">
                <span>MATEY RELATION</span>
                <h2>메이티와의 현재 관계 설정</h2>
              </div>

              <div className="mypage-relation">
                <div className="mypage-relation__box">
                  <strong>현재 메이트 성격</strong>
                  <p>다정한 현실형</p>
                </div>

                <div className="mypage-relation__box">
                  <strong>응답 온도</strong>
                  <p>균형형</p>
                </div>

                <div className="mypage-relation__box">
                  <strong>데스크톱 외형</strong>
                  <p>토끼 메이트</p>
                </div>

                <div className="mypage-relation__box">
                  <strong>알림 강도</strong>
                  <p>자연스럽게</p>
                </div>
              </div>

              <div className="mypage-inline-actions">
                <button className="mypage__primary-btn" onClick={() => navigate("/dashboard/settings")}>
                  메이트 설정 바꾸기
                </button>
                <button className="mypage__secondary-btn" onClick={() => navigate("/dashboard/reports")}>
                  감정 리포트 보러가기
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default MyPage;
