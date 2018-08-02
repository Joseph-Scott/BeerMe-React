const fs = require("fs");
const querystring = require("querystring");
const axios = require("axios");
const ba = require("./beerme-beeradvocate-api.js");

let breweryNames;

fs.readFile("beerme-brewery-names.json", (err, data) => {
    if (err) throw err;
    breweryNames = JSON.parse(data);
});

function addBreweryToCorrectionList(brewery) {
    // Search the breweryNames (correction list) object to see if
    // there is an entry for the brewery passed to the function...
    let breweryNameSearchResults = breweryNames.find(item => {
        return (
            item.googleName === brewery.name ||
            item.beerAdvocateName === brewery.name
        );
    });

    // If the brewery is not in the list, add it, log the addition
    // to the console and save it to the JSON file
    if (breweryNameSearchResults === undefined) {
        breweryNames.push({
            googleName: brewery.name,
            beerAdvocateName: "",
            address: brewery.address
        });
        fs.writeFile(
            "beerme-brewery-names.json",
            JSON.stringify(breweryNames, 0, 4),
            err => {
                if (err) throw err;
                console.log(
                    `Brewery correction list (beerme-brewery-name.json) updated with "${
                        brewery.name
                    }"`
                );
            }
        );
    }
}

module.exports.getUntappdBreweryDetails = brewery => {
    return new Promise((resolve, reject) => {
        let untappdSearchQuery = querystring.stringify({
            q: brewery.name,
            client_id: process.env.UNTAPPD_CLIENT_ID,
            client_secret: process.env.UNTAPPD_CLIENT_SECRET
        });
        untappdSearchQuery =
            "https://api.untappd.com/v4/search/brewery?" + untappdSearchQuery;

        axios
            .get(untappdSearchQuery)
            .then(response => {
                // let breweryData = JSON.parse(
                //     response.data.response.brewery.items
                // );
                let breweryData = response.data.response.brewery.items;
                if (breweryData.length == 0) {
                    console.log(
                        `No brewery information found for ${brewery.name}`
                    );
                } else {
                    let untappdBreweryData = breweryData[0].brewery;

                    brewery.untappd_id = untappdBreweryData.brewery_id;
                    brewery.untappd_page_url =
                        untappdBreweryData.brewery_page_url;
                    brewery.untappd_label = untappdBreweryData.brewery_label;
                    brewery.country = untappdBreweryData.country_name;
                    brewery.city = untappdBreweryData.location.brewery_city;
                    brewery.state = untappdBreweryData.location.brewery_state;
                }

                //console.log(breweryData);
                resolve(brewery);
            })
            .catch(error => {
                console.log(error);
                reject(`Unable to get brewery details for ${brewery.name}`);
            });
    });
};

module.exports.getBeersForBrewery = brewery => {
    return new Promise((resolve, reject) => {
        try {
            ba.beerSearch(brewery.beerAdvocateName, beers => {
                let beerList = JSON.parse(beers);
                beerList = beerList.filter(beer => {
                    return (
                        brewery.beerAdvocateName === beer.brewery_name &&
                        beer.retired === false
                    );
                });
                if (beerList.length === 0) {
                    addBreweryToCorrectionList(brewery);
                }
                brewery.beers = beerList;
                resolve(brewery);
            });
        } catch (error) {
            reject(`Failed to get beers for brewery: ${brewery.name}`);
        }
    });
};

module.exports.getCorrectBreweryName = brewery => {
    // Search the breweryNames (correction list) object to see if
    // there is an entry for the brewery passed to the function as well as
    // a corrected name for BeerAdvocate...
    let correctBreweryNameObject = breweryNames.find(item => {
        return item.googleName === brewery.name && item.beerAdvocateName != "";
    });

    // If there is, log the correction to the console and return the correct name,
    // otherwise return the original name
    if (correctBreweryNameObject != undefined) {
        console.log(
            `Correction found for brewery name: "${brewery.name}" --> "${
                correctBreweryNameObject.beerAdvocateName
            }"`
        );
        return correctBreweryNameObject.beerAdvocateName;
    } else {
        return brewery.name;
    }
};
