const express = require("express");
// DB Config
const db = require("../../config/keys").mongoURI;

const router = express.Router();

const UserData = require("../../models/UserData");

router.post("/testing", (req, res) => {
  console.log(req.body.checkIns);
  UserData.findByIdAndUpdate(
    req.body.userID,
    { $push: { checkIns: req.body.checkIns } },
    { safe: true, upsert: true },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        //do stuff
        console.log("Success!");
      }
    }
  );
  //   const data = new UserData({
  //     userID: req.body.userID,
  //     checkIns: req.body.checkIns,
  //     translations: req.body.translations,
  //     savedBeerIDs: req.body.savedBeerIDs
  //   });

  //   data
  //     .save()
  //     .then(data => res.json(data))
  //     .catch(err => console.log(err));
});

module.exports = router;
