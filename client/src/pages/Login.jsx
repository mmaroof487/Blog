import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(prop) {
	const [username, setUser] = useState("");
	const [password, setPassword] = useState("");
	let history = useNavigate();

	async function login(e) {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3000/login", {
					username,
					password,
				})
				.then((res) => {
					if (res.data == "ok") {
						history("/");
						prop.setData(username);
						prop.setLogged(true);
					}
				});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<div className="p-8  w-full">
				<form action="" method="post" onSubmit={login}>
					<div className="flex flex-col gap-4">
						<h1 className="text-2xl">Log into your Account </h1>
						<input
							type="text "
							placeholder="username"
							className="py-2 px-4 outline-none bg-transparent border-2 border-zinc-700  rounded-lg w-1/3"
							value={username}
							onChange={(e) => {
								setUser(e.target.value);
							}}
						/>
						<input
							type="password"
							placeholder="password"
							className="py-2 px-4 outline-none bg-transparent border-2 border-zinc-700  rounded-lg w-1/3"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<input type="submit" value="Login" className="py-2 w-24 bg-blue-500 rounded-lg  cursor-pointer" />
					</div>
				</form>
			</div>
		</>
	);
}
