require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var artist = "";
var song = "";
var movie = "";
var input = process.argv;

if (input[2] === "concert-this") {
    console.log(1);
} else if (input[2] === "spotify-this-song") {
    console.log(2);
} else if (input[2] === "movie-this") {
    console.log(3);
} else if (input[2] === "do-what-it-says") {
    console.log(4);
} else {
    console.log("I don't understand");
}