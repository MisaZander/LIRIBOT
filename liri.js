require("dotenv").config();
var spotify = require("./spotify.js");

spotify.spotifyObj.query("We are Young");
//spotify.spotifyObj.get();