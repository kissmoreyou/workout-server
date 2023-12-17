import jwt from "jsonwebtoken";

const createToken = async (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};

export default createToken;
