var express = require('express');
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.json()); 


app.listen(3000, function() {
    console.log(' you can now navigate to localhost:3000');
});