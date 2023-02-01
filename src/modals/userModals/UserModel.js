import UserSchema from "./UserSchema.js";

// create user
export const createUser = (userObject) => {
  return UserSchema(userObject).save();
};
// getUser
export const getSingleUser = (filter) => {
  return UserSchema.findOne(filter);
};
// updateUser
export const updateUser = (filter, updateObj) => {
  return UserSchema.findByIdAndUpdate(filter, updateObj);
};
// deleteUsersd
export const deleteUserById = (_id) => {
  return UserSchema.deleteMany(_id);
};
