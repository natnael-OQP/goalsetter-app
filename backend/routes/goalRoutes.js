const express = require("express");
const router = express.Router();
// import controller
const {
	getGoal,
	setGoal,
	deleteGoal,
	updateGoal,
} = require("../controller/goalController");

//  clean code
router.route("/").get(getGoal).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// router.get("/", getGoal);
// router.post("/", setGoal);
// router.delete("/:id", deleteGoal);
// router.put("/:id", updateGoal);

module.exports = router;
