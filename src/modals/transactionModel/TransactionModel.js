import TransactionSchema from "./TransactionSchema.js";

export const createTransction = (obj) => {
  return TransactionSchema(obj).save();
};

export const getTransaction = (filter) => {
  return TransactionSchema.find(filter);
};

// export const deleteUserById = (_id) => {
//   return TransactionSchema.deleteMany(_id);
// };

export const deletManyTransaction = (idArray) => {
  return TransactionSchema.deleteMany({
    _id: {
      $in: idArray,
    },
  });
};
