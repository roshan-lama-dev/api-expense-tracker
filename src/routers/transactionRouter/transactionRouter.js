import express from "express";
import {
  createTransction,
  getTransaction,
} from "../models/transaction/TransactionModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await createTransction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "Transaction is created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create the transaction",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await getTransaction({ userId: authorization });

    res.json(result);
  } catch (error) {
    next(error);
  }
});
export default router;
