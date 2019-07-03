const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/beer", (req, res) => {
  axios
    .get(
      "https://api.untappd.com/v4/search/beer?client_id=" +
        process.env.UNTAPPD_CLIENT_ID +
        "&client_secret=" +
        process.env.UNTAPPD_CLIENT_SECRET +
        "&q=" +
        "czech"
    )
    .then(response => {
      const data = response.data.response.beers;
      res.send(data);
    });
});

module.exports = router;
