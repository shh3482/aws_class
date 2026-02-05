import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  return async () => {
    try {
      const response = await fetch("/api/v1/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        alert("로그아웃 성공");
        localStorage.removeItem("accessToken");
        setUser(null);
        navigate("/login");
				return;
      }
    } catch (e) {
      console.error(e);
    }
  };
}
