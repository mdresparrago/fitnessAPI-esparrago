const express = require("express");
const workoutController = require("../controllers/workout");

const {verify} = require("../auth");

const router = express.Router();


router.post("/", verify, workoutController.addWorkout);
router.get("/getMyWorkouts/", verify, workoutController.getWorkoutById);
router.patch("/updateWorkout/:id", verify, workoutController.updateWorkout);
router.delete("/deleteWorkout/:id", verify, workoutController.deleteWorkout);
router.patch("/completeWorkoutStatus/:id", verify, workoutController.completeWorkoutStatus);

module.exports = router;