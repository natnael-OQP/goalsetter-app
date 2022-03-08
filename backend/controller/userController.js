const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
// model
const User = require("../models/user");

// desc register user
// route /api/users
// access public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400).json({ message: "fill in required fields" });
	}
	// check if user exists
	const isExist = await User.findOne({ email });
	if (isExist) {
		res.status(400).json({ message: "email address already exists" });
	}
	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// desc:  user Authorization
// route: /api/users/login
// access: public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	// check user email
	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: getToken(user._id),
		});
	} else {
		res.status(400).json({ message: "Invalid email address or password" });
	}
});

// desc:  get User Data
// route: /api/users/me
// access: Private
const getMe = asyncHandler(async (req, res) => {
	res.status(200).json(req.user);
});

// generate  token
const getToken = (id) => {
	return (token = jwt.sign({ id }, process.env.JWT, { expiresIn: "30d" }));
};

module.exports = {
	registerUser,
	loginUser,
	getMe,
};
