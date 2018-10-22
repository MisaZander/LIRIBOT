require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");

var query = {
    type: "track",
    query: "Ace of Spades",
    limit: 1
}

spotify.search(query, function(err, data) {
    if(err) {
        return console.log("Crap " + err);
    }

    console.log(data);
    fs.appendFile("log.txt", JSON.stringify(data), function(fudge) {
        if(fudge){
             return console.log("Could not log output to file");
        }

        console.log("Data logged to log.txt");
    });
});