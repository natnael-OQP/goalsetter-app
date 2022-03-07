// Load HTTP module
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
app.listen(port);
