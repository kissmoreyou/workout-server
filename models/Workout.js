import mongoose from "mongoose";
const WorkoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title of workout is required!"],
      minlength: [6, "Title length must be atleast 6 characters!"],
    },
    weight: {
      type: Number,
      required: [true, "Weight is required!"],
    },
    reps: { type: Number, required: [true, "Reps is required!"] },
    userID: { type: String, required: true },
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", WorkoutSchema);
export default Workout;
