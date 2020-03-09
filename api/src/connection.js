const mongoose = require("mongoose");

const User = require("./User.model");

const connection = "mongodb://192.168.99.100:27017/mongo-test";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
