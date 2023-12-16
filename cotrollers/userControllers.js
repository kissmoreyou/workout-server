import User from "../models/User.js";
import userErrors from "../errors/userErrors.js";
const loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const signupUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    const errors = userErrors(error);
    res.status(400).json(errors);
  }
};

export { loginUser, signupUser };
