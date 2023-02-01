import mongoose from "mongoose";

const transactionSchemea = new mongoose.Schema(
  {
    type: {
      type: String,
      requried: true,
    },
    amount: {
      type: String,
      required: true,
      min: 1,
    },
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("transction", transactionSchemea);
