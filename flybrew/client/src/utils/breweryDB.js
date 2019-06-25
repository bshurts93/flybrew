import axios from "axios";

export default {
  getBeers(query) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "http://api.brewerydb.com/v2/locations/?key=ab91f8c08c9f4df4411ec21a266438c4&countryIsoCode=de";

    axios
      .get(proxyUrl + url)
      .then(res => {
        const outputData = [];
        for (var i = 0; i < 10; i++) {
          outputData.push(res.data.data[i].brewery.name);
        }
        console.log(outputData);
        return outputData;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
