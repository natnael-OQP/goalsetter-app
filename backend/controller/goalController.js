const getGoal = (req, res) => {
	res.status(200).json({ name: "get goals" });
};

const setGoal = (req, res) => {
	res.status(200).json({ name: "set goals" });
};

const deleteGoal = (req, res) => {
	res.status(200).json({ name: `delete goal ${req.params.id}` });
};

const updateGoal = (req, res) => {
	res.status(200).json({ name: `update goal ${req.params.id}` });
};

module.exports = {
	getGoal,
	setGoal,
	deleteGoal,
	updateGoal,
};
