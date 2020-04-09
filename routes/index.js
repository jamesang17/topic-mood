/*
module.exports exports this function so it can be required by another file
(in this case, server.js).
Must pass in app because it contains the express application.
*/
module.exports = function(app) {
    // if no matching route is found default to index.html
    app.get('/',function(req,res) {
        res.send('Hello from simple react project.');
    });
}
