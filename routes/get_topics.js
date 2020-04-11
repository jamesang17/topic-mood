const axios = require('axios');
/*
module.exports exports this function so it can be required by another file
(in this case, server.js).
Must pass in app because it contains the express application.
*/
const getTopics = async () => {
    try {
        return await axios.get("https://myapi.execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics");
    } catch(error) {
        console.log(error);
    }
}

/*
Gets the list of all analzyed topics
*/
module.exports = function(app) {
    app.get('/topics',function(req,res) {
        const topics = getTopics();
        topics.then((response) => {
            var data = JSON.parse(response.data["body"]);
            let items = data["Items"];
            var topics = [];
            var seen = new Set();
            for (var i=0;i<4;i++){
                var idx = Math.floor(Math.random() * items.length);
                if (!seen.has(idx)) {
                    topics.push(items[idx]["topic"]);
                } else {
                    seen.add(idx);
                }
            }
            res.send(topics);
        });
    });
}
