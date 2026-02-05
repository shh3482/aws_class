import { useLogout } from "./Logout";

export function MyPage(){

	const logout = useLogout();

	return (
		<div>
			<h1>마이페이지</h1>
			<button onClick={logout}>로그아웃</button>
		</div>
	)
}