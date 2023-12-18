import jwt from "jsonwebtoken";
import User from "../models/User.js";
const SECRET = process.env.SECRET;
const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    console.log("authorization error", authorization);
    return res
      .status(401)
      .json({ errors: { message: "Authorization token required" } });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, SECRET);
    req.user = await User.findById(id).select("_id");
    next();
  } catch (error) {
    res.status(401).json("Request is not authorized");
  }
};

export default requireAuth;
