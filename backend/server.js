// Load HTTP module
const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const dbConnect = require("./database/dbConnect");
var cors = require("cors");
const port = process.env.PORT || 8000;

dbConnect();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(__dirname, "../", "frontend", "build", "index.html")
		)
	);
}

app.listen(port);
