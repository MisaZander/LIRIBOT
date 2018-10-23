var BITObj = {
    moment: require("moment"),
    axios: require("axios"),
    query: function(queryString) {
        var query = "https://rest.bandsintown.com/artists/" + queryString + "/events?app_id=codingbootcamp";
        // let query = {
        //     url: queryString,
        //     method: "GET"
        // }

        this.axios.get(query)
        .then(function(response) {
            console.log(response.data[0]);
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
        })
        .catch(function(error) {
            console.log("Axios Error: " + error);
        });
    }
};

exports.bandsintown = BITObj;