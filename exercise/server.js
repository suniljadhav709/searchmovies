var express = require('express');
var bodyParser = require('body-parser');


var app = express();


app.use(bodyParser.json()); 

app.use(function(req, res, next) {
    console.log('Setting CORS properties');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.get('/title/:title',function (request, res) {
    var title = request.params.title;
    console.log('Title : ' + title);
    res.json(data);    
    
})
app.listen(3000, function() {
    console.log(' you can now navigate to localhost:3000');
});