var MovieObj = {
    request: require("request"),
    query: function(queryString){
        let newQuery = queryString.replace(" ", "+");
        let query = "http://www.omdbapi.com?apikey=trilogy&t=" + newQuery;
        this.request(query, function(err, response, body) {
            if(err) {
                return console.log("Request Error: " + err);
            }

            let formattedResponse = JSON.parse(body);
            console.log(formattedResponse);

            //console.log(body);
            
        });
    }
}

exports.movie = MovieObj;