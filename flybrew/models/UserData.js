const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserDataSchema = new Schema({
  checkIns: {
    type: Array,
    required: true
  },
  translations: {
    type: Array,
    required: true
  }
});

module.exports = UserData = mongoose.model("userData", UserDataSchema);
