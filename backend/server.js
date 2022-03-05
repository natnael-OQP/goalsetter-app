// Load HTTP module
const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
// app.use(express.urlencoded());

app.use("/api/goals", require("./routes/goalRoutes"));
app.listen(port);
