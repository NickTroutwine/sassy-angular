var express = require('express');
var app = express(); 
var path = require('path')

app.get('/angular', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});
app.get('/sass', function (req, res){
 res.sendFile(path.join(__dirname, '/../client/index.html'));
});

app.all('/',function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});



app.use(express.static('client'));


app.listen(process.env.PORT || 3000);
module.exports = app;
