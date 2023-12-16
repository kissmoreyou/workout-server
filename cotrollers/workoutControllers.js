import Workout from "../models/Workout.js";
import handleErrors from "../errors/handleErrors.js";
const addWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(200).json(workout);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json(errors);
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
  } catch (error) {
    console.log(error.message);
  }
};

const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (error) {
    console.log(error.message);
  }
};

const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndUpdate(id, req.body);
    res.status(200).json(workout);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndDelete(id);
    res.status(200).json(workout);
  } catch (error) {
    console.log(error.message);
  }
};

export { addWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout };
