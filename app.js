var express = require('express');
var app = express();
var PORT = process.env.PORT || 4242;
var home = require('./routes/route');
​
app.use('/', home)
// app.use('/products', product);
​
app.listen(PORT, function(){
  console.log('Server up and running at port 4242');
});