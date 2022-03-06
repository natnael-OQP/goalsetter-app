const express = require("express");
const router = express.Router();
// import controller
const {
	getGoal,
	setGoal,
	deleteGoal,
	updateGoal,
} = require("../controller/goalController");
const protect = require("../middleware/authMiddleware");

//  clean code
router.route("/").get(protect, getGoal).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

// router.get("/", getGoal);
// router.post("/", setGoal);
// router.delete("/:id", deleteGoal);
// router.put("/:id", updateGoal);

module.exports = router;
