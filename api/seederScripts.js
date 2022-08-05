/** @format */

require("dotenv").config();

const connectDB = require("./config/db");

const postsData = require("./data/posts");

const Post = require("./models/Post");

connectDB();

const importData = async () => {
	try {
		await Post.deleteMany({});

		await Post.insertMany(postsData);

		console.log("Data import success 🆗");
	} catch (error) {
		console.log("Data import failed ⚠️", error);
		process.exit(1);
	}
};

importData();
