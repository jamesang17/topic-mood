const axios = require('axios');
/*
module.exports exports this function so it can be required by another file
(in this case, server.js).
Must pass in app because it contains the express application.
*/
const getDagRuns = async () => {
    try {
        return await axios.get("http://localhost:8080/api/experimental/dags/tweet_analyzer/dag_runs");
    } catch(error) {
        console.log(error);
    }
}

/*
Gets the list of all dag runs for the Dag tweet_analyzer
*/
module.exports = function(app) {
    app.get('/dag_runs',function(req,res) {
        const dagRuns = getDagRuns();
        dagRuns.then((response) => {
            res.send(response.data);
        });
    });
}
