import axios from "axios";

export default {
  getBeers(query) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "http://api.brewerydb.com/v2/beers/?key=ab91f8c08c9f4df4411ec21a266438c4&name=" +
      query;

    axios
      .get(proxyUrl + url)
      .then(res => {
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
