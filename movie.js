var MovieObj = {
    request: require("request"),
    query: function(queryString){
        let newQuery = queryString.replace(" ", "+");
        let query = "http://www.omdbapi.com?apikey=trilogy&t=" + newQuery;
        this.request(query, function(err, response, body) {
            if(err) {
                return console.log("Request Error: " + err);
            }

            let fdata = JSON.parse(body);
            //console.log(fdata);

            console.log("Title: " + (typeof fdata.Title === "undefined" ? "Not Specified" : fdata.Title));
            console.log("Release Year: " + (typeof fdata.Year === "undefined" ? "Not Specified" : fdata.Year));
            console.log("IMDB Rating: " + (typeof fdata.imdbRating === "undefined" ? "Not Specified" : fdata.imdbRating));
            console.log("Rotten Tomatoes Rating: " + (typeof fdata.Ratings[1] === "undefined" ? "Not Specified" : fdata.Ratings[1].Value));
            console.log("Production Country: " + (typeof fdata.Country === "undefined" ? "Not Specified" : fdata.Country));
            console.log("Language: " + (typeof fdata.Language === "undefined" ? "Not Specified" : fdata.Language));
            console.log("Plot: " + (typeof fdata.Plot === "undefined" ? "Not Specified" : fdata.Plot));
            console.log("Actors: " + (typeof fdata.Actors === "undefined" ? "Not Specified" : fdata.Actors));

            let fs = require("fs");
            fs.appendFile("log.txt",
                "Title: " + (typeof fdata.Title === "undefined" ? "Not Specified" : fdata.Title) + "\n" +
                "Release Year: " + (typeof fdata.Year === "undefined" ? "Not Specified" : fdata.Year) + "\n" +
                "IMDB Rating: " + (typeof fdata.imdbRating === "undefined" ? "Not Specified" : fdata.imdbRating) + "\n" +
                "Rotten Tomatoes Rating: " + (typeof fdata.Ratings[1] === "undefined" ? "Not Specified" : fdata.Ratings[1].Value) + "\n" +
                "Production Country: " + (typeof fdata.Country === "undefined" ? "Not Specified" : fdata.Country) + "\n" +
                "Language: " + (typeof fdata.Language === "undefined" ? "Not Specified" : fdata.Language) + "\n" +
                "Plot: " + (typeof fdata.Plot === "undefined" ? "Not Specified" : fdata.Plot) + "\n" +
                "Actors: " + (typeof fdata.Actors === "undefined" ? "Not Specified" : fdata.Actors) + "\n---------------------------\n",
                function(err) {
                    if(err) return console.log("Could not write to logfile");
                }
            )
        });
    }
}

exports.movie = MovieObj;