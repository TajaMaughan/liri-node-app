require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var input = process.argv;





if (input[2] === "concert-this") {
    concertThis();
} else if (input[2] === "spotify-this-song") {
    spotifyThisSong();
} else if (input[2] === "movie-this") {
    console.log(3);
} else if (input[2] === "do-what-it-says") {
    console.log(4);
} else {
    console.log("I don't understand");
}

function concertThis() {
    var artist = process.argv.slice(3).join(" ");
    console.log(artist);
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (response) {
        if (!response.data) {
            console.log("No data returned.")
        } else {
            var result = response.data[0];
            console.log(result.venue.name);
            console.log(result.venue.city + ", " + result.venue.region + ", " + result.venue.country);
            console.log(moment(result.datetime).format("MM/DD/YYYY"));
        }
    })
}

function spotifyThisSong() {
    var song = process.argv.slice(3).join(" ");
    console.log(song);
    spotify.search({ type: 'track', query: song, limit: 1}, function(err,data) {
        if(err) {
            return console.log('Error occured: ' + err);
        }
        var result = data.tracks.items;
        console.log(result.album);
    })
}

function movieThis() {
    var movie = process.argv.slice(3).join(" ");
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, response) {
        if (err) {
            console.log("error");
        } else {

        }
    })
}