const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");
const ba = require("../beerme-beeradvocate-api.js");

const googleApiKey = process.env.GOOGLE_API_KEY;

let getBeersForBrewery = brewery => {
  return new Promise((resolve, reject) => {
    ba.beerSearch(brewery, beers => {
      let beerList = JSON.parse(beers);
      beerList = beerList.filter(beer => {
        return brewery === beer.brewery_name && beer.retired === false;
      });
      resolve(beerList);
    });
  });

  // Add reject code?
};

router.get("/search", (req, res) => {
  let searchString = `${req.query.q} breweries`;
  let googleSearchQuery = querystring.stringify({
    query: searchString,
    key: googleApiKey
  });
  googleSearchQuery =
    "https://maps.googleapis.com/maps/api/place/textsearch/json?" +
    googleSearchQuery;
  axios
    .get(googleSearchQuery)
    .then(response => {
      let breweries = response.data.results.map(result => {
        let brewery = {};
        brewery.name = result.name;
        brewery.address = result.formatted_address;
        brewery.latitude = result.geometry.location.lat;
        brewery.longitude = result.geometry.location.lng;
        return brewery;
      });
      return breweries;
    })
    .then(breweries => {
      let breweryPromises = breweries.map(brewery => {
        return getBeersForBrewery(brewery.name);
      });
      Promise.all(breweryPromises)
        .then(breweryBeerList => {
          breweries.map((brewery, index) => {
            brewery.beers = breweryBeerList[index];
            return brewery;
          });
          res.json(breweries);
        })
        .catch(error => {
          console.log(error);
        });
      //res.json(breweries);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
