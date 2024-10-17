import { useState } from "react";
import Post from "./Post";
import axios from "axios";

export default function Index() {
	const [data, setData] = useState([]);
	const [show, setShow] = useState(false);

	function update() {
		try {
			axios.get("http://localhost:3000/", {}).then((res) => {
				setData(res.data);
				setShow(true);
			});
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<div className="p-8 flex flex-wrap w-full">
				{!show ? (
					<div className="w-full justify-center flex">
						<input type="submit" value="Show all Posts" onClick={update} className="py-2 h-10 w-28 bg-yellow-700 inline-block rounded-lg cursor-pointer" />
					</div>
				) : (
					<>
						{data.map((val, index) => (
							<Post key={index} url={val.url} title={val.title} content={val.content} user={val.user} time={val.time} show={setShow} />
						))}
					</>
				)}
				{show ? (
					<div className="w-full justify-center flex">
						<input type="submit" value="Hide all Posts" onClick={() => setShow(false)} className="py-2 w-28 bg-yellow-700 inline-block rounded-lg cursor-pointer h-10" />
					</div>
				) : null}
			</div>
		</>
	);
}
