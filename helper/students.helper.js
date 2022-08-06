const joi = require("joi");
const db = require("../shared/mongodb");
const ObjectId = require("mongodb").ObjectId;

const productSchema = joi.object({
  name: joi.string().required(),
  rollno: joi.string().required(),
  marks: joi.number().required(),
});

const helper = {
  validate(post) {
    try {
      return productSchema.validateAsync(post);
    } catch ({ details: [{ message }] }) {
      throw new Error(message);
    }
  },

  find() {
    return db.students.find().toArray();
  },
  findById(_id) {
    return db.students.findOne({ _id: ObjectId(_id) });
  },
  create(post) {
    return db.students.insertOne(post);
  },
  update({ _id, ...post }) {
    return db.students.findOneAndUpdate(
      { _id: ObjectId(_id) },
      { $set: post },
      { returnDocument: "after" }
    );
  },
  deleteById(_id) {
    return db.students.deleteOne({ _id: ObjectId(_id) });
  },
};

module.exports = helper;
