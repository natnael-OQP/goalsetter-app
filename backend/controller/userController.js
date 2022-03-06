const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "register user" });
});

const loginUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "login user" });
});

const getMe = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "get me" });
});

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
