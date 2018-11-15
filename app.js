var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
var db_url = 'mongodb://cue:cue12345@ds163103.mlab.com:63103/popp'
var db = mongoose.connection;

var PORT = process.env.PORT || 4242;
var home = require('./routes/home.route');
var product = require('./routes/product.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);
app.use('/', express.static(__dirname + '/www'));
app.use('/products', product);

mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Please use 'supervisor app.js' to start the server, it'll monitor changes in the files and restart automatically.
app.listen(PORT, function(err){
  if(err) {
    console.log('Connection error.');
  } else {
    console.log('Server up and running at port', + PORT + '.');
  }
});