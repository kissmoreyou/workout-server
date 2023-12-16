import express from "express";
const router = express.Router();
import {
  addWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} from "../cotrollers/workoutControllers.js";

//add workout
router.post("/", addWorkout);

//get workouts
router.get("/", getWorkouts);

//get workout
router.get("/:id", getWorkout);

//update workout
router.patch("/:id", updateWorkout);

//delete workout
router.delete("/:id", deleteWorkout);

export default router;
