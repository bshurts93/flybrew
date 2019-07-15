const express = require("express");
const router = express.Router();

const UserData = require("../../models/UserData");

router.post("/testing", (req, res) => {
  var data = new UserData({
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
