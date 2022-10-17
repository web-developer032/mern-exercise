const express = require("express");
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.route("/").get(getWorkouts).post("/", createWorkout);

router.route(":id").get(getWorkout).delete("/:id", deleteWorkout).patch("/:id", updateWorkout);

module.exports = router;
