import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbcon from "./database/dbcon.js";
import workoutRouter from "./routes/workoutRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const URI = process.env.URI;
const PORT = process.env.PORT || 8000;

//middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Good morning developer!");
});

app.use("/api/v1/workouts", workoutRouter);
app.use("/api/v1/users", userRouter);

//start server
const startServer = async () => {
  try {
    await dbcon(URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} ...`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
startServer();
