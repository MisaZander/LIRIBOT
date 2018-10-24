require("dotenv").config();
var spotify = require("./spotify.js");
var bandsintown = require("./bandsintown.js");
var movie = require("./movie");
var command = process.argv[2];
var query = process.argv[3];

if(typeof command === "undefined") {
    //If no command is entered, stop the program
    return printHelp();
}
command = command.toLowerCase();

switch(command) {
    case "spotify-this-song":
        spotify.spotifyObj.query(query);
    break;
    case "concert-this":
        bandsintown.bandsintown.query(query);
    break;
    case "movie-this":
        movie.movie.query(query);
    break;
    case "do-what-it-says":
    
    break;
    default:
        printHelp();
    break;
};

function printHelp() {
    console.log("Invalid command syntax. The proper syntax is:");
    console.log("node liri.js <command> [<query>]");
    console.log("Possible commands are:");
    console.log("concert-this 'artist/band name'");
    console.log("spotify-this 'song-name'");
    console.log("movie-this 'movie-name'");
    console.log("do-what-it-says");
};