const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal");
const User = require("../models/user");

const getGoal = asyncHandler(async (req, res) => {
	const goals = await Goal.find({ user: req.user.id });
	res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400).json({ message: "pleas add text field" });
	}
	const goals = await Goal.create({
		text: req.body.text,
		user: req.user.id,
	});
	res.status(200).json(goals);
});

const deleteGoal = asyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);
	if (!goal) {
		res.status(400).json({ message: "id not found" });
	}
	// Check for user
	if (!req.user) {
		res.status(400).json({ message: "user not found" });
	}
	// Make sure the logged in user matches the goal user
	if (goal.user !== req.user._id) {
		res.status(401).json({ message: "user not authorized" });
	}

	await goal.remove();
	res.status(200).json({ _id: req.params.id });
});

const updateGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const goal = await Goal.findById(id);
	if (!goal) {
		res.status(400).json({ message: "id not found" });
	}
	// Check for user
	if (!req.user) {
		res.status(400).json({ message: "user not found" });
	}
	// Make sure the logged in user matches the goal user
	if (req.user.id !== goal.user.toString()) {
		res.status(400).json({ message: "user not authorized" });
	}

	const updateGoal = await Goal.findByIdAndUpdate(id, req.body, {
		new: true,
	});
	res.status(200).json(updateGoal);
});

module.exports = {
	getGoal,
	setGoal,
	deleteGoal,
	updateGoal,
};
