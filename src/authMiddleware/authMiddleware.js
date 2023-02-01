import { getSingleUser } from "../modals/userModals/UserModel.js";

export const isAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const user = authorization
      ? await getSingleUser({ _id: authorization })
      : null;
    user?._id
      ? next()
      : res.json({
          status: "error",
          message: "Unathorized login",
        });
  } catch (error) {
    next(error);
  }
};
