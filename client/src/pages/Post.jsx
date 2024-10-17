import axios from "axios";

export default function Post(prop) {
	const { url, title, content, user, time } = prop;

	async function del() {
		try {
			await axios
				.post("http://localhost:3000/delete", {
					url,
					content,
				})
				.then(() => {
					prop.setShow(false);
				});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div className="flex gap-6 mb-8  w-1/2 h-64">
			<img className="w-1/3 object-cover" src={url} alt="" />
			<div className="flex flex-col justify-between w-1/2">
				<div>
					<h2 className="text-2xl mb-4">{title}</h2>
					<h2 className="">{content}</h2>
				</div>
				<div className="text-sm flex justify-between">
					<div>
						<a onClick={del} className="text-red-600 cursor-pointer">
							Delete
						</a>
					</div>
					<div>
						<span className="font-bold text-green-300">{user}</span>
						<time className="text-zinc-500"> {time} </time>
					</div>
				</div>
			</div>
		</div>
	);
}
