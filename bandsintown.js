var BITObj = {
    request: require("request"),
    query: function(queryString) {
        var query = "https://rest.bandsintown.com/artists/" + queryString + "/events?app_id=codingbootcamp";
        this.request(query, function(err, response, data) {
            var moment = require("moment");
            var fdata = JSON.parse(data);
            //console.log(fdata);
            for(let i = 0; i < fdata.length; i++) {
                console.log("Venue: " + fdata[i].venue.name);
                console.log("Venue Location: " + fdata[i].venue.city + ", " + fdata[i].venue.region);
                console.log("Date: " + moment(fdata[i].datetime, "YYYY-MM-DDTHH:mm:ss").format("MM/DD/YYYY"));
                console.log("---------------------------");

                if(i === 4){
                    break; //Limit to 5 results
                }
            }
        });
    }
};

exports.bandsintown = BITObj;