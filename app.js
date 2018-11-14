var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 4242;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/index.html');
});

app.listen(PORT, function(){
    console.log('Server up and running at port 4242');
});