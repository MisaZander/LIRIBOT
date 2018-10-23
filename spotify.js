// var keys = require("./keys.js");
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
// var fs = require("fs");

// var query = {
//     type: "track",
//     query: "We Are Young",
//     limit: 1
// }

// spotify.search(query, function(err, data) {
//     if(err) {
//         return console.log("Crap " + err);
//     }

//     let album = data.tracks.items[0].album;
//     let artist = data.tracks.items[0];

//     var artists = "";
//     for(let i = 0; i < artist.artists.length; i++){
//         artists += artist.artists[i].name;
//         artists += ", ";
//     }
//     console.log("Artists: " + artists);
//     console.log("Song Name: " + artist.name);
//     console.log("Preview Link: " + artist.preview_url);
//     console.log("Anal Bum Cover: " + album.name);

//     fs.appendFile("log.txt", "\n" + JSON.stringify(data.tracks.items[0], null, "\t"), function(fudge) {
//         if(fudge){
//              return console.log("Could not log output to file");
//         }

//         console.log("Data logged to log.txt");
//     });
// });
require("dotenv").config();
// var keys = require("./keys.js");
// console.log(keys);
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
var spotifyObj = {
    keys: require("./keys.js"),
    Spotify: require("node-spotify-api"),
    //spotifyAPI: new this.Spotify(this.keys.spotify),
    fs: require("fs"),
    query: function(queryString) {
        let searchObj = {
            type: "track",
            query: queryString,
            limit: 1
        };

        this.spotifyAPI.search(searchObj, function(err, data) {
            if(err) {
                return console.log("Whoops: " + err);
            }

            let album = data.tracks.items[0].album;
            let artist = data.tracks.items[0];

            var artists = "";
            for(let i = 0; i < artist.artists.length; i++){
                artists += artist.artists[i].name;
                artists += ", ";
            }
            console.log("Artists: " + artists);
            console.log("Song Name: " + artist.name);
            console.log("Preview Link: " + artist.preview_url);
            console.log("Anal Bum Cover: " + album.name);

            this.fs.appendFile("log.txt", "\n" + JSON.stringify(data.tracks.items[0], null, "\t"), function(fudge) {
                if(fudge){
                    return console.log("Could not log output to file");
                }

                console.log("Data logged to log.txt");
            });
        });
    },
    get: function() {
        console.log(typeof this.keys.spotify);
    }
};

exports.spotifyObj = spotifyObj;