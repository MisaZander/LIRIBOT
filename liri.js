require("dotenv").config();
var spotify = require("./spotify.js");
var bandsintown = require("./bandsintown.js");
var movie = require("./movie.js");
var fs = require("fs");
var command = process.argv[2];
var query = process.argv[3];

function liribot(c, q) {
    switch(c) {
        case "spotify-this-song":
            spotify.spotifyObj.query(q);
        break;
        case "concert-this":
            bandsintown.bandsintown.query(q);
        break;
        case "movie-this":
            movie.movie.query(q);
        break;
        case "do-what-it-says":
            fs.readFile("random.txt", "utf8", function(err, data) {
                if(err) {
                    return console.log("Could not read 'random.txt'. Does it exist?");
                }

                let input = data.split(",");
                liribot(input[0], input[1]);
            });
        break;
        default:
            printHelp();
        break;
    };
}

function printHelp() {
    console.log("Invalid command syntax. The proper syntax is:");
    console.log("node liri.js <command> [<query>]");
    console.log("Possible commands are:");
    console.log("concert-this 'artist/band name'");
    console.log("spotify-this 'song-name'");
    console.log("movie-this 'movie-name'");
    console.log("do-what-it-says");
};

//Main
if(typeof command === "undefined") {
    //If no command is entered, stop the program
    return printHelp();
}
command = command.toLowerCase();

liribot(command, query);