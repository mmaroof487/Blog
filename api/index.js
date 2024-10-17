const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/User");
const postModel = require("./models/Post");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/blog");

const salt = bcrypt.genSaltSync(10);
// const secret = "dsaflbsafghbcxabhuagdh636498qwy";

app.get("/", async (req, res) => {
	const posts = await postModel.find();
	// console.log(posts);
	res.json(posts);
});

app.post("/register", cors(), async (req, res) => {
	const { username, password } = req.body;
	const createdUser = await userModel.create({
		username,
		password: bcrypt.hashSync(password, salt),
	});
	res.json(createdUser);
});

app.post("/login", cors(), async (req, res) => {
	const { username, password } = req.body;
	const found = await userModel.findOne({ username });
	if (found) {
		const result = bcrypt.compareSync(password, found.password);
		if (result) {
			// let token = jwt.sign({ username, id: found._id }, secret);
			res.json("ok");
		} else {
			res.json("notok");
		}
	} else {
		res.json("notok");
	}
});

app.post("/create", cors(), async (req, res) => {
	const { url, title, content, user } = req.body;
	const post = await postModel.create({
		url,
		title,
		content,
		user,
		// time,
	});
	res.json(post);
});

app.post("/delete", cors(), async (req, res) => {
	const { url } = req.body;
	await postModel.findOneAndDelete({ url });
});

app.listen(3000);
