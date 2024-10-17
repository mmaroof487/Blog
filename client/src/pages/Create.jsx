import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create(prop) {
	const user = prop.data;
	const [url, setUrl] = useState("");
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const history = useNavigate();

	async function create(e) {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:3000/create", {
					url,
					title,
					content,
					user,
				})
				.then(() => {
					history("/");
				});
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<div className="p-8 w-full">
			<div className="text-lg font-bold mb-4">Create a New Post, {user}</div>
			<form action="/create" method="post" onSubmit={create}>
				<div className="flex flex-col gap-4">
					<input
						type="text"
						value={url}
						onChange={(e) => {
							setUrl(e.target.value);
						}}
						placeholder="Image URL"
						name="img"
						id="img"
						className=" py-2 px-4 rounded-lg outline-none bg-transparent border-2 border-zinc-600 w-1/3"
					/>
					<input
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
						placeholder="Title"
						name="title"
						id="title"
						className=" py-2 px-4 rounded-lg outline-none bg-transparent border-2 border-zinc-600 w-1/3"
					/>
					<textarea
						name="content"
						value={content}
						onChange={(e) => {
							setContent(e.target.value);
						}}
						placeholder="Your content goes here"
						id="content"
						className="h-28 resize-none py-2 px-4 rounded-lg outline-none bg-transparent border-2 border-zinc-600 w-1/3"></textarea>
					<input type="submit" value="Create Post" className="py-2 w-28 bg-yellow-700 inline-block rounded-lg cursor-pointer" />
				</div>
			</form>
		</div>
	);
}
