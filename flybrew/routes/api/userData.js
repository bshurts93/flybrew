const express = require("express");
// DB Config
const db = require("../../config/keys").mongoURI;

const router = express.Router();

const UserData = require("../../models/UserData");

router.post("/testing", (req, res) => {
  const data = new UserData({
    userID: req.body.userID,
    checkIns: req.body.checkIns,
    translations: req.body.translations,
    savedBeerIDs: req.body.savedBeerIDs
  });

  data
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
