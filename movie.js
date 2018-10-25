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
        });
    }
}

exports.movie = MovieObj;