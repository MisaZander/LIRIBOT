function SpotifyObj() {
    this.keys = require("./keys.js");
    this.Spotify = require("node-spotify-api");
    this.spotify = new this.Spotify(this.keys.spotify);
    this.query =  function(queryString) {
        let searchObj = {
            type: "track",
            query: queryString,
            //limit: 1
        };

        this.spotify.search(searchObj, function(err, data) {
            if(err) {
                return console.log("Spotify API call error:: " + err);
            }
            let fs = require("fs");
            for(let j = 0; j < data.tracks.items.length; j++) {   
                let album = data.tracks.items[j].album;
                let artist = data.tracks.items[j];

                var artists = "";
                for(let i = 0; i < artist.artists.length; i++){
                    artists += artist.artists[i].name;
                    artists += ", ";
                }
                console.log("Artists: " + artists);
                console.log("Song Name: " + artist.name);
                console.log("Preview Link: " + artist.preview_url);
                console.log("Album Name: " + album.name);
                console.log("---------------------------");

                fs.appendFile("log.txt", 
                "Artists: " + artists + "\n" +
                "Song Name: " + artist.name + "\n" +
                "Preview Link: " + artist.preview_url + "\n" +
                "Album Name: " + album.name + "\n-----------------------\n"
                , function(fudge) {
                    if(fudge){
                        return console.log("Could not log output to file");
                    }

                    //console.log("Data logged to log.txt");
                });
            }
        });
    },
    this.get = function() {
        console.log(typeof this.keys.spotify);
        console.log(this.keys.spotify);
        console.log(typeof this.Spotify);
        console.log(this.Spotify);
    };
}

var spotify = new SpotifyObj();
exports.spotifyObj = spotify;