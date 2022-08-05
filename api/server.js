/** @format */

require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDB();

const app = express();

app.get("/", (req, res) => {
	res.json({ message: "API running..." });
});

// Global error handler
app.use((err, req, res, next) => {
	console.log(err.stack);
	console.log(err.name);
	console.log(err.code);

	res.status(500).json({
		message: "Something went wrong",
	});
});

app.use(express.json());

app.use("/api/posts", postRoutes);

const PORT = 4000 | process.env.PORT;
app.listen(PORT, () =>
	console.log(`Server running on port http://localhost:${PORT}`),
);
