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

            console.log("Title: " + fdata.Title);
            console.log("Release Year: " + fdata.Year);
            console.log("IMDB Rating: " + fdata.imdbRating);
            console.log("Rotten Tomatoes Rating: " + fdata.Ratings[1].Value);
            console.log("Production Country: " + fdata.Country);
            console.log("Language: " + fdata.Language);
            console.log("Plot: " + fdata.Plot);
            console.log("Actors: " + fdata.Actors);

            let fs = require("fs");
            fs.appendFile("log.txt",
                "Title: " + fdata.Title + "\n" +
                "Release Year: " + fdata.Year + "\n" +
                "IMDB Rating: " + fdata.imdbRating + "\n" +
                "Rotten Tomatoes Rating: " + fdata.Ratings[1].Value + "\n" +
                "Production Country: " + fdata.Country + "\n" +
                "Language: " + fdata.Language + "\n" +
                "Plot: " + fdata.Plot + "\n" +
                "Actors: " + fdata.Actors + "\n---------------------------\n",
                function(err) {
                    if(err) return console.log("Could not write to logfile");
                }
            )
        });
    }
}

exports.movie = MovieObj;