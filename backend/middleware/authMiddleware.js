const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const protect = asyncHandler(async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			//  get token from header
			token = req.headers.authorization.split(" ")[1];
			// verify token
			const decode = jwt.decode(token, process.env.JWT);
			req.user = await User.findById(decode.id).select("-password");
			next();
		} catch (error) {
			res.status(400).json({
				message: "Not Authorized",
			});
		}
	} else {
		res.status(400).json({
			message: "Not Authorized, no token ",
		});
	}
});

module.exports = protect;
