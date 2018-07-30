const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");
const beerme = require("../beerme.js");

router.get("/search", (req, res, next) => {
    // Build the Google Places API search query
    let googleSearchQuery = querystring.stringify({
        query: `${req.query.q} breweries`,
        key: process.env.GOOGLE_API_KEY
    });
    googleSearchQuery =
        "https://maps.googleapis.com/maps/api/place/textsearch/json?" +
        googleSearchQuery;
    // Search Google for breweries at the specified location and create
    // a list of 'brewery' objects storing the results
    axios
        .get(googleSearchQuery)
        .then(response => {
            let breweries = response.data.results.map(result => {
                let brewery = {};
                brewery.name = result.name;
                brewery.beerAdvocateName = result.name;
                brewery.address = result.formatted_address;
                brewery.latitude = result.geometry.location.lat;
                brewery.longitude = result.geometry.location.lng;
                return brewery;
            });
            return breweries;
        })
        // This section feeds the brewery names to the beeradvocate-api
        // to get a list of beers for each brewery
        .then(breweries => {
            breweries.forEach(brewery => {
                brewery.beerAdvocateName = beerme.getCorrectBreweryName(
                    brewery
                );
            });
            let breweryPromises = breweries.map(brewery => {
                return beerme.getBeersForBrewery(brewery);
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
                    res.json({
                        status: "error",
                        message: "Failed to retrieve beer data."
                    });
                });
            //res.json(breweries);
        })
        .catch(error => {
            console.log(error);
            res.json({
                status: "error",
                message: "Failed to retrieve brewery data."
            });
        });
});

module.exports = router;
