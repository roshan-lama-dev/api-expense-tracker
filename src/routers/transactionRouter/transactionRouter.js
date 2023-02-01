import express from "express";
import {
  createTransction,
  deletManyTransaction,
  getTransaction,
} from "../../modals/TransactionModel/TransactionModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const result = await createTransction({
      ...req.body,
      userId: authorization,
    });

    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Transaction is created sucesfully",
        })
      : res.json({
          status: "error",
          message: "Cannot create the transaction",
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

router.delete("/", async (req, res, next) => {
  try {
    const deleteIds = await deletManyTransaction(req.body);
    console.log(deleteIds);
    res.json({
      status: "success",
      message: "Transaction deleted",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
