const axios = require('axios');

/*
module.exports exports this function so it can be required by another file
(in this case, server.js).
Must pass in app because it contains the express application.
*/

async function startDagRun(topic) {
    const headers = {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json"
    }
    try {
        return await axios.post(
            "http://localhost:8080/api/experimental/dags/tweet_analyzer/dag_runs",
            {"conf": "{\"topic\":\"" + topic + "\"}"}, { headers: headers }
        );
    } catch(error) {
        console.log(error);
    }
}

module.exports = function(app) {
    app.get('/trigger_dag/:topic',function(req,res) {
        var topic = decodeURI(req.params.topic);
        console.log(topic);
        const startRun = startDagRun(topic);
        var startRunStatus = null;
        startRun.then((response) => {
            startRunStatus = response.status;
            console.log("status : " + startRunStatus);
            res.send(startRunStatus);
        });
    });
}
