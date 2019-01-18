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
    movieThis();
} else if (input[2] === "do-what-it-says") {
    doWhatItSays();
} else {
    console.log("I don't understand");
}

function concertThis() {
    var artist = process.argv.slice(3).join(" ");
    let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (response) {
        //if (err) {
            //return console.log('Error occured: ' + err);
        //} else {
            var result = response.data[0];
            console.log("Artist: " + artist);
            console.log("Venue: " + result.venue.name);
            console.log("Location: " + result.venue.city + ", " + result.venue.region + ", " + result.venue.country);
            console.log("Date: " + moment(result.datetime).format("MM/DD/YYYY"));
        //}
    })
}

function spotifyThisSong() {
    var song = process.argv.slice(3).join(" ");
    spotify.search({ type: 'track', query: song }, function (err, response) {
        if (err) {
            return console.log('Error occured: ' + err);
        } else {
            var result = response.tracks.items[0];
            console.log("Artist: " + result.album.artists[0].name);
            console.log("Song: " + result.name);
            console.log("Preview URL: " + result.preview_url);
            console.log("Album: " + result.album.name);
        }
    })
}

function movieThis() {
    var movie = process.argv.slice(3).join(" ");
    let queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(
        function (response) {
            var result = response.data;
            console.log("Movie: " + result.Title);
            console.log("Release year: " + result.Year);
            console.log("IMDB rating: " + result.imdbRating);
            console.log("Rotten Tomatoes rating: " + result.Ratings[1].Value);
            console.log("Country: " + result.Country);
            console.log("Language: " + result.Language);
            console.log("Plot: " + result.Plot);
            console.log("Actors: " + result.Actors);
        })
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, response) {
        if (err) {
            console.log("error");
        } else {

        }
    })
}