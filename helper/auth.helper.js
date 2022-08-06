const joi = require("joi");
const { ObjectId } = require("mongodb");
const db = require("../shared/mongodb");

const signUpSchema = joi.object({
  fullname: joi.string().required(),
  contactnumber: joi.number().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).max(20).required(),
  cPassword: joi.ref("password"),
});

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(3).max(20).required(),
});

const helper = {
  validateSignUpSchema(user) {
    try {
      return signUpSchema.validateAsync(user);
    } catch ({ details: [{ message }] }) {
      throw new Error(message);
    }
  },
  validateLoginSchema(user) {
    try {
      return loginSchema.validateAsync(user);
    } catch ({ details: [{ message }] }) {
      throw new Error(message);
    }
  },
  findByEmailId(email) {
    return db.users.findOne({ email });
  },
  findById(_id) {
    return db.users.findOne({ _id: ObjectId(_id) });
  },
  createUser(user) {
    return db.users.insertOne(user);
  },
};

module.exports = helper;
