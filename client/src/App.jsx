import { useState } from "react";
import Layout from "./Layout";
import Create from "./pages/Create";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [data, setData] = useState("");

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} data={data} />}>
					<Route index element={<Index />} />
					<Route path="/create" element={loggedIn ? <Create data={data} /> : <Login setLogged={setLoggedIn} setData={setData} />} />
					<Route path="/login" element={<Login setLogged={setLoggedIn} setData={setData} />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
