import express from "express";
const router = express.Router();
import { loginUser, signupUser } from "../cotrollers/userControllers.js";
//login
router.post("/login", loginUser);
//sign up
router.post("/signup", signupUser);

export default router;
