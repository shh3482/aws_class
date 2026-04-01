import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../1_Header/Header";
import "./AdminPage.css";

const stats = [
  {
    label: "총 사용자 수",
    value: "1,284",
    sub: "전주 대비 +12%",
  },
  {
    label: "오늘 활성 사용자",
    value: "326",
    sub: "웹 + 데스크톱 동시 포함",
  },
  {
    label: "오늘 생성된 리포트",
    value: "97",
    sub: "감정 분석 / 하루 요약 포함",
  },
  {
    label: "문의 / 이슈 건수",
    value: "14",
    sub: "미처리 3건",
  },
];

const recentUsers = [
  {
    name: "matey_user01",
    email: "user01@matey.com",
    status: "활성",
    plan: "Plus",
    joined: "2026-03-29",
  },
  {
    name: "calmday",
    email: "calmday@matey.com",
    status: "활성",
    plan: "Free",
    joined: "2026-03-30",
  },
  {
    name: "night_rabbit",
    email: "night@matey.com",
    status: "주의",
    plan: "Premium",
    joined: "2026-03-31",
  },
  {
    name: "admin_demo",
    email: "admin@matey.com",
    status: "관리자",
    plan: "Admin",
    joined: "2026-04-01",
  },
];

const adminLogs = [
  {
    title: "감정 분석 리포트 생성량 증가",
    desc: "저녁 시간대 리포트 요청이 크게 늘어나 서버 부하 모니터링이 필요합니다.",
    type: "모니터링",
  },
  {
    title: "데스크톱 로그인 동기화 정상",
    desc: "웹-앱 연동 세션 동기화가 정상적으로 유지되고 있습니다.",
    type: "정상",
  },
  {
    title: "권한 설정 화면 검토 필요",
    desc: "프라이버시 ON/OFF UI 문구를 더 명확하게 다듬으면 좋습니다.",
    type: "기획",
  },
];

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <main className="admin-page">
        <section className="admin-page__hero">
          <div className="admin-page__container">
            <div className="admin-page__hero-card">
              <div className="admin-page__hero-top">
                <div>
                  <span className="admin-page__eyebrow">ADMIN PAGE</span>
                  <h1>메이티 관리자 대시보드</h1>
                  <p>
                    사용자 현황, 리포트 생성 흐름, 관리자용 점검 포인트를
                    한눈에 확인할 수 있는 운영 페이지입니다.
                  </p>
                </div>

                <div className="admin-page__hero-actions">
                  <button className="admin-page__primary-btn" onClick={() => navigate("/dashboard")}>
                    사용자 대시보드 보기
                  </button>
                  <button className="admin-page__secondary-btn" onClick={() => navigate("/")}>
                    홈으로 이동
                  </button>
                </div>
              </div>

              <div className="admin-page__hero-chips">
                <span>👑 관리자 권한</span>
                <span>📊 서비스 운영 현황</span>
                <span>🛡️ 권한 / 보안 점검</span>
              </div>
            </div>
          </div>
        </section>

        <section className="admin-page__section">
          <div className="admin-page__container">
            <div className="admin-stats">
              {stats.map((item) => (
                <article className="admin-stat-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                  <p>{item.sub}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="admin-page__section">
          <div className="admin-page__container">
            <div className="admin-grid">
              <article className="admin-card">
                <div className="admin-card__head">
                  <span>USER MANAGEMENT</span>
                  <h2>최근 사용자 목록</h2>
                </div>

                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>닉네임</th>
                        <th>이메일</th>
                        <th>상태</th>
                        <th>플랜</th>
                        <th>가입일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.email}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <span
                              className={`admin-chip ${
                                user.status === "활성"
                                  ? "success"
                                  : user.status === "관리자"
                                  ? "primary"
                                  : "warning"
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td>{user.plan}</td>
                          <td>{user.joined}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <article className="admin-card">
                <div className="admin-card__head">
                  <span>OPERATION NOTE</span>
                  <h2>운영 메모</h2>
                </div>

                <div className="admin-log-list">
                  {adminLogs.map((log) => (
                    <div key={log.title} className="admin-log">
                      <div>
                        <strong>{log.title}</strong>
                        <p>{log.desc}</p>
                      </div>
                      <span className="admin-chip primary">{log.type}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="admin-page__section admin-page__section--soft">
          <div className="admin-page__container">
            <div className="admin-grid admin-grid--bottom">
              <article className="admin-card">
                <div className="admin-card__head">
                  <span>SERVICE CHECK</span>
                  <h2>서비스 상태 체크</h2>
                </div>

                <div className="admin-checks">
                  <div className="admin-check">
                    <strong>웹 로그인 / 라우팅</strong>
                    <p>정상 동작</p>
                  </div>

                  <div className="admin-check">
                    <strong>웹-앱 연동 세션</strong>
                    <p>점검 중</p>
                  </div>

                  <div className="admin-check">
                    <strong>리포트 생성 흐름</strong>
                    <p>정상 동작</p>
                  </div>

                  <div className="admin-check">
                    <strong>프라이버시 설정 토글</strong>
                    <p>UI 검토 필요</p>
                  </div>
                </div>
              </article>

              <article className="admin-card">
                <div className="admin-card__head">
                  <span>ADMIN ACTION</span>
                  <h2>관리자 빠른 작업</h2>
                </div>

                <div className="admin-actions">
                  <button className="admin-page__primary-btn">사용자 목록 전체 보기</button>
                  <button className="admin-page__secondary-btn">문의 내역 확인</button>
                  <button className="admin-page__secondary-btn">권한 정책 점검</button>
                  <button className="admin-page__secondary-btn">공지사항 등록</button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminPage;
