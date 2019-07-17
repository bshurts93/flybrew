const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserDataSchema = new Schema({
  userID: {
    type: String
  },
  savedBeerIDs: {
    type: Array
  },
  checkIns: {
    type: Array
  },
  translations: {
    type: Array
  }
});

module.exports = UserData = mongoose.model("userData", UserDataSchema);
