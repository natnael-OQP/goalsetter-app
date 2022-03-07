// Load HTTP module
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const dbConnect = require("./database/dbConnect");
const port = process.env.PORT || 8000;

dbConnect();
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.listen(port);
