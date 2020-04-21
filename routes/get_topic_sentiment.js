const axios = require('axios');
/*
module.exports exports this function so it can be required by another file
(in this case, server.js).
Must pass in app because it contains the express application.
*/
async function getTopicSentiment(topic) {
    try {
        return await axios.get("https://" + process.env.REACT_APP_API_NAME + ".execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics/" + encodeURIComponent(topic));
    } catch(error) {
        console.log(error);
    }
}

/*
Gets the list of all analzyed topics
*/
module.exports = function(app) {
    app.get('/topics/:topic',function(req,res) {
        var topic = decodeURI(req.params.topic);
        const topics = getTopicSentiment(topic);
        topics.then((response) => {
            var resData = new Map();
            var data = JSON.parse(response.data["body"]);
        	var sentimentData = [];
        	let items = data["Items"];
          if (items.length === 0) {
            res.send(JSON.stringify([]));
          } else {
            for(var i=0;i<items.length;i++){
          		var timestamp = items[i]["timestamp"].split("T")[0];
          		var sentiment = items[i]["sentiment"];
          	       sentimentData.push({ timestamp,sentiment });
          	}
              resData.set("data", sentimentData)
              resData.set("topic", items[0]["topic"])
              resData.set("latestSen", items[items.length-1]["sentiment"])
              resData.set("posSent", items[items.length-1]["maxPosText"])
              resData.set("negSent", items[items.length-1]["maxNegText"])
              res.send(JSON.stringify(Array.from(resData.entries())));
          }
        });
    });
}
