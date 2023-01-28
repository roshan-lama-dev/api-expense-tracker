import experss from "express";
import {
  createUser,
  getSingleUser,
} from "../../modals/userModals/UserModel.js";

const router = experss.Router();

// post method

router.all("/", (req, res, next) => {
  console.log("All router is touched");
  next();
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "Created new user ",
        })
      : res.json({
          status: "error",
          message: "Cannot create new users",
        });
  } catch (error) {
    next(error);

    if (error.message.includes("The message")) {
      error.message = "Please enter a new email address";
    }
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const result = await getSingleUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "User Found",
          result: {
            id: result._id,
            name: result.name,
          },
        })
      : res.json({
          status: "error",
          message: "User is not registered",
        });
    console.log(result);
  } catch (error) {
    next(error);
  }
});

export default router;
