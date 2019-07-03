const express = require("express");
const router = express.Router();

const UserData = require("../../models/UserData");

router.post("/testing", (req, res) => {
  var data = new UserData({
    checkIns: ["TEST", "TEST2"],
    translations: ["TRANSLATION", "TRANSLATION2"]
  });

  data
    .save()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
