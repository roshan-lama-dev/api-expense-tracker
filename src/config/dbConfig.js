import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const mongoUrl = "mongodb://127.0.0.1:27017/expenseV2";

    mongoose.set("strictQuery", true);
    const connect = mongoose.connect(mongoUrl);
    connect && console.log("Mongo Db connected");
  } catch (error) {
    console.log(error.message, "from mongo  ");
  }
};
