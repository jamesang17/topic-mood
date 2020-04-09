const axios = require('axios');

/*
module.exports exports this function so it can be required by another file
(in this case, server.js).
Must pass in app because it contains the express application.
*/

const getRuns = async () => {
    try {
        return await axios.get("http://localhost:8080/api/experimental/dags/tweet_analyzer/dag_runs");
    } catch(error) {
        console.log(error);
    }
}

module.exports = function(app) {
    app.get('/dag_run_status',function(req,res) {
        const runs = getRuns();
        runs.then((response) => {
            var state = response.data[response.data.length-1]["state"];
            console.log("State: " + state);
            res.send(state);
        });
    });
}
