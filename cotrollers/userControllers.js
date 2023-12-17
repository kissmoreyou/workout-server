import User from "../models/User.js";
import userErrors from "../errors/userErrors.js";
import createToken from "../utils/createToken.js";
import bcrypt from "bcrypt";
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("Email or password is incorrect!");
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw new Error("Email or password is incorrect!");
    }
    const token = await createToken(user._id);
    res.status(200).json({ email: user.email, token });
  } catch (error) {
    console.log(error);
    res.status(401).json(error.message);
  }
};

const signupUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    //create token
    const token = await createToken(user._id);
    res.status(200).json({ email: user.email, token });
  } catch (error) {
    const errors = userErrors(error);
    res.status(400).json(errors);
  }
};

export { loginUser, signupUser };
