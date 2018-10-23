function SpotifyObj() {
    this.keys = require("./keys.js");
    this.Spotify = require("node-spotify-api");
    this.spotify = new this.Spotify(this.keys.spotify);
    this.query =  function(queryString) {
        let searchObj = {
            type: "track",
            query: queryString,
            limit: 1
        };

        this.spotify.search(searchObj, function(err, data) {
            if(err) {
                return console.log("Whoops: " + err);
            }
            let fs = require("fs");
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

            fs.appendFile("log.txt", "\n" + JSON.stringify(data.tracks.items[0], null, "\t"), function(fudge) {
                if(fudge){
                    return console.log("Could not log output to file");
                }

                console.log("Data logged to log.txt");
            });
        });
    },
    this.get = function() {
        console.log(typeof this.keys.spotify);
        console.log(this.keys.spotify);
        console.log(typeof this.Spotify);
        console.log(this.Spotify)
    };
}

var spotify = new SpotifyObj();
exports.spotifyObj = spotify;