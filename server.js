import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import { dbConnection } from "./src/config/dbConfig.js";
const PORT = process.env.PORT || 5000;
import userRouter from "./src/routers/userRotuers/userRotuer.js";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

dbConnection();
app.use("/api/v1/user", userRouter);
app.use("*", (req, res, next) => {
  const error = {
    code: " 404",
    message: "Page NOt found",
  };
  next(error);
});

app.use((error, req, res, next) => {
  try {
    const errorCode = error.code || 500;
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`YOur server is running at http://localhost:${PORT}`);
});
