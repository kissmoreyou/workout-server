import mongoose from "mongoose";

const validateId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

export default validateId;
