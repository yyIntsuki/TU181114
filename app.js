var express = require('express');
var app = express();
var PORT = process.env.PORT || 4242;
var home = require('./routes/route');
<<<<<<< HEAD
​
app.use('/', home)
// app.use('/products', product);
​
=======

app.use('/', home)
// app.use('/products', product);

>>>>>>> 997dece0a58726f29dfd3e4f67be67a96f2864ef
app.listen(PORT, function(){
  console.log('Server up and running at port 4242');
});