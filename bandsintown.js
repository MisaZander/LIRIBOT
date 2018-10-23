var BITObj = {
    //moment: require("moment"),
    axios: require("axios"),
    query: function(queryString) {
        var query = "https://rest.bandsintown.com/artists/" + queryString + "/events?app_id=codingbootcamp";
        // let query = {
        //     url: queryString,
        //     method: "GET"
        // }

        this.axios.get(query)
        .then(function(response) {
            //console.log(response.data[0]);
            // let fs = require("fs");
            // fs.appendFile("log.txt", "\n" + JSON.stringify(response, null, "\t"), function(fudge) {
            //     if(fudge){
            //         return console.log("Could not log output to file");
            //     }

            //     console.log("Data logged to log.txt");
            // })
            // .catch(function(error) {
            //     console.log("File write error: " + error);
            // });
            var moment = require("moment");
            for(let i = 0; i < response.data.length; i++) {
                console.log("Venue: " + response.data[i].venue.name);
                console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region);
                console.log("Date: " + moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format("MM/DD/YYYY"));
                console.log("---------------------------");

                if(i === 4){
                    break; //Limit to 5 results
                }
            }
        })
        .catch(function(error) {
            console.log("Axios Error: " + error);
        });
    }
};

exports.bandsintown = BITObj;