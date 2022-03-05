// Load HTTP module
const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.get("/api/goals", function (req, res) {
	res.status(200).json({ name: "hello" });
});

app.listen(port);
