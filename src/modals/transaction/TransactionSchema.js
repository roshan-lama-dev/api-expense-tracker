import mongoose, { Schema } from "mongoose";

const transactionSchemea = new mongoose.Schema(
  {
    type: {
      type: String,
      requied: true,
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
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

export default mongoose.model("transaction", transactionSchemea);
