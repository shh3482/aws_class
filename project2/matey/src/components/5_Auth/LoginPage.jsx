import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading, isAuthenticated, isAdmin } = useAuth();

  const [form, setForm] = useState({
    email: localStorage.getItem("savedEmail") || "",
    password: "",
    remember: true,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate(isAdmin ? "/admin" : "/dashboard", { replace: true });
    }
  }, [isAuthenticated, isAdmin, navigate]);

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

    if (!form.email.trim()) {
      setError("이메일을 입력해주세요.");
      return;
    }

    if (!form.password.trim()) {
      setError("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const result = await login({
        email: form.email,
        password: form.password,
      });

      if (form.remember) {
        localStorage.setItem("savedEmail", form.email);
      } else {
        localStorage.removeItem("savedEmail");
      }

      if (result?.success) {
        navigate(result.user.role === "ADMIN" ? "/admin" : "/dashboard", {
          replace: true,
        });
      }
    } catch (err) {
      console.error(err);
      setError("로그인 중 문제가 발생했어요. 다시 시도해주세요.");
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
          width: "min(1100px, 100%)",
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
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
              LOGIN
            </div>

            <h1
              style={{
                margin: "0 0 12px",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.18,
                letterSpacing: "-0.03em",
              }}
            >
              메이티와 다시 연결될 시간이에요
            </h1>

            <p
              style={{
                margin: 0,
                color: "var(--text-soft)",
                lineHeight: 1.85,
                fontSize: "1rem",
              }}
            >
              웹 대시보드에서 대화 기록과 감정 리포트를 확인하고,
              메이티의 설정을 이어서 관리할 수 있어요.
            </p>
          </div>

          <div style={{ display: "grid", gap: "14px", marginBottom: "18px" }}>
            <div
              style={{
                padding: "16px 18px",
                borderRadius: "20px",
                background: "#fff",
                border: "1px solid var(--line)",
              }}
            >
              <strong style={{ display: "block", marginBottom: "6px" }}>일반 사용자</strong>
              <span style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                예시 이메일: <b>user@matey.com</b>
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
              <strong style={{ display: "block", marginBottom: "6px" }}>관리자 데모 로그인</strong>
              <span style={{ color: "var(--text-soft)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                이메일에 <b>admin</b> 이 포함되면 관리자 권한으로 로그인됩니다.
                <br />
                예시: <b>admin@matey.com</b>
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
            로그인
          </h2>

          <p
            style={{
              margin: "0 0 24px",
              color: "var(--text-soft)",
              lineHeight: 1.8,
            }}
          >
            메이티 계정으로 로그인하고 나만의 대시보드를 확인해보세요.
          </p>

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "16px" }}>
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

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "var(--text-soft)",
                fontSize: "0.94rem",
                fontWeight: 600,
              }}
            >
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={onChange}
              />
              이메일 기억하기
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
              {loading ? "로그인 중..." : "로그인"}
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
            계정이 없으신가요?{" "}
            <Link
              to="/signup"
              style={{ color: "var(--primary-dark)", fontWeight: 800 }}
            >
              회원가입하러 가기
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

export default LoginPage;
