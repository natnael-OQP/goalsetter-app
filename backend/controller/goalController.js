const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal");

const getGoal = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400).json({ error: "pleas add text field" });
	}
	const goals = await Goal.create(req.body);
	res.status(200).json(goals);
});

const deleteGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const goal = await Goal.findById(id);
	if (!goal.text) {
		res.status(400).json({ error: "id not found" });
	}
	await Goal.findByIdAndDelete(id);
	res.status(200).json({ _id: id });
});

const updateGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const updatedId = await Goal.findById(id);
	if (!updatedId) {
		res.status(400).json({ error: "id not found" });
	}
	const goal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
	res.status(200).json(goal);
});

module.exports = {
	getGoal,
	setGoal,
	deleteGoal,
	updateGoal,
};
