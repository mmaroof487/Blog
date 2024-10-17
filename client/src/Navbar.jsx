import { Link, useNavigate } from "react-router-dom";

export default function Navbar(prop) {
	const history = useNavigate();

	function logout() {
		history("/");
		prop.setLoggedIn(false);
	}

	return (
		<nav className="bg-zinc-900 w-full h-14 flex justify-between text-white items-center px-8 text-lg font-semibold">
			{prop.loggedIn ? (
				<>
					<div>
						<Link to="/">My Blog </Link>
						<div className="text-sm text-zinc-500">{prop.data}</div>
					</div>
					<div className="flex gap-4">
						<Link to="/create">Create new post</Link>
						<div className="cursor-pointer bg-transparent" onClick={logout}>
							Logout
						</div>
					</div>
				</>
			) : (
				<>
					<div>
						<Link to="/">My Blog</Link>
					</div>
					<div className="flex gap-4">
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</div>
				</>
			)}
		</nav>
	);
}
