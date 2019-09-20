var express = require('express');
var bodyParser = require('body-parser');
const superagent = require('superagent');

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
    superagent.get('http://www.omdbapi.com')
    .query({ apikey: '386a5cc3', t: title })
    .end((err, resData) => {
      
        if (err) { return res.json(err);  }
        
        return res.json(resData.body); 
    });
    
})
app.listen(3000, function() {
    console.log(' you can now navigate to localhost:3000');
});