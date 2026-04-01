import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup, loading, isAuthenticated } = useAuth();

  const [form, setForm] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    if (!form.email.trim()) {
      setError("이메일을 입력해주세요.");
      return;
    }

    if (!form.password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    if (form.password.length < 4) {
      setError("비밀번호는 4자 이상으로 입력해주세요.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    if (!form.agree) {
      setError("서비스 이용 동의에 체크해주세요.");
      return;
    }

    try {
      const result = await signup({
        name: form.name,
        nickname: form.nickname,
        email: form.email,
        password: form.password,
      });

      if (result?.success) {
        navigate("/dashboard", { replace: true });
      }
    } catch (err) {
      console.error(err);
      setError("회원가입 중 문제가 발생했어요. 다시 시도해주세요.");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--grad-soft)",
        display: "grid",
        placeItems: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "min(1180px, 100%)",
          display: "grid",
          gridTemplateColumns: "1.02fr 0.98fr",
          gap: "20px",
        }}
      >
        <section
          style={{
            padding: "36px",
            borderRadius: "32px",
            background: "rgba(255,255,255,0.78)",
            border: "1px solid rgba(255,255,255,0.82)",
            boxShadow: "0 18px 44px rgba(104, 116, 200, 0.12)",
            backdropFilter: "blur(18px)",
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "14px",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontWeight: 900,
                background:
                  "linear-gradient(135deg, #7c8cff 0%, #9aa6ff 44%, #ffb7d5 100%)",
              }}
            >
              M
            </div>
            <div>
              <strong style={{ display: "block", color: "var(--text)" }}>메이티</strong>
              <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                먼저 다가오는 AI 메이트
              </span>
            </div>
          </Link>

          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.9)",
                border: "1px solid var(--line)",
                color: "var(--primary-dark)",
                fontWeight: 800,
                fontSize: "0.84rem",
                marginBottom: "16px",
              }}
            >
              SIGN UP
            </div>

            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
              }}
            >
              메이티와 처음 인사를 나눠볼까요?
            </h1>

            <p
              style={{
                margin: 0,
                color: "var(--text-soft)",
                lineHeight: 1.85,
                fontSize: "1rem",
              }}
            >
              회원가입 후 메이티의 대시보드, 감정 리포트, 보안 설정,
              개인 맞춤 메이트 설정을 사용할 수 있어요.
            </p>
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            <div
              style={{
                padding: "16px 18px",
                borderRadius: "20px",
                background: "#fff",
                border: "1px solid var(--line)",
              }}
            >
              <strong style={{ display: "block", marginBottom: "6px" }}>
                회원가입 후 가능한 것
              </strong>
              <span style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                대화 내역 확인, 감정 분석 리포트, 보안 설정, 개인 설정, 웹-앱 연동 관리
              </span>
            </div>

            <div
              style={{
                padding: "16px 18px",
                borderRadius: "20px",
                background: "#fff",
                border: "1px solid var(--line)",
              }}
            >
              <strong style={{ display: "block", marginBottom: "6px" }}>
                메이티의 핵심 가치
              </strong>
              <span style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                검색엔진처럼 답변만 하는 AI가 아니라, 먼저 관심을 보여주는 관계형 동반자 경험
              </span>
            </div>

            <div
              style={{
                padding: "16px 18px",
                borderRadius: "20px",
                background: "#fff",
                border: "1px solid var(--line)",
              }}
            >
              <strong style={{ display: "block", marginBottom: "6px" }}>
                프라이버시 제어
              </strong>
              <span style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                모니터링 ON/OFF, 기록 저장 여부, 알림 방식 등은 사용자가 직접 선택하도록 설계합니다.
              </span>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "36px 30px",
            borderRadius: "32px",
            background: "#fff",
            border: "1px solid var(--line)",
            boxShadow: "0 18px 44px rgba(104, 116, 200, 0.10)",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "1.6rem",
              letterSpacing: "-0.02em",
            }}
          >
            회원가입
          </h2>

          <p
            style={{
              margin: "0 0 24px",
              color: "var(--text-soft)",
              lineHeight: 1.8,
            }}
          >
            간단한 정보만 입력하면 바로 메이티를 시작할 수 있어요.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
            <Field
              label="이름"
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="이름을 입력해주세요"
            />

            <Field
              label="닉네임"
              type="text"
              name="nickname"
              value={form.nickname}
              onChange={onChange}
              placeholder="선택 입력 (비워도 됩니다)"
            />

            <Field
              label="이메일"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="user@matey.com"
            />

            <Field
              label="비밀번호"
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              placeholder="비밀번호를 입력해주세요"
            />

            <Field
              label="비밀번호 확인"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={onChange}
              placeholder="비밀번호를 다시 입력해주세요"
            />

            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                color: "var(--text-soft)",
                fontSize: "0.94rem",
                fontWeight: 600,
                lineHeight: 1.7,
              }}
            >
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={onChange}
                style={{ marginTop: "4px" }}
              />
              서비스 이용 및 기본적인 계정 정보 저장에 동의합니다.
            </label>

            {error && (
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(255, 127, 150, 0.12)",
                  color: "#e05e79",
                  fontWeight: 700,
                  fontSize: "0.92rem",
                }}
              >
                {error}
              </div>
            )}

            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? "가입 중..." : "회원가입 완료"}
            </button>

            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate("/")}
            >
              홈으로 돌아가기
            </button>
          </form>

          <div
            style={{
              marginTop: "22px",
              paddingTop: "18px",
              borderTop: "1px solid var(--line)",
              color: "var(--text-soft)",
              fontSize: "0.94rem",
            }}
          >
            이미 계정이 있으신가요?{" "}
            <Link
              to="/login"
              style={{ color: "var(--primary-dark)", fontWeight: 800 }}
            >
              로그인하러 가기
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

const Field = ({ label, ...props }) => {
  return (
    <label style={{ display: "grid", gap: "8px" }}>
      <span
        style={{
          color: "var(--text)",
          fontWeight: 800,
          fontSize: "0.95rem",
        }}
      >
        {label}
      </span>
      <input
        {...props}
        style={{
          width: "100%",
          minHeight: "54px",
          borderRadius: "16px",
          border: "1px solid var(--line)",
          padding: "0 16px",
          outline: "none",
          background: "#fff",
          color: "var(--text)",
          fontSize: "0.96rem",
        }}
      />
    </label>
  );
};

export default SignupPage;
