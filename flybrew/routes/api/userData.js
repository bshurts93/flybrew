const express = require("express");
// DB Config
const db = require("../../config/keys").mongoURI;

const router = express.Router();

const UserData = require("../../models/UserData");

router.post("/save", (req, res) => {
  UserData.findByIdAndUpdate(
    req.body.userID,
    {
      userName: req.body.userName,
      userID: req.body.userID,
      $push: { checkIns: req.body.checkIns }
    },
    { safe: true, upsert: true },
    function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    }
  );
});

// router.get("/checkins/:id", (req, res) => {
//   const userID = req.params.id;

//   UserData.findById(req.body.userID)
//     .then(doc => {
//       console.log(doc);
//       res.send(req.body);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });

router.get("/checkins/:id", function(req, res) {
  var id = req.params.id;
  UserData.findById(id).then(results => {
    res.json(results);
  });
});

module.exports = router;
