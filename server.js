
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/HOME.html'));
});
app.get('/app', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app.html'));
});
app.get('/app1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app1.html'));
});
app.get('/app2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app2.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});