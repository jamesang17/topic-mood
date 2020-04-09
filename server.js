const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express(); // initialize express

// index route (require from index routes file and pass in express app)
require('./routes/index')(app);
// dag_runs route for getting airflow dag runs
require('./routes/dag_runs')(app);
// start_dag route for kicking off the tweet_analyzer dag
require('./routes/trigger_dag')(app);
// dag_run_status route for getting the status of the last dag run
require('./routes/dag_run_status')(app);

/* start the server */
app.listen(PORT, () => {
  console.log('App running on port : ' + PORT);
});
