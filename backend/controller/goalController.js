const asyncHandler = require("express-async-handler");

const getGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ name: "get goals" });
});

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body?.text) {
		res.status(400).json({ error: "pleas add text field" });
	}
	res.status(200).json({ name: "set goals" });
});

const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ name: `delete goal ${req.params.id}` });
});

const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ name: `update goal ${req.params.id}` });
});

module.exports = {
	getGoal,
	setGoal,
	deleteGoal,
	updateGoal,
};
