import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
	const [username, setUser] = useState("");
	const [password, setPass] = useState("");
	let history = useNavigate();

	async function register(e) {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3000/register", {
					username,
					password,
				})
				.then(() => {
					history("/");
				});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<div className="p-8 block w-full">
				<form onSubmit={register}>
					<div className="flex flex-col gap-4">
						<h1 className="text-2xl">Create a new Account</h1>
						<input
							type="text "
							placeholder="username"
							className="py-2 px-4 outline-none bg-transparent border-2 border-zinc-700  rounded-lg w-1/3"
							value={username}
							onChange={(e) => {
								setUser(e.target.value);
							}}
							name="username"
						/>
						<input
							type="password"
							placeholder="password"
							className=" py-2 px-4 outline-none bg-transparent border-2 border-zinc-700  rounded-lg w-1/3"
							value={password}
							onChange={(e) => {
								setPass(e.target.value);
							}}
							name="password"
						/>
						<input type="submit" value="Create User" className="cursor-pointer py-2 w-28 bg-blue-500 rounded-lg " />
					</div>
				</form>
			</div>
		</>
	);
}
