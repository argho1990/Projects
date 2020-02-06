const express = require('express');//1 [imports]
const bodyParser = require('body-parser');//2 [imports]
const port = 3000;
//8. 
const api = require('../routes/api');

const app = express();//2.[create an instance of express]

app.use(bodyParser.json()); //3.[body parser to handle json data.]

app.use('/api', api);

app.get('/', function (req, res) {  //4.
    res.send('Hello from server')
});

app.listen(port, function () { //5.
    console.log("Server running on localhost:" + port);
});


