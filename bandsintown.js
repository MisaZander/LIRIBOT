var BITObj = {
    request: require("request"),
    query: function(queryString) {
        var query = "https://rest.bandsintown.com/artists/" + queryString + "/events?app_id=codingbootcamp";
        this.request(query, function(err, response, data) {
            var moment = require("moment");
            var fs = require("fs");
            var fdata = JSON.parse(data);
            //console.log(fdata);
            if(fdata.length === 0) {
                fs.appendFile("log.txt", "No events scheduled for specified query.", function(err) {
                    
                });
                return console.log("No events scheduled for specified query.");                
            }
            for(let i = 0; i < fdata.length; i++) {
                console.log("Venue: " + (typeof fdata[i].venue.name === "undefined" ? "Not Specified" : fdata[i].venue.name));
                console.log("Venue Location: " + (typeof fdata[i].venue.city === "undefined" ? "Not Specified" : fdata[i].venue.city)  + ", " + (typeof fdata[i].venue.region === "undefined" ? "Not Specified" : fdata[i].venue.region));
                console.log("Date: " + moment((typeof fdata[i].datetime === "undefined" ? "Not Specified" : fdata[i].datetime) , "YYYY-MM-DDTHH:mm:ss").format("MM/DD/YYYY"));
                console.log("---------------------------");

                if(i === 4){
                    break; //Limit to 5 results
                }
            }
            
            for(let i = 0; i < fdata.length; i++) {
                fs.appendFile("log.txt", 
                    "Venue: " + (typeof fdata[i].venue.name === "undefined" ? "Not Specified" : fdata[i].venue.name)  + "\n" +
                    "Venue Location: " + (typeof fdata[i].venue.city === "undefined" ? "Not Specified" : fdata[i].venue.city)  + ", " + (typeof fdata[i].venue.region === "undefined" ? "Not Specified" : fdata[i].venue.region)  + "\n" +
                    "Date: " + moment((typeof fdata[i].datetime === "undefined" ? "Not Specified" : fdata[i].datetime), "YYYY-MM-DDTHH:mm:ss").format("MM/DD/YYYY") + "\n-------------------------------\n",
                    function(err) {
                        if(err) {
                            return console.log(err);
                        }
                    }
                );

                if(i === 4){
                    break; //Limit to 5 results
                }
            }
        });
    }
};

exports.bandsintown = BITObj;