const mongoose = require("mongoose");
const User = require("./User.model");
const host = process.env.HOST;
const connection = `mongodb://${process.env.HOST}:27017/mongo-test`;

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
