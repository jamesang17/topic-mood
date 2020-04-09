const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  express.static(path.join(__dirname, 'build'));    
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.get('/ping', function(req,res) {
    console.log('pong')
    return res.send('pong');
})

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.get('', (req, res) => {
//     request(
//     { url: 'https://wwxa5xebjh.execute-api.us-east-1.amazonaws.com/production/sentimentresults/topics' },
//     (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//             return res.status(500).json({ type: 'error', message: error.message });
//         }
//         console.log(JSON.stringify(body));
//         res.json(JSON.parse(body));
//     }
//     )
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));