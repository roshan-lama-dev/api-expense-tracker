import { getUser } from "../models/user/UserModel.js";

export const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    // check
    const user = await getUser({ _id: authorization });
    console.log(user);
    if (user?._id) {
      return next();
    }
    res.json({
      status: "error",
      message: "Unathorized",
    });
  } catch (error) {
    next(error);
  }
};
