var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.listen(4242, function(){
    console.log('Server up and running at port 4242');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/index.html');
});