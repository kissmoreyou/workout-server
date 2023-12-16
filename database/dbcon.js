import mongoose from "mongoose";
const dbcon = async (URI) => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};

export default dbcon;
